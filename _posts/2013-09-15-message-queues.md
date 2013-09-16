---
title: Message Queues are not a Silver Bullet
layout: post
category: technology
visibility: public
---

I've noticed a recurring theme among blog posts I've read about properly using message queues, and it's the fact that the message queue - whether it be RabbitMQ, some system hacked together over Redis (and I say "hacked" because I've never seen it done resiliently), or basically anything besides a job queue coded into a SQL database - is portrayed as a silver bullet against a software design problem. "Just use a message queue, and all of your problems will be solved" is the underlying theme.

I think what is actually going on here is that a lot of subtle business decisions manifest themselves in the technicalities of the messaging layer, and even worse, in ways that fundamentally affect the design of the messaging layer. Many tradeoffs involve creating state, but in unexpected ways. The end result is that message queues sound like a silver bullet, for precisely the reason that business decisions and risks that the developer was grappling with in a more coupled system are now hidden in the message layer. And that's exactly where the developer doesn't want risks to be: out of sight, out of mind, until the very end.

A rule of thumb is that once a risk surfaces in a software project, there really is only one way it can be resolved: as a tradeoff. (Or as a failed project.) It follows that a solution that avoids making a tradeoff - that is, a silver bullet - is just moving the problem somewhere else. This is the problem I have repeatedly experienced with message queues. I have left very important technical questions unanswered until the very end, including:

1.  Is it a problem if two producers submit similar tasks?
2.  Is a persistent record of all producer attempts needed?
3.  Is the task non-idempotent?
4.  Is it more important for all tasks to succeed eventually, or most tasks to succeed quickly?

These four bullet points have two things in common: one, they have technical implications that are not at all transparent to the business logic layer. Two, they all require more state to implement.

To give a concrete example, I recently implemented a system that sent referral emails to prospective users, and also sent reminder emails. An early problem we discovered was that some leads would not only receive a glut of invites, but a glut of reminders, and this was bad for both our brand and our deliverability (since the reminders were likely to be marked as spam when sent multiply). So we made a simple decision to make things easier: just only send one referral to a given lead. Except, this actually *increased* software complexity, because it meant the producers had to maintain global state of who had and had not been invited yet. So, we made a business decision that sounded easier to implement. And it *was* easier to implement, until we actually had to architect and scale the message layer.

But, it gets worse. Once the fire was put out, we decided to start capitalizing on the multiplicity of invitations. Problem was, the producer fired and forgot, and if it didn't fire - because the user was already invited - the message was entirely swallowed. Actually, as far as the message layer was concerned, the message wasn't swallowed: it never even *happened*. So, everything I've read about how to avoid swallowing messages (using progress sets or not auto-acknowledging message receipt) was totally irrelevant here. The user had taken an important action that we kept no record of whatosever, namely, inviting contacts who had been invited at least once before. Therefore we kept track in our database of users who have received invitations, and lo, requirement #2 was imposed.

Continuing onto when #3 and #4 came about, obviously, sending an email is not idempotent, to the extreme that sending out duplicate emails is very bad. That's requirement #3. But this didn't become a serious problem to us until we invoke requirement #4: because of changes in our business logic and, I am sorry to admit, problems in deploying a decoupled system growing in complexity faster than our ability to properly test a decoupled and scaled system whose requirements were still forming, emails were not always sent out when they should. But we were okay with them being sent out a few hours or a day late. I was using a single-threaded producer at this point that would run every five minutes. I took it offline to make some changes, and when I put it back online a few hours later - do you see what happened yet? - duplicate emails were sent! Because, the consumer had fallen behind and had not recorded deliveries yet, so the polls picked up the same requests multiple times.

The obvious patch here is to maintain which items are in production already. However, if this patch is applied, note the data we would be keeping track of at this point:

* a record of all tasks that are in progress (requirements #4 and 3)
* a record of all tasks that have not begun yet (requirement #2)
* a record of all tasks that have completed (requirement #1)

You are back to square one:  a full, robust message queue implemented over a database.  So much for message queuing!

Perhaps what bothers me most about this is that seemingly simplifying business decisions were made that caused nightmares only in the messaging layer. "Just don't send out duplicate invites" added immense complication to the producer. A business decision that was a world apart from the message layer had added serious complication to it. It's important to watch how state creeps into the messaging layer, and it doesn't take very much of it until the message bus becomes a superfluous optimization on top of a database queue, when the database "queue" was only intended for resilience and exceptional cases. Polls have their problems too, and not only at low latency or large scale, as documented by my example above where a single-threaded poll sent duplicate emails. My point is that messaging is subtle and technical regardless of the technology used. There are many reasons to use a message bus, but many problems in messaging are intrinsically coupled to business decisions. Therefore the only silver bullet possible in messaging would have to be very difficult to configure, and would not work out the box. I would be very happy with this, but I do not know of any messaging technology that is that feature-ful - please message me if I'm missing something.