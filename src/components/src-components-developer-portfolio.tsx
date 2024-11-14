import React from 'react'
import { Github, Linkedin, Mail } from "lucide-react"

import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"

export function DeveloperPortfolioComponent() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <span className="sr-only">Jane Doe&apos;s Portfolio</span>
          <span className="font-bold text-xl">JD</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
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
                <a href="#contact">
                  <Button>Contact Me</Button>
                </a>
                <a href="#projects">
                  <Button variant="outline">View Projects</Button>
                </a>
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
                  <a className="text-sm text-blue-500 hover:underline mt-2 inline-block" href="#">
                    View Project
                  </a>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold">Project 2</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">A brief description of Project 2</p>
                  <a className="text-sm text-blue-500 hover:underline mt-2 inline-block" href="#">
                    View Project
                  </a>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold">Project 3</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">A brief description of Project 3</p>
                  <a className="text-sm text-blue-500 hover:underline mt-2 inline-block" href="#">
                    View Project
                  </a>
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
                <a href="https://github.com">
                  <Button size="icon" variant="outline">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </a>
                <a href="https://linkedin.com">
                  <Button size="icon" variant="outline">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </a>
                <a href="mailto:jane@example.com">
                  <Button size="icon" variant="outline">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 Jane Doe. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}