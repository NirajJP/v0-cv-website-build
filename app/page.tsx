'use client'

import { useState } from 'react'
import { ProfileSidebar } from '@/components/profile-sidebar'
import { AboutSection } from '@/components/about-section'
import { ResumeSection } from '@/components/resume-section'
import { ContactSection } from '@/components/contact-section-new'
import { ThemeToggle } from '@/components/theme-toggle'
import { ParticleBackground } from '@/components/particle-background'
import {
  profileData,
  aboutData,
  resumeData,
  contactData,
} from '@/lib/portfolio-data'

const sections = ['about', 'resume', 'contact'] as const

export default function Home() {
  const [activeSection, setActiveSection] = useState<(typeof sections)[number]>('about')

  return (
    <div className="min-h-screen bg-background p-3 sm:p-4 md:p-6 lg:p-12">
      <ParticleBackground />

      <div className="fixed top-4 right-4 md:top-6 md:right-6 z-50">
        <ThemeToggle />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 md:gap-6">
          <ProfileSidebar data={profileData} />

          {/* Main Content */}
          <main className="flex-1 bg-card rounded-xl md:rounded-2xl border border-border overflow-hidden">
            {/* Navigation */}
            <nav className="flex gap-1 sm:gap-2 md:gap-4 p-3 sm:p-4 md:p-6 border-b border-border overflow-x-auto scrollbar-hide">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium capitalize transition-all whitespace-nowrap flex-shrink-0 ${
                    activeSection === section
                      ? 'text-accent-foreground bg-accent shadow-lg shadow-accent/20'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                  }`}
                >
                  {section}
                </button>
              ))}
            </nav>

            <div className="p-4 sm:p-5 md:p-6 lg:p-8">
              {activeSection === 'about' && <AboutSection data={aboutData} />}
              {activeSection === 'resume' && <ResumeSection data={resumeData} />}
              {activeSection === 'contact' && <ContactSection data={contactData} />}
            </div>
          </main>
        </div>

        {/* Footer */}
        <footer className="mt-6 md:mt-8 text-center pb-4">
          <p className="text-xs text-muted-foreground">
            {'Niraj Pagadyal \u00B7 Brisbane, Australia'}
          </p>
        </footer>
      </div>
    </div>
  )
}
