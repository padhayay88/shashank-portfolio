/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          DEFAULT: '#00F0EA',
          deep: '#00b7a8'
        },
        cyanglow: '#00f0ea33'
      },
      backgroundImage: {
        'futuristic': 'radial-gradient(800px 400px at 10% 10%, rgba(0,240,234,0.12), transparent), radial-gradient(700px 350px at 90% 90%, rgba(20,120,255,0.06), transparent)'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        space: ['"Space Grotesk"', 'sans-serif']
      },
      boxShadow: {
        'neon-lg': '0 10px 30px rgba(0,240,234,0.08), 0 0 24px rgba(0,240,234,0.06)',
        'glass': '0 6px 24px rgba(2,6,23,0.6)'
      }
    }
  },
  plugins: [],
}
