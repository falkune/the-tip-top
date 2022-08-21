import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../component/Header'
import Footer from "../component/Footer"
import Link from "next/link"
import google from "../image/google.svg"
import facebook from "../image/facebook.png"
import { useRouter } from 'next/router'
import {firebaseApp} from '../config/firebase'
import { setCookie } from 'cookies-next'
import { getCookie } from 'cookies-next'

import { 
  AuthProvider, 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider, 
  FacebookAuthProvider 
} from "firebase/auth"


export default function Connexion() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState(getCookie('user'))

  const GoogleProvider = new GoogleAuthProvider()
  const FacebookProvider = new FacebookAuthProvider()

  const router = useRouter()

  const connexion = (e) => {
    // signIn function contact the backend API service 
    e.preventDefault()
    const params = {
      "email": email,
      "password": password
    }

    const options = {
      method: 'POST',
      headers:{
        'Accept': 'Application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params)
    }

    fetch('https://api.dev.dsp-archiwebo21-ct-df-an-cd.fr/user/login/', options)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // en fonction du role de l'utilisateur rediriger vers la bonne interface
      setCookie('user', "pro");
      setRole(getCookie('user'))
      localStorage.setItem('token',data.token)
      if (data.role ==="pro"){
        localStorage.setItem('role','pro')
      // router.push('/stats')
      }else{
        localStorage.setItem('role','client')
      // router.push('/stats')
      }

      // router.push('/bingo')
    })
    .catch((error) => {
      console.log(error);
    })
  }
  
  const signInWith = (provider) => {
    // this function connect user withn with his google or facebook account
    const firebaseAuth = getAuth(firebaseApp);
    signInWithPopup(firebaseAuth, provider)
    .then((res) => {
      const user = res.user;
      console.log(user)
      const displayName = user.displayName;
      const email = user.email;
      const uid = user.uid;
      // contacter API
    })
    .catch((err) => {
      const errorCode = err.code;
      const errorMessage = err.message;
      // console.log(errorMessage)
      if(err.code === 'auth/account-exists-with-different-credential'){
        console.log("error");
      }
    })
  }

  return (
    <div>
      <div className={styles.container}>
        <Head>
          <title>TeaBingo - Jeux concours</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/fav.png" />
        </Head>
        <Header user={role}/>
        <section className={styles.login}>
          <form 
            className={styles.part} 
            style={{borderBottom:"solid 1px #D2D2D2"}}
            onSubmit={e => connexion(e)}>
            <h1 className={styles.h1} style={{fontSize:25}}>Connexion</h1>
            <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
            <input type="password" placeholder="Mot de passe" onChange={e => setPassword(e.target.value)}/>
            <button className={styles.action}  style={{animation:"pulse 1sec infite"}}>Connexion</button>
          </form>
          <div className={styles.social} >
            <button 
              style={{backgroundColor:"#437BFF",color:"white",position:"relative"}}
              onClick={() => signInWith(FacebookProvider)}>
              <span  style={{position:"absolute",left:20,bottom:1}}>
                <Image src={facebook} width="16" height="40" objectFit='contain' alt='facebook logo'/> 
              </span>
              Connexion
            </button>
            <button 
              style={{backgroundColor:"white",color:"#437BFF", boxShadow:"0px 0px 6px 4px rgba(0,0,0,0.10)"}}
              onClick={() => signInWith(GoogleProvider)}>
              <span  style={{position:"absolute",left:8,bottom:1}}>
                <Image src={google} width="40" height="40" alt='google logo'/> 
              </span>
              Connexion
            </button>
          </div>
        </section>
        <small>
          Pas encore de compte ?
          <strong style={{color:"#437BFF"}}> <Link href="/inscription">  S'inscrire</Link></strong>
        </small>
      </div>
      <Footer/>
    </div>
  )
}
