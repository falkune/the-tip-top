import { useState, useContext } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { useRouter } from "next/router";
import Cookies from 'js-cookie';
import ApiContext from '../context/apiContext';
import { login, googleLoginRegister, facebookLoginRegister, forgotPassword } from '../fonctions/users';
import { notifier } from "../fonctions/utils";
import Link from "next/link";


export default function Connexion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const context = useContext(ApiContext);
  const [resetPassword, setResetPassword] = useState(false);
  let [btnText, setBtnText] = useState("Connexion");

  const router = useRouter();
  const connexion = async () => {
    let user = await login(context, email, password)
    if (user.statusCode) {      
      if(Array.isArray(user.message)){
        user.message.forEach(element => {
          notifier(element ,"error","top-right",5000);
        });
      }else{
        notifier(user.message)
      }
    } else {
      if (Cookies.get('role') == "admin")
        router.push({ pathname: "/stats" }, undefined, { shallow: true });
      else
        router.push({ pathname: "/bingo" }, undefined, { shallow: true });
    }
  };

  const goSignup = () => {
    router.push({ pathname: "/inscription" }, undefined, { shallow: true });
  };

  const facebookLogin = async () => {
    let user = await facebookLoginRegister(context)
    if (user.statusCode) {
      notifier(user.message)
    } else {
      if (Cookies.get('role') == "admin")
        router.push({ pathname: "/stats" }, undefined, { shallow: true });
      else
        router.push({ pathname: "/bingo" }, undefined, { shallow: true });
    }
  }

  const googleLogin = async () => {
    let user = await googleLoginRegister(context)
    if (user.statusCode) {
      notifier(user.message)
    } else {
      if (Cookies.get('role') == "admin")
        router.push({ pathname: "/stats" }, undefined, { shallow: true });
      else
        router.push({ pathname: "/bingo" }, undefined, { shallow: true });
    }
  }

  const resetPasswor = async() => {
    forgotPassword(context, email)
    .then((response) => {
      notifier(response.message)
    })
  }


  const valider = (e) => {
    e.preventDefault();
    if(resetPassword){
      resetPasswor();
    }else{
      connexion();
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
            className={styles.log}
            style={{ borderBottom: "solid 1px #D2D2D2" }}
          >
            <h1 className={styles.h1} style={{ fontSize: 25 }}>
              Connexion
            </h1>
            <input
              label='Password'
              name='password'
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

            <button
              className={styles.action}
              style={{ animation: "pulse 1sec infite" }}
              onClick={e => valider(e)}
            >
              {btnText = resetPassword ? "Changer de mot de passe" : "Connexion"}
            </button>
          </form>
          {!resetPassword && (
            <div>
            <span style={{color: "#437BFF", fontWeight: "bold"}} onClick={() => setResetPassword(true)}><Link href="#update-password" >mot de passe oublié</Link></span>
           </div>)}
          <div className={styles.social}>
            <button
              style={{
                backgroundColor: "#437BFF",
                fontWeight: "bold",
                color: "white",
                position: "relative",
                height: 60,
              }}
              onClick={facebookLogin}
            >
              <span style={{ position: "absolute", left: 20, bottom: 1 }}>
                <Image
                  src='/facebook.png'
                  width="16"
                  height="40"
                  objectFit="contain"
                  alt="facebook logo"
                />
              </span>
              Connexion
            </button>
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
                boxShadow: "0px 0px 6px 4px rgba(0,0,0,0.10)",
              }}
              onClick={googleLogin}
            >
              <span style={{ position: "absolute", left: 8, bottom: 1 }}>
                <Image src='/google.svg' width="40" height="40" alt="google logo" />
              </span>
              Connexion
            </button>
          </div>
        </section>
        <small style={{ color: "grey" }}>
          Pas encore de compte ?
          <strong style={{ color: "#437BFF" }}>
            {" "}
            <button style={{
              margin: 10,
              fontWeight: "bold",
              color: "#437BFF",
              border: "none",
              padding: 10,
              border: 5
            }} onClick={goSignup}> S'inscrire</button>
          </strong>
        </small>
      </div>
      <Footer />
    </div>
  );
}
