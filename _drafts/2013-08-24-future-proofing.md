---
title: Future coding or coding for extensibility?
layout: post
category: technology
visibility: public
---

I read [this article](http://sebastiansylvan.com/2013/08/16/the-perils-of-future-coding/), which makes a lot of decent, nuanced points, but I think is a bit unfair to come to such a polemical conclusion from this. Some thoughts:

* Some issues in software engineering are religious issues. Which text editor to use is a religious issue. But I think some issues in software tend to argue more like incoherent political discussions. Just like we argue whether we should have bigger government or freer markets, we also argue whether we should write extensible, reusable code or beware the perils of future proofing. You can tell this is a matter of politics from the number of commonsense opinions on either side, that clearly by themselves, yet clearly adversarial and mutually exclusive opinion yet adversarial trope-like opinions on either side:  "Code for extensibility." (Who doesn't agree with that?) "Don't future proof." (Who doesn't agree with that?)

* A software developer really shouldn't take pride in either of writing quick code that works, or writing extensible code at the expense of immediate-term clarity or quickness. A software developer's goal should be to move her "fast v. good" curve altogether, so that she is fluent in writing good code fast or fast code robustly. Making either tradeoff judiciously should be considered an honorable defeat, and the goal should be to learn how not to have to make that tradeoff going forward.

* I'll give a concrete example of this: embrace functional programming, and think in terms of arrays and collections instead of scalars.  For instance, this code:

        runTest('bob');

 is less extensible than this code:

        ['bob'].forEach(runTest);

 The latter example used to look like an ugly instance of future-proofing to me. By now it reads pretty naturally. Becoming a developer who can write more fluent future-proofed code is a good thing. Writing for collections instead of scalars is one way to move the curve in this direction.

* I mentioned that making the fast v. robust tradeoff should be honorable defeat, and I would follow that with the assertion that it's not possible to do this judiciously until you actually know both ways to do it. I generally don't mind kludges, but I get really nervous when I'm implementing a kludgey solution and don't actually know the right way to do it. That means that there's something wrong with how I'm doing things, I don't know what, and I'm likely to find out at a nasty time. Once I know the right way, I can measure down from the right way to the dirty way and understand what tradeoffs I'm actually making, and decide from there.

* On the other hand, sometimes a good strategy is to risk doing something incorrectly or nonextensibly, for the purpose of learning how to do it the right way.  This is known by the contentious trope, "Build one to throw it away." This strategy tends to be safe when writing non-extensible code to handle a new exception to business logic. It will probably become clear the proper way to handle this class of exceptions once it comes up a few times, at which point it's easier to write extensible and reusable code. For architectural decisions this strategy tends to be far riskier, but sometimes still makes sense. However, if your first thought is to put the exceptional logic in an array that reads from a configuration file in XML or JSON, you'll likely write extensible code just as fast.


But, I want to conclude with a bigger problem with the actual argument against future-proofing presented and oft-cited. The argument that "future-proofing is wrong because you can't predict the future" is thoroughly wrong, particularly for the rather obvious reason that **no matter what job you have, no matter what industry you are in, the better you are at predicting the future, the more money you are paid.** Whenever you say that something isn't going to work, what are you doing? Predicting the future! In fact, the whole point of gaining experience is so new situations start looking like old situations and you can plan accordingly.

 Proofing against business requirements that haven't happened yet is generally wrong. If you find yourself doing this, you should talk to business and figure out whether it's worth building for, and if you are better at predicting this than business, then I congratulate you on your raise and increase in responsibility. But proofing at problems that you're probably going to have? Or refusing to code something that "feels wrong" because you're not particularly interested in discovering what's wrong with it on your first or second production run? That just makes you better at your job, not a blowhard prognosticator.

 In other words - **it's tempting and easy to use "future proofing" as a bogeyman and an excuse for being lazy.** And I mean the bad kind of lazy. An obvious case is the domain of error handling. The less experienced thing to do is say "that hasn't come up yet." The more experienced thing to do is to reply, "then write more tests." The first production run is technically in the future from the time of development, yet this is a reasonable horizon to "proof" against.

 Developers who get really good at this tend to do things like write languages, frameworks and technologies that keep more novice developers on the rails. Ultimately a less experienced developer writing a software component or library to avoid dealing with a problem again is not fundamentally different from a more experienced developer writing and popularizing a new language in which the problem simply can't happen.