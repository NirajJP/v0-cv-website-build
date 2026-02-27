'use client'

import { ParticleCanvas } from './particle-canvas'
import { Mail, MapPin, ArrowDown, Linkedin, Github } from 'lucide-react'
import { useEffect, useState } from 'react'

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleCanvas />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Avatar */}
        <div
          className={`relative mb-8 transition-all duration-1000 ${
            mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-accent/30 glow-accent">
            <img
              src="/niraj-avatar.jpg"
              alt="Niraj Pagadyal"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name + Title */}
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 transition-all duration-1000 delay-200 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="text-foreground">Niraj</span>{' '}
          <span className="gradient-text">Pagadyal</span>
        </h1>

        <p
          className={`text-lg sm:text-xl md:text-2xl text-muted-foreground font-light mb-6 transition-all duration-1000 delay-300 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          IT Professional &amp; Cybersecurity Enthusiast
        </p>

        {/* Location + Email */}
        <div
          className={`flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-muted-foreground mb-8 transition-all duration-1000 delay-500 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-accent" />
            Brisbane, Australia
          </span>
          <span className="flex items-center gap-1.5">
            <Mail className="w-4 h-4 text-accent" />
            <a href="mailto:pagadyalniraj@gmail.com" className="hover:text-accent transition-colors">
              pagadyalniraj@gmail.com
            </a>
          </span>
        </div>

        {/* Social Links */}
        <div
          className={`flex items-center gap-3 mb-12 transition-all duration-1000 delay-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <a
            href="#"
            className="w-10 h-10 rounded-lg bg-secondary/80 border border-border hover:border-accent hover:bg-accent/10 flex items-center justify-center text-muted-foreground hover:text-accent transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-lg bg-secondary/80 border border-border hover:border-accent hover:bg-accent/10 flex items-center justify-center text-muted-foreground hover:text-accent transition-all"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className={`flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-all animate-bounce ${
            mounted ? 'opacity-100' : 'opacity-0'
          }`}
          aria-label="Scroll to about section"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  )
}
