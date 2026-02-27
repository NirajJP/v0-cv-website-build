'use client'

import { useEffect, useRef, useState } from 'react'
import { ScrollSection } from './scroll-section'

const skillCategories = [
  {
    title: 'Programming',
    skills: [
      { name: 'Python', level: 60 },
      { name: 'SQL', level: 55 },
    ],
  },
  {
    title: 'Networking',
    skills: [
      { name: 'TCP/IP', level: 65 },
      { name: 'Routing & Config', level: 55 },
      { name: 'Network Concepts', level: 70 },
    ],
  },
  {
    title: 'Cybersecurity',
    skills: [
      { name: 'Kali Linux', level: 60 },
      { name: 'Vulnerability Scanning', level: 55 },
      { name: 'Security Best Practices', level: 65 },
    ],
  },
  {
    title: 'Tools & Software',
    skills: [
      { name: 'MS Office', level: 85 },
      { name: 'CRM / Billing Software', level: 75 },
      { name: 'Database Design', level: 55 },
    ],
  },
]

function SkillBar({ name, level }: { name: string; level: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref}>
      <div className="flex justify-between mb-1.5">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs font-mono text-muted-foreground">{level}%</span>
      </div>
      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-accent rounded-full transition-all duration-1000 ease-out"
          style={{ width: visible ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  )
}

export function SkillsSection() {
  return (
    <ScrollSection id="skills" className="py-20 sm:py-28 bg-card/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <p className="text-xs font-mono text-accent uppercase tracking-widest mb-3">Expertise</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2 text-balance">
            Technical Skills
          </h2>
          <div className="w-12 h-0.5 bg-accent rounded-full mt-4 mb-8" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-5 flex items-center gap-2">
                <span className="w-6 h-px bg-accent" />
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <SkillBar key={i} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollSection>
  )
}
