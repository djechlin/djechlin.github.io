import { InterestItem } from "./interest-item"

const interests = [
  {
    title: "Information, misinformation and filter bubbles",
    description: "Private platforms have outsized influence on civic discourse. Do voters care enough?"
  },
  {
    title: "Polls, betting markets and public opinion research",
    description: "How do we keep polls relevant in an era of high polarization and razor-thin election margins?"
  },
  {
    title: "Securely counting the votes",
    description: "How do we securely count the votes, and convince everyone we did, even when Democrats win?"
  },
  {
    title: "Digital security for poll workers and activists",
    description: "Because it's getting scary out there."
  },
  {
    title: "Organizing technology",
    description: "Why was Philadelphia oversaturated and Harrisburg a ghost town election weekend?"
  },
  {
    title: "The cross-cutting impact of AI",
    description: "Maybe voters can just get their news from a personalized AI bot and all will be right in the world."
  }
]

export function InterestsSection() {
    return (
      <section id="interests" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-primary">Interests</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
            I'm interested in collaborating to improve our liberal democratic institutions and culture. I'm particularly concerned about the following topics:
          </p>
          <div className="space-y-2 divide-y divide-border">
            {interests.map((interest, index) => (
              <InterestItem key={index} title={interest.title} description={interest.description} />
            ))}
          </div>
      </section>
    )
  }

