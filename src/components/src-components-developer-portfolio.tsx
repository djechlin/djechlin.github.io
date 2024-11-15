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
  <div className="space-y-4 text-gray-600 dark:text-gray-400">
    <p>
    As a seasoned software engineer with experience at industry leaders like Google, MongoDB, and Unroll.me, I specialize in architecting and implementing high-scale distributed systems that drive business success. My technical expertise spans both backend and frontend development, with deep proficiency in C++, Java, Python, Go, and TypeScript.
    </p>
    <p>
    What sets me apart is my commitment to engineering excellence coupled with strong leadership capabilities. I thrive in fostering collaborative environments where I can mentor fellow engineers, establish engineering best practices, and optimize team processes. My approach centers on building robust, scalable solutions while ensuring the team grows together and maintains high standards of code quality.    </p>
    <p>
    Beyond traditional engineering, I bring unique experience in civic technology and grassroots organizing. As a relational canvassing coach and analyst, I've helped pioneer deep canvassing methodologies that proved instrumental in successful 2022 campaigns in Pennsylvania. This combination of technical expertise and civic engagement allows me to bridge the gap between technology and democratic participation, creating high-impact solutions that strengthen communities.
    </p>
  </div>
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
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex-grow">Airtable scripting contributions to matching algorithm in 11th-hour voting project (code not public).</p>
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
              <Card className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.33%-1rem)] flex flex-col">
                <CardContent className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold mb-2">danielechlin.xyz</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex-grow">Astro, shadcn, and AI tools like v0.dev, Claude and Copilot.</p>
                  <a className="text-sm text-blue-500 hover:underline mt-auto inline-block" href="#">
                    View Project
                  </a>
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="interests" className="mb-16">
            <h2 className="text-3xl font-bold mb-4">Interests</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I'm interested in collaborating to improve our liberal democratic institutions and culture. I'm particularly concerned about topics including:
              </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 pl-4">
<li><span className="font-semibold">How voters get information:</span> Private platforms dominate our civic discourse with algorithms that routinely amplify misinformation and propaganda. They optimize for engagement while failing to understand how influencers actually shape public opinion.</li>
<li><span className="font-semibold">How "elites" get information on voters:</span> Polling is failing our democracy in today's polarized environment. Even statistical accuracy within margin of error leaves defeated parties blindsided about voter sentiment.</li>
<li><span className="font-semibold">The fragility of electoral systems and ways to make voting infrastructure more resilient:</span> Our voting systems face mounting technical and social threats, requiring new approaches to guarantee election integrity.</li>
<li><span className="font-semibold">Digital security for democratic actors, organizers and activists:</span> Current security solutions fail to address the unique threats faced by grassroots movements and organizers.</li>
<li><span className="font-semibold">The need to keep organizers' technology up-to-date:</span> Movement technology often lags years behind, hampering organizing effectiveness and scale.</li>
<li><span className="font-semibold">The cross-cutting impact of AI on these topics:</span> AI is reshaping how information spreads and opinions form, creating urgent challenges for democratic discourse.</li>
            </ul>
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