import '@/styles/globals.css'
import { Poppins } from 'next/font/google'
const font = Poppins({
  subsets: ['latin'],
  weight: ['400', '700']
})

export default function App({ Component, pageProps }) {
  return <>
    <style jsx global>{`
        html {
          font-family: ${font.style.fontFamily};
        }
      `}</style>
    <Component {...pageProps} />
  </>
}
