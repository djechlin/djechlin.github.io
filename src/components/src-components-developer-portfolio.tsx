import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"

export function DeveloperPortfolioComponent() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="w-full border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <a className="flex items-center justify-center" href="#">
            <span className="sr-only">Jane Doe&apos;s Portfolio</span>
            <span className="font-bold text-xl">JD</span>
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
                Jane Doe
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Full-Stack Developer | React Enthusiast | Open Source Contributor
              </p>
              <div className="flex justify-center gap-4">
                <a href="#contact">
                  <Button>Contact Me</Button>
                </a>
                <a href="#projects">
                  <Button variant="outline">View Projects</Button>
                </a>
              </div>
            </div>
          </section>
          
          <section id="about" className="mb-16">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-gray-600 dark:text-gray-400">
              I&apos;m a passionate full-stack developer with 5 years of experience in building web applications. I specialize in
              React, Node.js, and cloud technologies. When I&apos;m not coding, you can find me contributing to open source projects
              or writing technical blog posts.
            </p>
          </section>
          
          <section id="projects" className="mb-16">
            <h2 className="text-3xl font-bold mb-8">My Projects</h2>
            <div className="flex flex-wrap justify-center gap-6">
              <Card className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.33%-1rem)] flex flex-col">
                <CardContent className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold mb-2">Project 1</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex-grow">A brief description of Project 1. This project showcases my skills in React and Node.js, featuring a responsive design and real-time data updates.</p>
                  <a className="text-sm text-blue-500 hover:underline mt-auto inline-block" href="#">
                    View Project
                  </a>
                </CardContent>
              </Card>
              <Card className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.33%-1rem)] flex flex-col">
                <CardContent className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold mb-2">Project 2</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex-grow">Project 2 is a full-stack application that demonstrates my expertise in database design and API development using Express and MongoDB.</p>
                  <a className="text-sm text-blue-500 hover:underline mt-auto inline-block" href="#">
                    View Project
                  </a>
                </CardContent>
              </Card>
              <Card className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.33%-1rem)] flex flex-col">
                <CardContent className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold mb-2">Project 3</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex-grow">In Project 3, I built a serverless application using AWS Lambda and DynamoDB, showcasing my cloud computing skills and ability to create scalable solutions.</p>
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
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Button size="icon" variant="outline">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
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
          </section>
        </div>
      </main>
      <footer className="w-full border-t">
        <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">© 2023 Jane Doe. All rights reserved.</p>
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