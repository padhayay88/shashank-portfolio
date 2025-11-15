import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Simulate form submission (replace with actual form service)
    try {
      // Here you would integrate with Formspree, Netlify Forms, or EmailJS
      await new Promise(resolve => setTimeout(resolve, 2000)) // Simulate API call

      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="pt-12 pb-12">
      <motion.h2
        className="text-3xl font-semibold text-center"
        initial={{opacity:0, y:20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.6}}
        viewport={{once: true}}
      >
        Let&apos;s Connect
      </motion.h2>

      <div className="mt-8 grid md:grid-cols-2 gap-8">
        <motion.div
          className="glass p-6"
          initial={{opacity:0, x:-30}}
          whileInView={{opacity:1, x:0}}
          transition={{duration:0.6, delay:0.2}}
          viewport={{once: true}}
        >
          <h3 className="text-xl font-medium accent mb-4">📬 Get in touch</h3>
          <div className="space-y-3">
            <p className="text-[rgba(255,255,255,0.8)] flex items-center gap-3">
              <span className="text-accent">✉️</span>
              <a href="mailto:shashankupadhayay44@gmail.com" className="hover:underline transition-all duration-200">
                shashankupadhayay44@gmail.com
              </a>
            </p>
            <p className="text-[rgba(255,255,255,0.8)] flex items-center gap-3">
              <span className="text-accent">📱</span>
              +91 7007737388
            </p>
            <p className="text-[rgba(255,255,255,0.8)] flex items-center gap-3">
              <span className="text-accent">🐙</span>
              <a href="https://github.com/padhayay88" target="_blank" rel="noreferrer" className="hover:underline transition-all duration-200">
                github.com/padhayay88
              </a>
            </p>
            <p className="text-[rgba(255,255,255,0.8)] flex items-center gap-3">
              <span className="text-accent">📍</span>
              Ahmedabad, Gujarat / Butwal, Nepal
            </p>
          </div>

          <div className="mt-6 flex gap-4">
            <motion.a
              href="https://github.com/padhayay88"
              target="_blank"
              rel="noreferrer"
              className="p-3 glass rounded-full hover-lift"
              whileHover={{scale: 1.1}}
              whileTap={{scale: 0.95}}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </motion.a>
            <motion.a
              href="mailto:shashankupadhayay44@gmail.com"
              className="p-3 glass rounded-full hover-lift"
              whileHover={{scale: 1.1}}
              whileTap={{scale: 0.95}}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="glass p-6"
          initial={{opacity:0, x:30}}
          whileInView={{opacity:1, x:0}}
          transition={{duration:0.6, delay:0.4}}
          viewport={{once: true}}
        >
          <h3 className="text-xl font-medium accent mb-4">💬 Send a message</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] focus:border-accent focus:outline-none transition-colors duration-200"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] focus:border-accent focus:outline-none transition-colors duration-200"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] focus:border-accent focus:outline-none transition-colors duration-200 resize-none"
                placeholder="Your message..."
              />
            </div>

            <div className="flex items-center gap-4">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="btn-neon disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.span
                  className="text-green-400 text-sm"
                  initial={{opacity:0, x:20}}
                  animate={{opacity:1, x:0}}
                >
                  ✓ Message sent!
                </motion.span>
              )}

              {submitStatus === 'error' && (
                <motion.span
                  className="text-red-400 text-sm"
                  initial={{opacity:0, x:20}}
                  animate={{opacity:1, x:0}}
                >
                  ✗ Failed to send
                </motion.span>
              )}
            </div>
          </form>

          <p className="mt-4 text-xs text-[rgba(255,255,255,0.6)]">
            💡 Tip: Replace the form handler with Formspree, Netlify Forms, or EmailJS for actual functionality.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
