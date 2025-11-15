import '../styles/globals.css'
import { useEffect, useState } from 'react'
import { ThemeProvider } from '../components/ThemeProvider'
import Navbar from '../components/Navbar'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  return (
    <ThemeProvider>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Shashank Upadhayay — Portfolio. B.Tech CS student building web apps, APIs and AI tools." />
        <meta property="og:title" content="Shashank Upadhayay — Portfolio" />
        <meta property="og:description" content="Portfolio of Shashank Upadhayay. Full-stack web developer and AI enthusiast." />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  )
}

export default MyApp
