import '../styles/globals.css'
import { useEffect, useState } from 'react'
import { ThemeProvider } from '../components/ThemeProvider'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  )
}

export default MyApp
