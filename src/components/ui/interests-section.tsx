import { InterestItem } from "./interest-item"

const interests = [
  {
    title: "How voters get information",
    description: "Private platforms dominate our civic discourse with algorithms that routinely amplify misinformation and propaganda. They optimize for engagement while failing to understand how influencers actually shape public opinion."
  },
  {
    title: "How \"elites\" get information on voters",
    description: "Polling is failing our democracy in today's polarized environment. Even statistical accuracy within margin of error leaves defeated parties blindsided about voter sentiment."
  },
  {
    title: "The fragility of electoral systems",
    description: "Our voting systems face mounting technical and social threats, requiring new approaches to guarantee election integrity."
  },
  {
    title: "Digital security for democratic actors",
    description: "Current security solutions fail to address the unique threats faced by grassroots movements and organizers."
  },
  {
    title: "Keeping organizers' technology up-to-date",
    description: "Movement technology often lags years behind, hampering organizing effectiveness and scale."
  },
  {
    title: "The cross-cutting impact of AI",
    description: "AI is reshaping how information spreads and opinions form, creating urgent challenges for democratic discourse."
  }
]

export function InterestsSection() {
    return (
      <section id="interests" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-primary">Interests</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
            I'm interested in collaborating to improve our liberal democratic institutions and culture. I'm particularly concerned about the following topics:
          </p>
          <div className="space-y-2 divide-y divide-border">
            {interests.map((interest, index) => (
              <InterestItem key={index} title={interest.title} description={interest.description} />
            ))}
          </div>
        </div>
      </section>
    )
  }

