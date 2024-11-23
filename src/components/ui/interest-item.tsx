import { ArrowRight } from 'lucide-react';

interface InterestItemProps {
    title: string
    description: string
  }
  
  export function InterestItem({ title, description }: InterestItemProps) {
    return (
      <div className="group flex items-start space-x-4 py-4 transition-colors hover:bg-secondary/10">
        <span className="mt-1 flex-shrink-0 text-muted-foreground group-hover:text-primary"><ArrowRight/></span>
        <div>
          <h3 className="font-semibold text-primary">{title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    )
  }