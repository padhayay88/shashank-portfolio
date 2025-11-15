import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const fullText = "Hi, I'm Shashank"

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="hero" className="pt-24 min-h-screen flex items-center">
      <div className="grid md:grid-cols-2 gap-8 items-center w-full">
        <motion.div
          initial={{opacity:0, x:-50}}
          animate={{opacity:1, x:0}}
          transition={{duration:0.8}}
          className="fade-in-up"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="typing-effect">{displayText}</span>
            {displayText === fullText && <span className="accent animate-pulse">✨</span>}
          </h2>
          <p className="mt-4 text-[rgba(255,255,255,0.8)] max-w-xl text-lg leading-relaxed">
            B.Tech Computer Science student at Pandit Deendayal Energy University. I build full-stack applications, backend APIs, and AI-integrated tools focused on practical automation and scalable systems.
          </p>

          <motion.div
            className="mt-6 flex gap-4 flex-wrap"
            initial={{opacity:0, y:20}}
            animate={{opacity:1, y:0}}
            transition={{duration:0.8, delay:0.3}}
          >
            <a href="#projects" className="btn-neon hover-lift">View projects</a>
            <a href="/shashank-resume.pdf" download className="p-2 px-4 rounded-md border border-[rgba(255,255,255,0.06)] glass hover-lift transition-all duration-300">Download Resume</a>
          </motion.div>

          <motion.ul
            className="mt-6 text-sm text-[rgba(255,255,255,0.6)] space-y-1"
            initial={{opacity:0, y:20}}
            animate={{opacity:1, y:0}}
            transition={{duration:0.8, delay:0.5}}
          >
            <li><strong>Location:</strong> Ahmedabad, Gujarat / Butwal, Nepal</li>
            <li><strong>Email:</strong> <a href="mailto:shashankupadhayay44@gmail.com" className="accent hover:underline transition-all duration-200">shashankupadhayay44@gmail.com</a></li>
            <li><strong>Phone:</strong> +91 7007737388</li>
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{scale:0.8, opacity:0, x:50}}
          animate={{scale:1, opacity:1, x:0}}
          transition={{duration:0.9, delay:0.2}}
          className="glass p-6 hover-lift"
        >
          <h3 className="text-xl font-medium accent">📊 Snapshot</h3>
          <p className="mt-2 text-[rgba(255,255,255,0.8)]"><strong>Degree:</strong> B.Tech in Computer Science (2023–2027) — CGPA 7.85</p>
          <p className="mt-1 text-[rgba(255,255,255,0.7)]"><strong>Relevant:</strong> Data Structures, OOP, DBMS, Algorithms</p>
          <div className="mt-3 flex items-center gap-2">
            <span className="text-2xl">🚀</span>
            <a href="https://github.com/padhayay88" target="_blank" rel="noreferrer" className="text-sm underline hover:accent transition-colors duration-200">GitHub: padhayay88</a>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-[rgba(0,240,234,0.1)] text-accent text-xs rounded-full">Full-Stack</span>
            <span className="px-2 py-1 bg-[rgba(0,240,234,0.1)] text-accent text-xs rounded-full">AI/ML</span>
            <span className="px-2 py-1 bg-[rgba(0,240,234,0.1)] text-accent text-xs rounded-full">Automation</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
