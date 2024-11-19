import { ArrowRight, Calendar, Clock } from 'lucide-react';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function BlogSection() {
  const blogPosts = [
    {
      title: "How to build a Bluesky bot that posts the AQI near Central Park",
      date: "2023-06-15",
      readTime: "5 min read",
      excerpt: "Learn how to create a Bluesky bot that provides real-time Air Quality Index updates for the Central Park area.",
      href: "#",
    },
    {
      title: "The 2022 election: A deep canvassing retrospective",
      date: "2023-05-20",
      readTime: "8 min read",
      excerpt: "Dive into the insights and lessons learned from deep canvassing efforts during the 2022 election cycle.",
      href: "#"
    },
    {
      title: "The future of relational organizing: A technology perspective",
      date: "2023-04-10",
      readTime: "6 min read",
      excerpt: "Explore how emerging technologies are shaping the future of relational organizing in political campaigns.",
      href: "#"
    }
  ]

  return (
    <section id="blog" className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest from the Blog</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader>
                <CardTitle className="text-xl font-semibold line-clamp-2">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span className="mr-4">{post.date}</span>
                  <Clock className="mr-2 h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </CardContent>
              <CardFooter className="mt-auto">
                <a
                  href={post.href}
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  Read more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}