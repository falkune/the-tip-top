import React, { useEffect, useState,useContext } from "react";

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Link from "next/link";
import google from "../image/google.svg";
import facebook from "../image/facebook.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from "next/router";
import { faEye } from '@fortawesome/free-solid-svg-icons';
import ErrorMessage from "../component/ErrorMessage";
import axios from "axios";
import {firebaseApp} from '../config/firebase';
import ApiClient from '../api/api-client';
import ApiContext from '../context/apiContext';
import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider, 
  FacebookAuthProvider 
} from "firebase/auth"

export default function Inscription() {
  const context = useContext(ApiContext);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [emailMatch, setEmailMatch] = useState(false);
  const [nom, setNom] = useState("");
  const [valideName, setValideName] = useState(false);
   const [dateNaissance, setDateNaissance] = useState(null);
  const [majorite, setMajorite] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [showPassword, setShowpassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confimation, setConfirmation] = useState(false);
  const [showVerifPassword, setShowVerifpassword] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const GoogleProvider = new GoogleAuthProvider();
  const FacebookProvider = new FacebookAuthProvider();

  
  
  const verifyEmail = () => {
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!email.match(validRegex)){
      setEmailMatch(false);
    }
  }

  const verifyName = () => {
    if(nom.length < 6)
      setValideName(false);
  }

  const verifyPassword = () => {
    let validRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$/\\"&+,:;`={}[\]?@#|'<~°£¨²§µ>.^*()%!-])(?=.{8,})/);
    if(!password.match(validRegex)){
      setPasswordMatch(false);
    }
  }

  const showHidePassword = () => {
    if(showPassword){
      setShowpassword(false);
    }else{
      setShowpassword(true);
    }
  }

  const showHideVerifPassword = () => {
    if(showVerifPassword){
      setShowVerifpassword(false);
    }else{
      setShowVerifpassword(true);
    }
  }

  const verifyPaswords = () => {
    if(password === confirmPassword){
      setConfirmation(true);
    }
  }

  const verifMajorite = () => {
    let months = Date.now() - new Date(dateNaissance);
    let monthDate = new Date(months);
    let years = monthDate.getUTCFullYear();
    let age = Math.abs(years - 1970);
    if(age >= 18){
      setMajorite(true);
    }
  }

  const googleRegistration = () => {
    const firebaseAuth = getAuth(firebaseApp);
    signInWithPopup(firebaseAuth, GoogleProvider)
    .then((res) => {
      const user = {
        email: res.user.email,
        fullName: res.user.displayName,   
        socialNetworkUserId:res.user.uid,
        socialNetworkAccessToken:res.user.accessToken,
        socialNetworkProvider: res.user.providerId,
        password: "",
        birthday: ""

      }

      
      

      setEmail(res.user.email);
      setNom(res.user.displayName);
      setDateNaissance(res.user.reloadUserInfo.dateOfBirth);

      console.log("Registration",user);
   context.backend.api.users.post('auth-from-social-network', user).then((res) => {
    console.log('User est là',res)
   })

 


    })
    .catch((error) => {
      console.log(error)
    })
  }

  // facebook start
  const facebookRegistration = () => {
    FacebookProvider.addScope('email');
    FacebookProvider.addScope('user_birthday');
    FacebookProvider.addScope('user_friends');
    
    const firebaseAuth = getAuth(firebaseApp);
    signInWithPopup(firebaseAuth, FacebookProvider)
    .then((res) => {
      const user = {

       email: res.user.email,
        fullName: res.user.displayName,   
        socialNetworkUserId:res.user.uid,
        socialNetworkAccessToken:res.user.accessToken,
        socialNetworkProvider: res.user.providerId,
        password: "",
        birthday: res.user.reloadUserInfo.dateOfBirth
      }

      console.log("THIS IS USER from facebooke ",user);
      

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
  // facebook end


  const register = (e) => {
    e.preventDefault();
    if(emailMatch && passwordMatch && confimation && majorite){
      const url = process.env.NEXT_PUBLIC_BASE_URL+"/user";
      axios.post(url, {
        fullName: nom,
        email: email,
        password: password,
        birthday: dateNaissance,
      })
      .then((response) => {
        console.log(response)
        router.push({
          pathname: `connexion`,
          query: { number: router.query.num ? router.query.num : null },
        });
      })
      .catch((error) => {
        console.log(error)
        setError(true);
        setMessage(error.response.data.message);
      });
    }
  }

  return (
    <div>
      <div className={styles.container}>
        <Head>
          <title>TeaBingo - Jeux concours</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/fav.png" />
        </Head>
        <Header />
        <section className={styles.login}>
          <form
            className={styles.part}
            style={{ borderBottom: "solid 1px #D2D2D2" }}
            onSubmit={(e) => register(e)}
          >
            <h1 className={styles.h1} style={{ fontSize: 25 }}>
              Inscription
            </h1>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              onBlur={verifyEmail}
              onFocus={() => setEmailMatch(true)}
              required
            />
            <label style={{color: "red", display: (emailMatch || email == "") ? "none" : "block"}}>Vous email invalide !</label>
            <input
              type="text"
              placeholder="Nom prénom"
              onChange={(e) => setNom(e.target.value)}
              onBlur={verifyName}
              onFocus={() => setValideName(true)}
              required
            />
            <label style={{color: "red", display: (valideName || nom == "") ? "none" : "block"}}>le nom complet doit faire minimum 6 caractères</label>
            <input
              type="date"
              placeholder="Date de naissance"
              onChange={(e) => setDateNaissance(e.target.value)}
              onBlur={verifMajorite}
              required
            />
            <label style={{color: "red", display: (majorite || dateNaissance == null) ? "none" : "block"}}>Vous devez avoir au moins 18 ans pour participer...</label>
            <div style={{position : "relative", width: "100%"}}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Mot de passe"
                onChange={(e) => setPassword(e.target.value)}
                onBlur={verifyPassword}
                onFocus={() => setPasswordMatch(true)}
                style={{color : (passwordMatch || password == "") ? "black" : "orange" }}
                required
              />
              <span 
                style={{position: "absolute", top: "36%",right: "40px"}}
                onClick={showHidePassword}>
                <FontAwesomeIcon icon={faEye} />
              </span>
              <label style={{color: "red", display: (passwordMatch || password == "") ? "none" : "block"}}>Vous mot de passe invalide !</label>
            </div>
            <div style={{position : "relative", width: "100%"}}>
              <input
                type={showVerifPassword ? "text" : "password"}
                placeholder="Confirmation du mot de passe"
                onChange={(e) => setConfirmPassword(e.target.value)}
                onBlur={verifyPaswords}
                style={{color : (password == confirmPassword) ? "black" : "orange" }}
                required
              />
              <span 
                style={{position: "absolute", top: "36%",right: "40px"}}
                onClick={showHideVerifPassword}>
                <FontAwesomeIcon icon={faEye} />
              </span>
            </div>
            <label style={{color: "red", display: (password == confirmPassword || confirmPassword == "") ? "none" : "block"}}>mots de passe non conformes !</label>
            <button
              className={styles.action}
              style={{ animation: "pulse 1sec infite" }}
            >
              Inscription
            </button>
            {error && (
              <ErrorMessage errorMessage={message}/>
            )}
          </form>
          <div className={styles.social}>
            <button
              style={{
                backgroundColor: "#437BFF",
                color: "white",
                position: "relative",
              }}
              onClick={facebookRegistration}
            >
              <span style={{ position: "absolute", left: 20, bottom: 1 }}>
                <Image
                  src={facebook}
                  width="16"
                  height="40"
                  objectFit="contain"
                  alt="facebook logo"
                />
              </span>
              S'inscrire
            </button>
            <button
              style={{
                backgroundColor: "white",
                color: "#437BFF",
                boxShadow: "0px 0px 6px 4px rgba(0,0,0,0.10)",
              }}
              onClick={googleRegistration}
            >
              <span style={{ position: "absolute", left: 8, bottom: 1 }}>
                <Image src={google} width="40" height="40" alt="google logo" />
              </span>
              S'inscrire
            </button>
          </div>
        </section>
        <small style={{color:"grey"}}>
          Déjà un compte ?
          <strong style={{
                backgroundColor:"#F2F2F2",
                margin:10,
                fontWeight:"bold",
                color: "#437BFF",
                border:"none",
                padding:10,
                border:5
              }}>
            <Link href="/connexion"> Se connecter</Link>
          </strong>
        </small>
      </div>
      <Footer />
    </div>
  );
}


