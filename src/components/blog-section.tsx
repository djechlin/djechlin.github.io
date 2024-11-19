import { ArrowRight, Calendar, Clock } from 'lucide-react'

export default function BlogSection() {
  const blogPosts = [
    {
      title: "How to build a Bluesky bot that posts the AQI near Central Park",
      date: "2023-06-15",
      readTime: "5 min read",
      excerpt: "Learn how to create a Bluesky bot that provides real-time Air Quality Index updates for the Central Park area.",
      href: "#"
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
    <section id="blog" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Writing</h2>
        <ul className="space-y-8">
          {blogPosts.map((post, index) => (
            <li key={index} className="group border-b border-gray-200 dark:border-gray-700 pb-8 last:border-b-0">
              <a href={post.href} className="block hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200 p-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 group-hover:text-primary transition-colors duration-200 mb-2 sm:mb-0">{post.title}</h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span className="mr-4">{post.date}</span>
                    <Clock className="mr-2 h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-2">{post.excerpt}</p>
                <div className="flex items-center text-primary font-medium">
                  Read more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}