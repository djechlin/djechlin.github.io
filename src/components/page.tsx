import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function BlockPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <span className="sr-only">Jane Doe&apos;s Portfolio</span>
          <span className="font-bold text-xl">JD</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#projects">
            Projects
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Jane Doe
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Full-Stack Developer | React Enthusiast | Open Source Contributor
                </p>
              </div>
              <div className="space-x-4">
                <Link href="#contact">
                  <Button>Contact Me</Button>
                </Link>
                <Link href="#projects">
                  <Button variant="outline">View Projects</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            <p className="mt-4 text-gray-500 md:text-xl dark:text-gray-400">
              I&apos;m a passionate full-stack developer with 5 years of experience in building web applications. I specialize in
              React, Node.js, and cloud technologies. When I&apos;m not coding, you can find me contributing to open source projects
              or writing technical blog posts.
            </p>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">My Projects</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold">Project 1</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">A brief description of Project 1</p>
                  <Link className="text-sm text-blue-500 hover:underline mt-2 inline-block" href="#">
                    View Project
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold">Project 2</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">A brief description of Project 2</p>
                  <Link className="text-sm text-blue-500 hover:underline mt-2 inline-block" href="#">
                    View Project
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold">Project 3</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">A brief description of Project 3</p>
                  <Link className="text-sm text-blue-500 hover:underline mt-2 inline-block" href="#">
                    View Project
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Get in Touch</h2>
            <div className="flex flex-col items-center space-y-4 text-center">
              <p className="text-gray-500 dark:text-gray-400">
                I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
              </p>
              <div className="flex space-x-4">
                <Link href="https://github.com">
                  <Button size="icon" variant="outline">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://linkedin.com">
                  <Button size="icon" variant="outline">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="mailto:jane@example.com">
                  <Button size="icon" variant="outline">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 Jane Doe. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}