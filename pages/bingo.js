import React, { useEffect, useState } from "react";
import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import styles from '../styles/Home.module.css'
import Header from '../component/Header'
import Footer from "../component/Footer"
import { useRouter } from 'next/router'

export default function Bingo() {
  const [num, setNum]   = useState(null);
  const router = useRouter()
  const goResult = () => {
    router.push('/resultat')
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>TeaBingo - Jeux concours</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <section className={styles.block}>
        <h1 className={styles.h1}>Bingo ticket</h1>
        <p>Tester votre ticket pour voir votre lot remporté (100% gagnant )</p>
        <Link href="/#lots"> 
            <small style={{color:"#40EFD7"}}>Voir les differents lots</small>
        </Link>
        <form className={styles.bingo}>
          <input type="text"  name="numero"  autoComplete="off"
           placeholder="Veuillez rentrer vos 10 numéros" 
           maxlength={10}
           onChange={(e) => {
            setNum(e.target.value)}}
            value={num}
            
            />
         { num !== null && num.length < 10 && <small style={{color:"red",textDecoration:"none"}}>Numéro invalide</small>}
         { num !== null && num.length === 10 && <small style={{color:"green",textDecoration:"none"}}>Numéro valide</small>}
         { num !== null && num.length === 10 ? <button  onClick={goResult}
           className={styles.action} 
           style={{margin:25}}>Valider</button>:
           <button disabled={true} 
           className={styles.noaction} style={{margin:25}}>Valider</button> }
        
        </form>
      </section>
      <Footer/>
    </div>
  )
}
