---
layout: '@/layouts/BlogPost.astro'
title: Meetings are about culture, not process
author: Daniel Echlin
date: November 22nd, 2024
url: https://medium.learningbyshipping.com/reaching-peak-meeting-efficiency-f8e47c93317a
tags:
  - tech
---

I read [Reaching Peak Meeting Efficiency](https://medium.learningbyshipping.com/reaching-peak-meeting-efficiency-f8e47c93317a). The main point is that meetings are about establishing culture, not about implementing process.

To me, meetings serve three primary non-process functions:

1. Alignment
2. Thinking
3. Connecting

I'll share two experiences of mine:

## The oncall meeting

The most important thing that happens in an oncall meeting is we align on how important oncall is. When I was wrapping up an oncall, I shared that I (quote) "didn't really" investigate two short-lived low-priority alerts, knowing they were (quote) "probably" spurious anyway, and knowing I was within the bounds of our process. This caught my teammate's attention. It's not that I did any one thing wrong, it's that something sounded off with how hard I was pressing for a better outcome. Well, I shared we had punted that alert before, and we knew it was hard to fix. At this point, it becomes apparent in the room that something indeed is wrong: we punted on fixing a thorny spurious alert, and that led to sagging interest in investigating low priority pages. So, we agreed on finding a short-term fix for the alert, and it was hacky, and it took a while, but it reflected how our team prioritizes oncall.

This discovery of a problem and subsequent alignment really wasn't going to happen without a meeting. And the team understands to have a healthy oncall, you have to talk about oncall on a weekly basis.

I would call this an "alignment" meeting. Note that "connecting" is also important in an oncall meeting, because the team establishes they're there for each other, including outside of work as required by oncall. Asking for coverage so you can go to the movies or something while oncall can be embarrassing, and it's easier to do that with people you've talked about oncall with synchronously first.

## Product meeting with legal

I had a small project involving saving user data for analysis. The technical lift was easy but there was a privacy lift, and I just had this feeling that something wasn't clicking, like legal conversation wasn't matching the code. It was a product 30 minutes. Specifically, after 27 minutes, legal asked us to confirm there wouldn't be any more changes to the requirements. 2 minutes later, I offered up 2 requirements we already had but just hadn't mentioned.

I was almost sheepish to respond to her prompt with a "well, actually..." but in retrospect I see why it came up when it came up. The three of us all had different stakes in the problem:

* Product manager knows how we want it to work.
* Legal knows how it's allowed to work.
* Engineer knows how it currently works.

The product/legal conversation primed me to think of the engineering requirements that were violating legal's assumptions about how we store data. So this was a "thinking" meeting. What came up by virtue of our connecting with each other was more important than what we went into the meeting with.

## Conclusion

You can get rid of any meeting by moving information along async, with the exception of aligning, connecting, and thinking. If you want to move something async, you need to answer "yes" to these three questions:

1. No new information is going to come up as a result of how people are interacting
2. Everyone is fully aligned on the process
3. It doesn't matter if stakeholders are better connected to each other

If one of those three things sound off, then you see the value of sync communication for your meeting.
