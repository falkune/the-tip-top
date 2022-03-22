import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../component/Header'
import Footer from "../component/Footer"

export default function Conditions() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Conditions générales de vente</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <section className={styles.part}>
        <h1 className={styles.h1}>Conditions générales de vente</h1>
      </section>

      <Footer/>
    </div>
  )
}
