import React, { useState, useContext } from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { useRouter } from "next/router";
import ClipLoader from "react-spinners/ClipLoader";
import Cookies from 'js-cookie';
import ApiContext from '../context/apiContext';
import { login, googleLoginRegister, forgotPassword } from '../fonctions/users';
import { notifier } from "../fonctions/utils";
import Link from "next/link";


export default function Connexion() {
  const [email, setEmail] = useState("");
  const [load, setLoad] = useState(false);
  const [password, setPassword] = useState("");
  const context = useContext(ApiContext);
  const [resetPassword, setResetPassword] = useState(false);
  let [btnText, setBtnText] = useState("Connexion");

  const router = useRouter();
  const connexion = async () => {
    setLoad(true)
    let user = await login(context, email, password)
    if (user.statusCode) {
       setLoad(false)
      if (Array.isArray(user.message)) {
        user.message.forEach(element => {
          notifier(element, "error", "top-right", 5000);
        });
        setLoad(false)
      } else {
        setLoad(false)
        notifier(user.message)
      }
    } else {
      if (Cookies.get('role') == "admin")
        router.push({ pathname: "/stats" }, undefined, { shallow: true });
      else
        if (Cookies.get('role') == "client")
        router.push({ pathname: "/bingo" }, undefined, { shallow: true });
    }
  };


  const googleLogin = async () => {
    setLoad(true)
    let user = await googleLoginRegister(context)
    if (user.statusCode) {
      setLoad(false)
      if (Array.isArray(user.message)) {
        user.message.forEach(element => {
          notifier(element, "error", "bottom-right", 5000);
        });
        setLoad(false)
      } else {
        setLoad(false)
        notifier(user.message, "error", "bottom-right", 5000);
      }
    } else {
      if (Cookies.get('role') == "admin")
        router.push({ pathname: "/stats" }, undefined, { shallow: true });
      else
        router.push({ pathname: "/bingo" }, undefined, { shallow: true });
    }
    setLoad(false)
  }

  const resetPasswor = async () => {
    forgotPassword(context, email)
      .then((response) => {
        notifier(response.message)
      })
  }


  const valider = (e) => {
    e.preventDefault();
    if (resetPassword) {
      resetPasswor();
    } else {
      connexion();
    }
  }
  return (
    <div>
      <div className=" container "
      style={{
        background:"linear-gradient(83deg, rgba(56,135,13,1) 0%, rgba(56,135,13,1) 50%, rgba(144,203,6,1) 100%, rgba(211,255,0,1) 100%)" }} >
        <Head>
          <title> Connexion au jeux tiptop</title>
          <meta name="connexion" content="tip top jeux concours" />
          <meta name="google-site-verification" content="iDBitZ99_g4ELVANaUEpnh57Tum7BZhycjYf21Zxy-M" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <section style={{marginTop:150}} className="login animate__animated animate__fadeInUp">
          <form
            className="log"
            style={{ borderBottom: "solid 1px #D2D2D2" }}>
            <h1  style={{ fontSize: 25,color:"green" }}>
              Connexion
            </h1>
            <input
              label='Password'
              name='email'
              aria-label='formEmail'
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            {!resetPassword && (
              <input
                label='Password'
                name='password'
                type='password'
                aria-label='formPassword'
                placeholder="Mot de passe"
                onChange={(e) => setPassword(e.target.value)}
              />
            )}

           {!load?
                 <button
                 className="action"
                 onClick={e => valider(e)}>
                 {btnText = resetPassword ? "Changer de mot de passe" : "Connexion"}
               </button>  : <ClipLoader color={" #38870D"} loading={true} size={70} />} 
          </form>
          {!resetPassword && (
            <div>
              <span style={{ color: "#38870D", fontWeight: "bold" }} onClick={() => setResetPassword(true)}><Link href="#update-password" >Mot de passe oubli?? ?</Link></span>
            </div>)}
          <div className="social">
            <button
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
                backgroundColor: "white",
                fontWeight: "bold",
                color: "#437BFF",
                height: 60,
                boxShadow: "0px 0px 6px 5px rgba(0,0,0,0.05)",
              }}
              onClick={googleLogin}
            >
              <span style={{ position: "absolute", left: 8, bottom: 1 }}>
                <Image src='/google.svg' width="40" height="40" alt="google logo" />
              </span>
              Connexion
            </button>
          </div>
          <small style={{color:"grey",margin:15}}>
          Pas encore de compte ?
          <strong style={{
            backgroundColor: "#cde0cd",
            margin: 10,
            fontWeight: "bold",
            color: "#38870D",
            border: "none",
            padding: 10,
            border: 5
          }}>
            <Link href="/inscription"> S'inscrire</Link>
          </strong>
        </small>

        </section>
     
      </div>
      <Footer />
    </div>
  );
}
