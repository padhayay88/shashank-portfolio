import { motion } from 'framer-motion'

export default function Education() {
  const education = [
    {
      institution: "Pandit Deendayal Energy University (PDEU)",
      degree: "B.Tech in Computer Science",
      period: "2023–2027",
      grade: "CGPA: 7.85",
      description: "Relevant coursework: Data Structures, Algorithms, Design Patterns, Software Engineering, DBMS, OOP.",
      icon: "🎓",
      achievements: ["Consistent academic performance", "Active in technical projects", "Focus on practical application of concepts"]
    },
    {
      institution: "Tiltama Secondary School, Butwal, Nepal",
      degree: "Secondary Education (SSC)",
      period: "Completed May 2021",
      grade: "CGPA: 2.74/4",
      description: "Completed secondary education with foundational knowledge in science and mathematics.",
      icon: "📚",
      achievements: ["Strong foundation in mathematics and science", "Developed analytical thinking skills"]
    }
  ]

  return (
    <section id="education" className="pt-12">
      <motion.h2
        className="text-3xl font-semibold text-center"
        initial={{opacity:0, y:20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.6}}
        viewport={{once: true}}
      >
        Education
      </motion.h2>

      <div className="mt-8 grid md:grid-cols-1 lg:grid-cols-2 gap-6">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="glass p-6 hover-lift"
            initial={{opacity:0, y:30}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.6, delay: index * 0.2}}
            viewport={{once: true}}
          >
            <div className="flex items-start gap-4">
              <div className="text-3xl mt-1">{edu.icon}</div>
              <div className="flex-1">
                <h3 className="text-xl font-medium accent mb-1">{edu.institution}</h3>
                <p className="text-[rgba(255,255,255,0.8)] font-medium mb-1">{edu.degree}</p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <p className="text-sm text-[rgba(255,255,255,0.6)]">{edu.period}</p>
                  <span className="px-2 py-1 bg-[rgba(0,240,234,0.1)] text-accent text-xs rounded-full mt-1 sm:mt-0">
                    {edu.grade}
                  </span>
                </div>

                <p className="text-[rgba(255,255,255,0.8)] mb-3">{edu.description}</p>

                <div className="space-y-1">
                  {edu.achievements.map((achievement, achIndex) => (
                    <motion.div
                      key={achIndex}
                      className="flex items-center gap-2 text-sm text-[rgba(255,255,255,0.7)]"
                      initial={{opacity:0, x:20}}
                      whileInView={{opacity:1, x:0}}
                      transition={{duration:0.4, delay: (index * 0.2) + (achIndex * 0.1)}}
                      viewport={{once: true}}
                    >
                      <span className="text-accent">✓</span>
                      <span>{achievement}</span>
                    </motion.div>
                  ))}
                </div>
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
          Committed to continuous learning and staying updated with the latest technologies and industry trends.
        </p>
      </motion.div>
    </section>
  )
}
