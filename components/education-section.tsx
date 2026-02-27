import { GraduationCap, BookOpen } from 'lucide-react'
import { ScrollSection } from './scroll-section'

const education = [
  {
    title: 'Masters of Information Technology',
    institution: 'Asia Pacific International College',
    period: 'Feb 2024 - Nov 2025',
    highlights: [
      'Relevant Coursework: Networking, Cyber Security, Database Management',
      'Hands-on practice with Python, Kali Linux and security tools',
      'Completed academic project on data security',
    ],
  },
]

export function EducationSection() {
  return (
    <ScrollSection id="education" className="py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <p className="text-xs font-mono text-accent uppercase tracking-widest mb-3">Learning</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2 text-balance">
            Education
          </h2>
          <div className="w-12 h-0.5 bg-accent rounded-full mt-4 mb-8" />
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border p-6 sm:p-8 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground">{edu.title}</h3>
                    <span className="text-xs font-mono text-muted-foreground bg-secondary px-3 py-1 rounded-md w-fit">
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-sm text-accent font-medium mb-4">{edu.institution}</p>

                  <ul className="space-y-2">
                    {edu.highlights.map((item, i) => (
                      <li key={i} className="flex gap-2.5 text-sm text-muted-foreground leading-relaxed">
                        <BookOpen className="w-4 h-4 text-accent/60 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollSection>
  )
}
