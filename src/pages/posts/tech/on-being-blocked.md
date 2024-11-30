---
layout: '@/layouts/BlogPost.astro'
title: On being blocked
author: Daniel Echlin
date: November 22nd, 2024
---

I read Gergely Orosz, *The Software Engineer's Guidebook*, because Orosz's blog [The Pragmatic Engineer Newsletter](https://www.pragmaticengineer.com/) is really good, and because the book is framed for senior-plus engineers unlike many of these titles.

Personal productivity in general is a confounding topic for software engineers, because it's not quite clear if it's more of a self-help or therapy topic, or a central skill to software engineering that isn't duplicated even in other knowledge fields. The wise answer is that it's probably both; unfortunately it's also a useless answer because if you want to improve your productivity, you pretty much need to pick one path or the other.

Maybe personal productivity as an engineer is more like a Tootsie pop? There's a tough exterior best described in terms of difficult engineering situations, and a gooey inside filled with personal development, including the psychological and emotional kinds. Okay, maybe not the best analogy, but let's work with it.

Orosz has a chapter called "Getting Things Done". There's 3 key points among others:

1. Focus on the most important piece of work
2. Unblock yourself (and know when you're blocked)
3. Break down the work

These pieces of advice are fine by themselves, but they describe the "engineering exterior", and miss an important way they interrelate. I would qualify these three rules with:

1. The most important piece of work is dynamic
2. Being blocked is a state of mind
3. Breaking down work while in a blocked state of mind is just wishful thinking

When I say the most important piece of work is dynamic, a simple but common example is: at the start of the week you say the most important piece of work is to fix a bug. By Tuesday it turns out the bug is *way* harder than you thought and requires rearchitecting the whole system. You had better recognize your most important piece of work is now to document the complexity of the bug and not to solve it, instead of to solve the bug.

As a state of mind, being blocked is a claim of absence: you understand the totality of your work, and no progress is to be made on it. How being blocked emotionally manifests can fall into two broad buckets: detaching or (uselessly) attaching. This is individual and varies on circumstance so you need to tune into yourself to figure out which one you are.

**Detachers**:

* * Get bored, lonely, read the news instead of do work
* * Blame their inability to focus as a problem; may cast their problems in terms of a focus-related psychology disorder like ADHD [and they may be right, in which case they should pursue treatment, *and also* pursue career advice and mentorship independent of the disorder]
* * Should interpret boredom as a sign to lean into the work
* * Should focus on what's *interesting* about the work that they're missing

**Attachers**:

* * get a little too focused or work long hours in spite of going nowhere and don't realize it
* * Blame their inability to get anywhere in spite of doing their ostensible best as a problem; may cast their problems in terms of academic inadequacy (accurately, or inaccurately... hopefully inaccurately)
* * Should interpret focus without progress as a sign to step back from work

Synthesizing the above two points: *any* time you experience a blocked state of mind, as evidenced bye your emotional posture toward the problem, the most important piece of work has changed. There are many examples:

* **Important work**: get a design doc approved
* * Engineering blocker: approvals taking too long
* * Emotional cue: got exhausted trying to track down so many people
* * New important work: get mentorship from manager on how to track down approvals; start prototyping in the meantime
* **Important work**: fix this bug
* * Engineering blocker: can't repro
* * Emotional cue: spent a really long time trying to repro
* * New important work: fight-or-flight: close as can't repro or meet with a customer to get a repro
* ****Important work****: implement new feature
* * Engineering blocker: requirements not finalized
* * Emotional cue: doomscrolling while waiting for meetings
* * New important work: try to work more sync with PM by DMing and discussing, or more async by sending comments over. Say you're blocked in standup and pick another important task

* ****Important work****: improve system performance
* * Engineering blocker: performance issues only occur in production
* * Emotional cue: anxious about making changes without full understanding
* * New important work: respect anxiety; persuade team this is a bad approach; either improve fidelity of lower environments or improve monitoring in production

* ****Important work****: integrate third-party API
* * Engineering blocker: API documentation is outdated/incorrect
* * Emotional cue: overwhelmed by unexpected edge cases
* * New important work: reach out to vendor support; build small proof-of-concept to test assumptions

* ****Important work****: resolve tech debt
* * Engineering blocker: CRs not reviewed
* * Emotional cue: angry at teammates
* * New important work: align on importance of refactorings in a retro - maybe you've overestimated importance or maybe the large volume of refactorings breaks the usual flow

* ****Important work****: deploy critical security patch
* * Engineering blocker: patch breaks existing functionality
* * Emotional cue: paranoid about touching security-related code
* * New important work: step back and understand X.509s better; be clear this will take longer while getting this vital education
