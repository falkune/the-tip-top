import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from '../component/Header';
import Footer from "../component/Footer";
import Link from "next/link";
import google from "../image/google.svg";
import facebook from "../image/facebook.png";
import { useRouter } from 'next/router';
import {firebaseApp} from '../config/firebase';
import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider, 
  FacebookAuthProvider 
} from "firebase/auth"
import ModalAge from "../component/ModalAge";

export default function Inscription() {
  const [email, setEmail] = useState('');
  const [nom, setNom] = useState('');
  const [dateNaissance, setDateNaissance] = useState(null);
  const [password, setPassword]   = useState(null);
  const [confirm, setConfirm]   = useState(null);
  const [showAgeModal, setShowAgeModal] = useState(false);

  const GoogleProvider = new GoogleAuthProvider();
  const FacebookProvider = new FacebookAuthProvider();

  const googleRegistration = () => {
    // contact API
    fetch('https://api.dev.dsp-archiwebo21-ct-df-an-cd.fr/user/googleAuth')
    .then((result) => {
      // show the apropriate screen
    })
    .catch((error) => console.log(error))
  }

  FacebookProvider.addScope('email');
  FacebookProvider.addScope('user_birthday');
  FacebookProvider.addScope('user_friends');
  const facebookRegistration = () => {
    // setShowAgeModal(true);
    const firebaseAuth = getAuth(firebaseApp);
    signInWithPopup(firebaseAuth, FacebookProvider)
    .then((res) => {
      console.log(res.user);
      console.log(res.user.email);
      console.log(res.user.reloadUserInfo.dateOfBirth);

      setEmail(res.user.email);
      setNom(res.user.displayName);
      dateNaissance(res.user.reloadUserInfo.dateOfBirth);
    })
    .catch((err) => {
      const errorCode = err.code;
      const errorMessage = err.message;
      if(err.code === 'auth/account-exists-with-different-credential'){
        console.log("error");
      }
    })
  }


  const register = (e) => {
    // register function contact the backend API service
    e.preventDefault()
    const params = {
      "fullName": nom,
      "email": email,
      "password": password,
      "birthday": dateNaissance,
    }

    const options = {
      method: 'POST',
      headers:{
        'Accept': 'Application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params)
    }
    fetch('https://api.dev.dsp-archiwebo21-ct-df-an-cd.fr/user/', options)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
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
        <Header/>
        <section className={styles.login}>
          <ModalAge showHide={showAgeModal}/>
          <form 
              className={styles.part} 
              style={{borderBottom:"solid 1px #D2D2D2"}}
              onSubmit={(e) => register(e)}>
              <h1 className={styles.h1} style={{fontSize:25}}>Inscription</h1>
              <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
              <input type="text" placeholder="Nom prénom" onChange={(e) => setNom(e.target.value)}/>
              <input type="date" placeholder="Date de naissance" onChange={(e) => setDateNaissance(e.target.value)}/>
              <input type="password" placeholder="Mot de passe" onChange={(e) => setPassword(e.target.value)}/>
              <input type="password" placeholder="Confirmation du mot de passe" 
              onChange={(e) => setConfirm(e.target.value)}/>
              <button className={styles.action}  style={{animation:"pulse 1sec infite"}}>Inscription</button>
              <div id="modal-root"></div>
          </form>
          <div className={styles.social} >
            <button 
                style={{backgroundColor:"#437BFF",color:"white",position:"relative"}}
                onClick={facebookRegistration}>
                <span style={{position:"absolute",left:20,bottom:1}}>
                  <Image src={facebook} width="16" height="40" objectFit='contain' alt="facebook logo"/> 
                </span>
                S'inscrire
            </button>
            <button 
                style={{backgroundColor:"white",color:"#437BFF", boxShadow:"0px 0px 6px 4px rgba(0,0,0,0.10)"}}
                onClick={googleRegistration}>
                <span  style={{position:"absolute",left:8,bottom:1}}>
                  <Image src={google} width="40" height="40" alt="google logo"/> 
                </span>
                S'inscrire
            </button>
          </div>
        </section>
        <small>
          Déjà un compte ?
          <strong style={{color:"#437BFF"}}><Link href="/connexion"> Se connecter</Link></strong>
        </small>
      </div>
      <Footer/>
=======
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
import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider, 
  FacebookAuthProvider 
} from "firebase/auth"


export default function Inscription() {
  const [email, setEmail] = useState('')
  const [nom, setNom] = useState('')
  const [dateNaissance, setDateNaissance] = useState(null)
  const [password, setPassword]   = useState(null)
  const [confirm, setConfirm]   = useState(null)

  const GoogleProvider = new GoogleAuthProvider()
  const FacebookProvider = new FacebookAuthProvider()

  const registerWith = (provider) => {
    // this function create a new user with his google or facebook account
    const firebaseAuth = getAuth(firebaseApp)
  
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


  const register = (e) => {
    // register function contact the backend API service
    e.preventDefault()
    const params = {
      "fullName": nom,
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
    fetch('https://api.dsp-archiwebo21-ct-df-an-cd.fr/user/', options)
    .then((res) => {
      console.log(res)
    })
  }

  // const router = useRouter()
  // const goBingo = () => {
  //   // router.push('/bingo')
  // }

  return (
    <div>
    <div className={styles.container}>
      <Head>
        <title>TeaBingo - Jeux concours</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Header/>
      <section className={styles.login}>
        <form 
            className={styles.part} 
            style={{borderBottom:"solid 1px #D2D2D2"}}
            onSubmit={(e) => register(e)}>
            <h1 className={styles.h1} style={{fontSize:25}}>Inscription</h1>
            <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
            <input type="text" placeholder="Nom prénom" onChange={(e) => setNom(e.target.value)}/>
            <input type="date" placeholder="Date de naissance" onChange={(e) => setDateNaissance(e.target.value)}/>
            <input type="password" placeholder="Mot de passe" onChange={(e) => setPassword(e.target.value)}/>
            <input type="password" placeholder="Confirmation du mot de passe" 
            onChange={(e) => setConfirm(e.target.value)}/>
            <button className={styles.action}  style={{animation:"pulse 1sec infite"}}>Inscription</button>
        </form>
        <div className={styles.social} >
          <button 
              style={{backgroundColor:"#437BFF",color:"white",position:"relative"}}
              onClick={() => registerWith(FacebookProvider)}>
              <span style={{position:"absolute",left:20,bottom:1}}>
                <Image src={facebook} width="16" height="40" objectFit='contain' /> 
              </span>
              S'inscrire
          </button>
          <button 
              style={{backgroundColor:"white",color:"#437BFF", boxShadow:"0px 0px 6px 4px rgba(0,0,0,0.10)"}}
              onClick={() => registerWith(GoogleProvider)}>
              <span  style={{position:"absolute",left:8,bottom:1}}>
                <Image src={google} width="40" height="40" /> 
              </span>
              S'inscrire
          </button>
        </div>
      </section>
      <small>
        Déjà un compte ?
        <strong style={{color:"#437BFF"}}><Link href="/connexion"> Se connecter</Link></strong>
      </small>
    </div>
    <Footer/>

>>>>>>> cc647dd (count down)
    </div>
  )
}
