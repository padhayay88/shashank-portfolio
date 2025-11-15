import { motion } from 'framer-motion'

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: "💻",
      skills: ["Python", "Java", "JavaScript", "HTML/CSS", "SQL", "C"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Frameworks",
      icon: "⚡",
      skills: ["FastAPI", "Flask", "React", "Node.js", "Next.js"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "AI/ML Tools",
      icon: "🤖",
      skills: ["Whisper", "ElevenLabs", "Azure Cognitive Services", "OpenAI API", "TensorFlow"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: ["MongoDB", "PostgreSQL", "SQLite", "Redis"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "DevOps & Tools",
      icon: "🔧",
      skills: ["Docker", "Git", "REST APIs", "Postman", "FFmpeg", "Linux"],
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Other",
      icon: "🚀",
      skills: ["Chrome Extensions", "Web Automation", "API Design", "Cloud Deployment"],
      color: "from-teal-500 to-green-500"
    }
  ]

  return (
    <section id="skills" className="pt-12">
      <motion.h2
        className="text-3xl font-semibold text-center"
        initial={{opacity:0, y:20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.6}}
        viewport={{once: true}}
      >
        Technical Skills
      </motion.h2>

      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            className="glass p-6 hover-lift"
            initial={{opacity:0, y:30}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.6, delay: categoryIndex * 0.1}}
            viewport={{once: true}}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{category.icon}</span>
              <h3 className="text-lg font-medium accent">{category.title}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  className={`px-3 py-1 rounded-full text-sm bg-gradient-to-r ${category.color} text-white font-medium cursor-default`}
                  initial={{opacity:0, scale:0.8}}
                  whileInView={{opacity:1, scale:1}}
                  transition={{duration:0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.05)}}
                  viewport={{once: true}}
                  whileHover={{scale: 1.05}}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-12 text-center"
        initial={{opacity:0, y:20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.6, delay: 0.8}}
        viewport={{once: true}}
      >
        <p className="text-[rgba(255,255,255,0.7)] max-w-2xl mx-auto">
          Always learning and exploring new technologies. Currently diving deeper into AI/ML, cloud architecture, and modern web development practices.
        </p>
      </motion.div>
    </section>
  )
}
