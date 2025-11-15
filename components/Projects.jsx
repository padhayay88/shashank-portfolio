import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const projects = [
    {
      title: "Collink — College Predictor API",
      tech: "FastAPI · Python · Docker",
      description: "Backend API for college prediction using JEE / NEET / IELTS ranks. Built smart fuzzy-search rank-prediction logic, modular FastAPI endpoints and containerized deployment.",
      repo: "https://github.com/padhayay88/collink1.git",
      icon: "🎓"
    },
    {
      title: "Motion Detector Sensor",
      tech: "C · Arduino",
      description: "Motion detection system using Arduino and C for real-time motion tracking and automation.",
      icon: "🔧"
    },
    {
      title: "Amazon Clone (Front-end)",
      tech: "HTML · CSS · JavaScript",
      description: "Functional front-end replica of Amazon with responsive UI components for a better UX.",
      icon: "🛒"
    },
    {
      title: "Catch Patient Engagement (CPA)",
      tech: "FastAPI · Node.js · SQLite · AI",
      description: "Multilingual oncology engagement platform with AI insights, health tracking and multilingual chat for patient engagement.",
      icon: "🏥"
    }
  ]

  return (
    <section id="projects" className="pt-12">
      <motion.h2
        className="text-3xl font-semibold text-center"
        initial={{opacity:0, y:20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.6}}
        viewport={{once: true}}
      >
        Featured Projects
      </motion.h2>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {projects.map((p, idx) => (
          <motion.div
            key={idx}
            className="project-card glass p-6 cursor-pointer group"
            initial={{opacity:0, y:30}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.6, delay: idx * 0.1}}
            viewport={{once: true}}
            onHoverStart={() => setHoveredIndex(idx)}
            onHoverEnd={() => setHoveredIndex(null)}
            whileHover={{scale: 1.02}}
          >
            <div className="flex items-start justify-between mb-3">
              <span className="text-2xl">{p.icon}</span>
              <motion.div
                animate={{rotate: hoveredIndex === idx ? 45 : 0}}
                transition={{duration: 0.2}}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-accent">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
            </div>

            <h3 className="text-xl font-medium accent group-hover:text-white transition-colors duration-300">{p.title}</h3>
            <p className="text-sm text-[rgba(255,255,255,0.7)] mt-1">{p.tech}</p>
            <p className="mt-3 text-[rgba(255,255,255,0.8)] leading-relaxed">{p.description}</p>

            {p.repo && (
              <motion.a
                href={p.repo}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm underline hover:accent transition-colors duration-200"
                whileHover={{x: 5}}
                transition={{duration: 0.2}}
              >
                View repo
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
