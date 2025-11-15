import { motion } from 'framer-motion'

export default function Experience() {
  const experiences = [
    {
      title: "Social Worker",
      company: "Shri Rashtriya Janajagru Trust",
      period: "14 July 2024 – 28 July 2024",
      type: "Internship",
      description: [
        "Managed data entry of villagers who donated blood, ensuring accuracy and efficiency",
        "Assisted in organizing and maintaining donation records for the trust",
        "Contributed to community health initiatives and data management processes"
      ],
      icon: "🤝"
    }
  ]

  return (
    <section id="experience" className="pt-12">
      <motion.h2
        className="text-3xl font-semibold text-center"
        initial={{opacity:0, y:20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.6}}
        viewport={{once: true}}
      >
        Experience
      </motion.h2>

      <div className="mt-8 space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="glass p-6 hover-lift"
            initial={{opacity:0, x:-30}}
            whileInView={{opacity:1, x:0}}
            transition={{duration:0.6, delay: index * 0.2}}
            viewport={{once: true}}
          >
            <div className="flex items-start gap-4">
              <div className="text-3xl mt-1">{exp.icon}</div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-medium accent">{exp.title}</h3>
                  <span className="px-2 py-1 bg-[rgba(0,240,234,0.1)] text-accent text-xs rounded-full mt-1 sm:mt-0">
                    {exp.type}
                  </span>
                </div>

                <p className="text-[rgba(255,255,255,0.8)] font-medium mb-1">{exp.company}</p>
                <p className="text-sm text-[rgba(255,255,255,0.6)] mb-4">{exp.period}</p>

                <ul className="space-y-2">
                  {exp.description.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      className="text-[rgba(255,255,255,0.8)] flex items-start gap-2"
                      initial={{opacity:0, x:20}}
                      whileInView={{opacity:1, x:0}}
                      transition={{duration:0.4, delay: (index * 0.2) + (itemIndex * 0.1)}}
                      viewport={{once: true}}
                    >
                      <span className="text-accent mt-1.5">•</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
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
          Currently focusing on academic projects and personal development. Open to internships and opportunities in software development and AI/ML.
        </p>
      </motion.div>
    </section>
  )
}
