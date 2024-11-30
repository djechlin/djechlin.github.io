---
layout: "../@/layouts/BlogPost.astro"
title: Are your local variables helping or harming code readability?
author: Dan Echlin
date: 2024-11-19
---

Code should be "readable," which doesn't mean much in itself, but suggests we should evaluate code quality from the viewpoint of who's reading it. Readers rarely read code for its own sake; rather they read code to get answers about how the system works. So readable code is code that makes it easy to understand how the system works.

The two main ways code can be unreadable are:

1. Misleading code - inaccurate variable names, incorrect documentation, buggy edge cases
2. Code with too much to keep track of - too many layers of indirection, too many variables, complex control flow, and anything "misleading" must necessarily be kept track of

As a code reviewer on various teams, I think code authors underestimate how much readable is helped or harmed by function implementations. Function implementation almost sounds too basic a topic, compared to class and component design, telemetry, using the right libraries and so forth. But code readers spend most of their time reading function bodies, so that function implementation has an outsized effect on code readability. And an unreadable function doesn't really make it hard to understand that function: it makes it hard for the reader to reason about the rest of the system since they're too busy trying to figure out that one function.

The advice in this article is going to come down to "prefer immutables."  But I'm going to show a lot of situations that rule gets violated and why it's so harmful.

1. Delayed assignment
2. If/then on whether something is assigned
3. Recycled variable

There's a few

1. Almost all local variables should be either immutable or builders of immutables.

Code can be unreadable because it's misleading, and because it creates too much stuff to keep track of.

There's two main ways code can be un-readable: be misleading, and create too much stuff to keep track of. And a big contributor to all the stuff to keep track of is local variables. This may seem surprising: the main

To aim for "readable" code means to evaluate code from the viewpoint of a reader. Readers read code to get answers about how the system works, and two things purely about the quality of the code they are reading make this difficult: surprises, and too much to keep track of. Your code may be very well factored into classes and functions, but the structure of your functions and your use of local variables in your functions may cause surprises and create too much to keep track of.

## Intro to cognitive bandwidth

Reading code induces cognitive strain. Imagine you're debugging why `listCollectionStats()` is showing an empty list in the frontend when you call it with a view. You're going to have to read a *lot* of code to learn whether views are a legal input ot `listCollectionStats`, and if not, which layers should manage the view/collection distinction and behave differently.

If the function `listCollectionStats()` isn't documented, you'll have to read its code in detail to learn how it handles views. All of your cognitive bandwidth could go into figuring out the code, and none will be left to solve your original task. Your standup update will be about reading `listCollectionStats` as a task in its own right.

Furthermore, studies show that when your cognitive bandwidth is maxed out, your heartrate rises, your eyes dilate, and you forget to breathe[^1]. That's why our goal is code that is *pleasant* to read, not merely possible to read.

Even if your classes are perfectly structured and your functions are perfectly factored, function bodies themselves can still induce cognitive strain (as `listCollectionStats` may have done above). However, you can make your functions readable by avoiding three code smells that impact function bodies:

1. Avoid read-write local variables
2. Avoid inaccurate variable names
3. Avoid complex control structure

### Code smell: long scope leads to inaccurate names

It's very easy to innocuously introduce an inaccurate variable name. In this example:

```Java
Date taylorSwiftBirthday;
taylorSwiftBirthday = December 13th;
```
There's an inaccurate variable name between lines 1 and 2. After line 1, `taylorSwiftBirthdate` says it refers to the birthday of legendary singer-songwriter Taylor Swift, but instead, it's null. In this two line, example, the fix is obvious:

```Java
Date taylorSwiftBirthday = December 13th;
```

But you will easily see real code making a mistake much like this. For example:

```Java
Connection c;
if (user.isAtKeyboard()) {
    c = user.connect();
} else {
    return null;
}
return c.getData();
```

When reading this code, the reader now has to add a mental register for whether c has been initialized. It's like there's a second variable `cIsSet` variable the reader is tracking. We want to avoid this.

[^1]: Kahneman *Thinking Fast And Slow* 2011 when discuss Add1, and NYT and other magazines discuss "email apnea".

### Code smell: avoid nontrivial null semantics

`null` should never mean anything other than "we don't have this thing right now." Continuing the above example

```Java
Response r;
if (request.isSmall()) {
    r = new SmallResponse();
}
if (r == null) {
    r = new BigResponse();
}
```

The null-ness of `r` is used for control flow. In the above example, an if/else structure would clean up the confusion, but in a complex function, this is bad.

### Code smell: don't reuse statuses

```Typescript
status = foo();
if (condition) {
    status = bar();
}
```

This forces the reader to track an implicit variable `isStatusFooStatusOrBarStatus`.
