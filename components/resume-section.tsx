'use client'

import { BookOpen, Briefcase, MapPin } from 'lucide-react'
import { resumeData } from '@/lib/portfolio-data'
import { useEffect, useRef, useState } from 'react'

interface ResumeSectionProps {
  data?: typeof resumeData
}

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref}>
      <div className="flex justify-between mb-2">
        <span className="text-xs md:text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs md:text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-accent to-accent/70 rounded-full transition-all ease-out"
          style={{
            width: visible ? `${level}%` : '0%',
            transitionDuration: '1.2s',
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  )
}

export function ResumeSection({ data = resumeData }: ResumeSectionProps) {
  return (
    <div className="space-y-8 md:space-y-10">
      <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Resume</h2>
        <div className="w-10 h-1 bg-accent rounded-full mb-6" />
      </div>

      {/* Education */}
      <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <div className="flex items-center gap-2 md:gap-3 mb-6">
          <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-accent" />
          <h3 className="text-xl md:text-2xl font-bold text-foreground">Education</h3>
        </div>
        <div className="space-y-4">
          {data.education.map((item, index) => (
            <div key={index} className="relative pl-5 md:pl-6 pb-6 border-l-2 border-border last:pb-0">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent shadow-lg shadow-accent/30" />
              <h4 className="text-base md:text-lg font-semibold text-foreground mb-1">{item.title}</h4>
              {item.institution && (
                <p className="text-xs md:text-sm text-accent/80 mb-1">{item.institution}</p>
              )}
              <p className="text-xs md:text-sm text-accent mb-2">{item.period}</p>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        <div className="flex items-center gap-2 md:gap-3 mb-6">
          <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-accent" />
          <h3 className="text-xl md:text-2xl font-bold text-foreground">Experience</h3>
        </div>
        <div className="space-y-4">
          {data.experience.map((item, index) => (
            <div key={index} className="relative pl-5 md:pl-6 pb-6 border-l-2 border-border last:pb-0">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent shadow-lg shadow-accent/30" />
              <h4 className="text-base md:text-lg font-semibold text-foreground mb-1">{item.title}</h4>
              {item.company && (
                <p className="text-xs md:text-sm text-accent/80 mb-1">{item.company}</p>
              )}
              <div className="flex items-center gap-3 mb-2">
                <p className="text-xs md:text-sm text-accent">{item.period}</p>
                {item.location && (
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="w-3 h-3" />
                    {item.location}
                  </span>
                )}
              </div>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">My Skills</h3>
        <div className="space-y-5 md:space-y-6">
          {data.skills.map((skill, index) => (
            <SkillBar key={index} name={skill.name} level={skill.level} delay={index * 150} />
          ))}
        </div>
      </div>
    </div>
  )
}
