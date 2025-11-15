import Head from 'next/head'
import dynamic from 'next/dynamic'

// Dynamically import motion-using components to avoid SSR/prerender issues
const Hero = dynamic(() => import('../components/Hero'), { ssr: false })
const About = dynamic(() => import('../components/About'), { ssr: false })
const Projects = dynamic(() => import('../components/Projects'), { ssr: false })
const Skills = dynamic(() => import('../components/Skills'), { ssr: false })
const Experience = dynamic(() => import('../components/Experience'), { ssr: false })
const Education = dynamic(() => import('../components/Education'), { ssr: false })
const Contact = dynamic(() => import('../components/Contact'), { ssr: false })
const Footer = dynamic(() => import('../components/Footer'), { ssr: false })

export default function Home() {
  return (
    <>
      <Head>
        <title>Shashank Upadhayay — Portfolio</title>
        <meta name="description" content="Portfolio of Shashank Upadhayay. B.Tech CS student. Builds APIs, web apps and AI automation tools." />
      </Head>

      <div className="container">
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Experience />
        <div className="section-divider" />
        <Education />
        <div className="section-divider" />
        <Contact />
        <Footer />
      </div>
    </>
  )
}
