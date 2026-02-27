import { Linkedin, Github } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          {new Date().getFullYear()} Niraj Pagadyal. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          <a
            href="#"
            className="w-8 h-8 rounded-md bg-secondary border border-border hover:border-accent hover:text-accent flex items-center justify-center text-muted-foreground transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-3.5 h-3.5" />
          </a>
          <a
            href="#"
            className="w-8 h-8 rounded-md bg-secondary border border-border hover:border-accent hover:text-accent flex items-center justify-center text-muted-foreground transition-all"
            aria-label="GitHub"
          >
            <Github className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
