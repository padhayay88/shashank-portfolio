import { motion } from 'framer-motion'

export default function About() {
  const highlights = [
    {
      icon: "🎯",
      title: "Problem Solver",
      description: "Love tackling complex challenges with elegant, efficient solutions"
    },
    {
      icon: "🚀",
      title: "Full-Stack Developer",
      description: "Building end-to-end applications from concept to deployment"
    },
    {
      icon: "🤖",
      title: "AI Enthusiast",
      description: "Integrating AI/ML capabilities into practical applications"
    },
    {
      icon: "🌟",
      title: "Continuous Learner",
      description: "Always exploring new technologies and best practices"
    }
  ]

  return (
    <section id="about" className="pt-12">
      <motion.h2
        className="text-3xl font-semibold text-center"
        initial={{opacity:0, y:20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.6}}
        viewport={{once: true}}
      >
        About Me
      </motion.h2>

      <div className="mt-8 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{opacity:0, x:-30}}
          whileInView={{opacity:1, x:0}}
          transition={{duration:0.6, delay:0.2}}
          viewport={{once: true}}
        >
          <p className="text-[rgba(255,255,255,0.8)] text-lg leading-relaxed mb-6">
            I enjoy building practical, real-world tools — from backend APIs to web frontends and AI automation. I&apos;m focused on backend design, API development, and maintainable systems that solve real problems.
          </p>

          <p className="text-[rgba(255,255,255,0.7)] leading-relaxed mb-6">
            Currently pursuing my B.Tech in Computer Science at Pandit Deendayal Energy University, I&apos;m passionate about creating scalable solutions and exploring the intersection of technology and real-world applications.
          </p>

          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-[rgba(0,240,234,0.1)] text-accent text-sm rounded-full">Backend Development</span>
            <span className="px-3 py-1 bg-[rgba(0,240,234,0.1)] text-accent text-sm rounded-full">AI Integration</span>
            <span className="px-3 py-1 bg-[rgba(0,240,234,0.1)] text-accent text-sm rounded-full">API Design</span>
            <span className="px-3 py-1 bg-[rgba(0,240,234,0.1)] text-accent text-sm rounded-full">Cloud Deployment</span>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          initial={{opacity:0, x:30}}
          whileInView={{opacity:1, x:0}}
          transition={{duration:0.6, delay:0.4}}
          viewport={{once: true}}
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              className="glass p-4 hover-lift text-center"
              initial={{opacity:0, y:20}}
              whileInView={{opacity:1, y:0}}
              transition={{duration:0.5, delay: 0.6 + (index * 0.1)}}
              viewport={{once: true}}
              whileHover={{scale: 1.05}}
            >
              <div className="text-3xl mb-2">{highlight.icon}</div>
              <h3 className="font-medium accent mb-2">{highlight.title}</h3>
              <p className="text-sm text-[rgba(255,255,255,0.7)]">{highlight.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
