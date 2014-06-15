---
title: Statistical mistakes the mathematically inclined even make
layout: post
category: general
visibility: public
---

I am reading Kahneman's *Thinking Fast and Slow* with the admittedly arrogant expectation that while the psychological and philosophical content will be very new and interesting to me, the statistical advice will be mostly yawners. After all, I majored in math in college, and besides the advanced coursework in geometry and algebra I prepped for brainteaser-based interviews and math competitions.

I'm writing about my background in such detail because I expect that anyone else with a similar background will: 1) be most assuredly convinced she or he has learned all the basics she can, and 2) be very curious to learn another one. Kahneman was mostly old hat to me, but there were three distinct and obvious traps that I walked right into, before, during and after explanation and discussion. They are hard to get done, which is especially ego-shattering because of how blatant they are.

####Fallacy One: The Law of Small Numbers

From Kahneman:

> A study of new diagnoses of kidney cancer in the 3,141 counties of the United States reveals a remarkable pattern. THe counties in which the incidence of kindey cancer is lowest are mostly rual, sparsely populated, and located in traditionally Republican states in the Midwest, the South, and the West. What do you make of this?

Your mind has, already, been very active in coming up with possible explanations. Does it have to do with religion? Maybe, but what does that have to do with kidney cancer? Diet? And, already, you are wrong, wrong to even be making those associations without making a more basic one first. Here's a hint:

> Now consider the counties in which the incidence of kidney cancer is highest. These ailing counties tend to be mostly rural, sparsely populated, and located in traditionally Republican states in the Midwest, the South, and the West.

Now the puzzle is harder. Okay, so what is it about rural counties that makes them so magical? The answer is, duh - they're smaller. Smaller sample sizes are more likely to deviate from the norm.

Think back. This may explain other dubious claims you've heard. Small schools have the highest test averages. (And other small schools have the lowest).

At this point in reading Kahneman, I was sold that this is important and I shoudl learn it. I also convinced myself I did. Until I failed the post-exam:

> Kim recently completed her graduate work. Her recommendations are spectacular and she gave a brilliant talk and impressed everyone in her interviews. She has no substantial track record of scientific productivity.  
  Jane has held a postdoctoral position for the last three years. She has been very productive and her research record is excellent, but her talk and interviews were less sparkling than Kim's.

Okay, from the presentation it's pretty obvious which candidate you are supposed to pick, but it's actually quite trivial, and the reason totally eluded me. A one-day sample of performance is subject to the law of small numbers whereas a larger sample (i.e., a whole career record) is not. Therefore, Kim is clearly the better candidate. The fact that I did not connect this to the issue of sample size shows that I have not grasped this principle as well as I would like. 


####When estimating from intuition, remember correlation coefficient

Here is the quiz.

> Julie is currently a senior in a state university. She read fluently when she was four years old.. What is her grade point average (GPA)?

If you are familiar with American schools and colleges, you probably came up with something like 3.7 or 3.8. Roughly, the process here is:

* estimate how good Julie is at reading
* estimate the same percentile on GPA
* match!

To be fair I would not put a high confidence on my 3.7 or 3.8, but I still got the mean way wrong. This method only works if you can assume a 100% correlation. (Obviously, now that you think about it). Kahneman offers the following mathematical trick, which I have not verified statistically, but I find amazing and delightful that it can be done so simply with so little effort:

1. To estimate Julie's GPA, start with the average GPA. (Say, 3.2).
2. Determine the GPA that directly corresponds to how good of a reader Jane is, i.e., the same percentile when ranked. (Say, 3.7).
3. Estimate the correlation coefficient. (Say, 0.30).
4. Move that fraction from the average toward the naive match. (So, `3.2 + .30*(3.7-3.2) = 3.45`.)

Looks far more average now, doesn't it?

#### Regression to the mean

This one is very important, but I'll cover it very tersely. Are you familiar with the Sports Illustrated curse? That is, when an athlete appears on Sports Illustrated, it dooms his or her career.

This one's pretty easy. If an athlete appears on Sports Illustrated, it only partly means they are very talented. It also means they just had a lucky season. So they're likely to regress back to the mean and have a normal season next time. Hence, the curse.

Now, the final exam:

> You are the sales forecaster for a department store chain. All stores are similar in size and merchandise selection, but their sales differ because of location, competition, and random factors. You are given the results for 2011 and asked to forecast sales for 2012. You have been instructed to accept the overall forecast of economists that sales ill increase overall by 10%. How would you complete the following table?


    Store        2011         2012
    1            $11m         ?
    2            $23m         ?
    3            $18m         ?
    4            $29m         ?
    Total        $81m         $89.1m

If you are like me, you just said "Just add 10%?" But this completely neglects regression to the mean. Store 2 and 4 clearly had a good year. That means you can partly attribute that to their being somehow better. But also partly to luck! So they must rubber band back.

And I completely missed this, just after reading a chapter entitled "Regression to the Mean." Novel, indeed.