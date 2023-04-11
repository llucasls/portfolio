import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
//import styles from '@/styles/Home.module.css'
import _styles from '@/styles/home.css'

const inter = Inter({ subsets: ['latin'] })

// export default function Home() {
//   return <div>I will fill this page with stuff</div>;
// }

export default function Home() {
  return (
    <>
      <Head>
        <title>Lucas Haine - Web Developer</title>
      </Head>
      <header>
        <h1>Lucas Haine</h1>
      </header>
      <p>This page is where I will build my portfolio.</p>
    </>
  )
}
