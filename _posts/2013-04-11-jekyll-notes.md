---
layout: post
permalink: jekyll-notes
---

YAML front-matter
-----------------

Syntax for front matter is to delimit it by two sets of three dashes.  In front matter, set `layout` to pick a custom layout for the file.  Set `permalink` if you don't want to follow the default /y/m/d/title.html.  You can set `published` to false if you don't want it to show up on site.  This doesn't seem particularly useful to me because it means I can't see it either.  Also category, categories and tags.  I'm not sure the difference between category and categories.

YAML front matter is also where you put the variables that are passed to the template engine.

Create list of posts
--------

Basically like this:

{% highlight html linenos %}
    <ul>
      {% for post in site.posts %}
        <li>
          <a href="{{ post.url }}">{{ post.title }}</a>
        </li>
      {% endfor %}
    </ul>
{% endhighlight %}


To create more specific lists use tags or categories:

>site.categories.CATEGORY
The list of all Posts in category CATEGORY.
site.tags.TAG
The list of all Posts with tag TAG.


How is index.html created?
-------------------------

The instructions are contained in the YAML front matter to index.md.  This first instructs that the layout is page.  _layouts/page.html in turn has a layout of default.  _layouts/default.html has a theme which loads the CSS.  Then we see liquid in action; first include JB/setup, then include themes/twitter/default.html.

themes/twitter/default.html is the first place you see actual HTML that gets rendered.
