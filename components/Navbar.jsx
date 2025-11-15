import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useTheme } from './ThemeProvider'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`w-full fixed top-4 left-0 z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-[rgba(7,16,26,0.8)] shadow-lg' : ''}`}>
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="p-2 rounded-md glass">
            <h1 className="text-lg font-semibold accent">Shashank Upadhayay</h1>
          </div>
          <p className="text-sm text-[rgba(255,255,255,0.6)]">B.Tech · Web & AI</p>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="#about" className="text-sm text-[rgba(255,255,255,0.75)] hover:accent transition-colors duration-200">About</Link>
          <Link href="#projects" className="text-sm text-[rgba(255,255,255,0.75)] hover:accent transition-colors duration-200">Projects</Link>
          <Link href="#skills" className="text-sm text-[rgba(255,255,255,0.75)] hover:accent transition-colors duration-200">Skills</Link>
          <Link href="#contact" className="btn-neon">Contact</Link>
          <a href="/shashank-resume.pdf" download className="ml-2 text-sm text-[rgba(255,255,255,0.85)] border border-[rgba(0,240,234,0.08)] px-3 py-1 rounded-md hover:bg-[rgba(0,240,234,0.1)] transition-colors duration-200">Resume</a>
          <button onClick={toggleTheme} className="ml-2 p-2 glass rounded-md hover:bg-[rgba(255,255,255,0.1)] transition-colors duration-200">
            {theme === 'dark' ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
        </nav>

        {/* mobile toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button onClick={toggleTheme} className="p-2 glass rounded-md">
            {theme === 'dark' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
          <button onClick={() => setOpen(!open)} className="p-2 glass rounded-md">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h16" stroke="white" strokeWidth="1.6" strokeLinecap="round"/></svg>
          </button>
          {open && (
            <div className="absolute right-6 top-16 bg-[#07101a] p-4 rounded-md glass shadow-lg">
              <Link href="#about" className="block py-2 hover:text-accent transition-colors duration-200">About</Link>
              <Link href="#projects" className="block py-2 hover:text-accent transition-colors duration-200">Projects</Link>
              <Link href="#skills" className="block py-2 hover:text-accent transition-colors duration-200">Skills</Link>
              <Link href="#contact" className="block py-2 hover:text-accent transition-colors duration-200">Contact</Link>
              <a href="/shashank-resume.pdf" download className="block py-2 text-sm hover:text-accent transition-colors duration-200">Resume</a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
