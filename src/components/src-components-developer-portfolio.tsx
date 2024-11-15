import { Github, Linkedin, Mail } from 'lucide-react'

import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"

export function Portfolio() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="w-full border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <a className="flex items-center justify-center" href="#">
            <span className="sr-only">Daniel Echlin&apos;s Portfolio</span>
            <span className="font-bold text-xl">DE</span>
          </a>
          <nav className="flex gap-4 sm:gap-6">
            <a className="text-sm font-medium hover:underline underline-offset-4" href="#about">
              About
            </a>
            <a className="text-sm font-medium hover:underline underline-offset-4" href="#projects">
              Projects
            </a>
            <a className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <section className="mb-16">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
                Daniel Echlin
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Full-Stack Engineer | Democracy Enthusiast
              </p>
              </div>
          </section>

          <section id="about" className="mb-16">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-gray-600 dark:text-gray-400">
            I'm a software engineer who has built high-scale systems at Google, MongoDB and Unroll.me, with a focus on designing and implementing scalable systems that meet complex business needs. I bring a strong foundation in both backend and frontend development in languages like C++, Java, Python, Go and Typescript.

Beyond the code, I love supporting my team—whether that’s through mentoring, sharing knowledge, or finding ways to make our processes smoother and more effective. For me, it’s all about building great products in a collaborative, positive environment where everyone can thrive.

            </p>
          </section>

          <section id="projects" className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Portfolio Projects</h2>
            <div className="flex flex-wrap justify-center gap-6">
              <Card className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.33%-1rem)] flex flex-col">
                <CardContent className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold mb-2">AQI bot</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex-grow">Posts the AQI near Central Park, NY to Bluesky. Experiment with Bluesky bots and Vercel crons.</p>
                  <a className="text-sm text-blue-500 hover:underline mt-auto inline-block" target="_blank" href="https://bsky.app/profile/aqibot.bsky.social">
                    bsky.app
                  </a>
                </CardContent>
              </Card>
              <Card className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.33%-1rem)] flex flex-col">
                <CardContent className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold mb-2">Swap your vote</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex-grow">Last-minute Airtable scripting contributions to matching algorithm (code not public).</p>
                  <a className="text-sm text-blue-500 hover:underline mt-auto inline-block" target="_blank" href="https://swapyourvote.org">
                    swapyourvote.org
                  </a>
                </CardContent>
              </Card>
              <Card className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.33%-1rem)] flex flex-col">
                <CardContent className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold mb-2">Census data per precinct</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex-grow">Geographic join in Python to figure out average income per precinct in some Philadelphia neighborhoods.</p>
                  <a className="text-sm text-blue-500 hover:underline mt-auto inline-block" href="#">
                    View Project
                  </a>
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="contact" className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
              </p>
              <div className="flex justify-center space-x-4">
                <a href="https://github.com/djechlin" target="_blank" rel="noopener noreferrer">
                  <Button size="icon" variant="outline">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/daniel-echlin-9abb04248/" target="_blank" rel="noopener noreferrer">
                  <Button size="icon" variant="outline">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </a>
                <a href="mailto:dan773355@danielechlin.xyz">
                  <Button size="icon" variant="outline">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="w-full border-t">
        <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">© 2024 Daniel Echlin. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
            <a className="text-sm text-gray-500 hover:underline underline-offset-4" href="#">
              Terms of Service
            </a>
            <a className="text-sm text-gray-500 hover:underline underline-offset-4" href="#">
              Privacy
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}