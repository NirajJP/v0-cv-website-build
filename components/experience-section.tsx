import { Briefcase } from 'lucide-react'
import { ScrollSection } from './scroll-section'

const experiences = [
  {
    title: 'Console Operator',
    company: '7-Eleven',
    location: 'Brisbane, QLD',
    period: 'Mar 2024 - Present',
    bullets: [
      'Operated console systems to monitor production processes efficiently.',
      'Assisted in troubleshooting equipment issues to minimize downtime.',
      'Maintained accurate logs of operational activities and system performance.',
      'Collaborated with team members to ensure adherence to safety protocols.',
    ],
  },
  {
    title: 'Trainee Billing Executive',
    company: 'Asstron E Services',
    location: 'Ahmedabad, India',
    period: 'Nov 2022 - Jun 2023',
    bullets: [
      'Called US dental insurance companies to verify patient coverage and benefits.',
      'Checked remaining balance, deductibles, and co-pay for dental treatments.',
      'Updated patient insurance details and records in the system.',
      'Coordinated with dental clinics to confirm patient appointments.',
      'Helped reduce claim rejections by verifying correct insurance information.',
      'Followed data privacy rules while handling patient information.',
    ],
  },
]

export function ExperienceSection() {
  return (
    <ScrollSection id="experience" className="py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <p className="text-xs font-mono text-accent uppercase tracking-widest mb-3">Career</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2 text-balance">
            Professional Experience
          </h2>
          <div className="w-12 h-0.5 bg-accent rounded-full mt-4 mb-8" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-5 top-2 bottom-2 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-12 sm:pl-14">
                {/* Timeline dot */}
                <div className="absolute left-2.5 sm:left-3 top-1.5 w-3.5 h-3.5 rounded-full bg-accent border-2 border-background" />

                <div className="bg-card rounded-xl border border-border p-5 sm:p-6 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-sm">
                        <Briefcase className="w-3.5 h-3.5 text-accent" />
                        <span className="text-accent font-medium">{exp.company}</span>
                        <span className="text-muted-foreground">{'/'} {exp.location}</span>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground bg-secondary px-3 py-1 rounded-md w-fit mt-1 sm:mt-0">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mt-4">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-2.5 text-sm text-muted-foreground leading-relaxed">
                        <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollSection>
  )
}
