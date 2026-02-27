import { Shield, Network, Database, Terminal } from 'lucide-react'
import { ScrollSection } from './scroll-section'

const services = [
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Vulnerability scanning, security best practices, and data protection using Kali Linux and modern security tools.',
  },
  {
    icon: Network,
    title: 'Networking',
    description: 'TCP/IP, routing, network configuration, and troubleshooting from academic coursework and hands-on practice.',
  },
  {
    icon: Database,
    title: 'Database Management',
    description: 'SQL fundamentals, relational database design, and efficient data querying for enterprise systems.',
  },
  {
    icon: Terminal,
    title: 'Python Scripting',
    description: 'Basic scripting and automation tasks using Python for process optimization and tooling.',
  },
]

export function AboutSection() {
  return (
    <ScrollSection id="about" className="py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <p className="text-xs font-mono text-accent uppercase tracking-widest mb-3">About Me</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2 text-balance">
            Who I Am
          </h2>
          <div className="w-12 h-0.5 bg-accent rounded-full mt-4 mb-8" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          <div className="lg:col-span-3 space-y-5">
            <p className="text-base text-muted-foreground leading-relaxed">
              Detail-oriented IT professional with experience in US dental insurance verification and patient
              billing support. Skilled in checking coverage, verifying benefits, and maintaining accurate documentation
              in high-pressure environments.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Currently pursuing a Masters in Information Technology with a focus on cybersecurity, networking, and
              database management. Proven ability to enhance operational efficiency and reduce downtime through
              effective troubleshooting. Strong communicator with a commitment to data privacy.
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="space-y-4 text-sm">
              <div className="flex items-center justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Location</span>
                <span className="text-foreground font-medium">Brisbane, Australia</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Date of Birth</span>
                <span className="text-foreground font-medium">7th March 2000</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Phone</span>
                <a href="tel:+61481522340" className="text-foreground font-medium hover:text-accent transition-colors">+61 481 522 340</a>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Email</span>
                <a href="mailto:pagadyalniraj@gmail.com" className="text-foreground font-medium hover:text-accent transition-colors">pagadyalniraj@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-16">
          <p className="text-xs font-mono text-accent uppercase tracking-widest mb-8">What I Do</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="group flex gap-4 p-5 sm:p-6 bg-card rounded-xl border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-foreground mb-1.5">{service.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollSection>
  )
}
