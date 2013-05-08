---
layout: page
title: Dan Echlin's Personal Page
---
{% include JB/setup %}

I am a New York-based mathematically inclined software developer.  This is my personal page, which will include links to my GitHub, LinkedIn, and StackExchange profiles, as well as blog posts.  Blog posts I will probably broadly divide into "general" and "technical" categories.  The former category will include more personal observations as well as more politics-posts; in any case, they are opinions I have and would like to make public.  The latter is more to make sure that as I learn things either at work or on my own time, the knowledge learned exists somewhere.

I've left a lot of the [Jekyll Bootstrap](http://jekyllbootstrap.com) template and sample information in this page, since right now my interaction with this site is spent learning the framework I'm using to write it.  I am making it from Jekyll Bootstrap, from [Jekyll](http://jekyllrb.com), which is a way to generate a site with lots of blog posts but no moving parts.  GitHub offers hosting of Jekyll sites, and I don't know how to host any other site that can both serve as a simple personal page and a blog for free and without any moving parts like a database.

## Jekyll links:


* [Jekyll Quick Start](http://jekyllbootstrap.com/usage/jekyll-quick-start.html)
* [Jekyll Bootstrap documentation](http://jekyllbootstrap.com)
    
## Code for Sample posts

This blog contains sample posts which help stage pages and blog data.
When you don't need the samples anymore just delete the `_posts/core-samples` folder.

    $ rm -rf _posts/core-samples

Here's a sample "posts list".

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>