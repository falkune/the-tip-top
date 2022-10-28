import { useState, useContext } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Link from "next/link";
import google from "../image/google.svg";
import facebook from "../image/facebook.png";
import { useRouter } from "next/router";
import Cookies from 'js-cookie';
import ApiClient from '../api/api-client';
import ApiContext from '../context/apiContext';


export default function Connexion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fool, setFool] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const backend = useContext(ApiContext)

  const router = useRouter();

  const connexion = async (e) => {
    e.preventDefault();
    const params = {
      email: email,
      password: password,
    };

    let auth = backend.api.users.post('login', params, {
      Accept: "Application/json",
      "Content-Type": "application/json",
    });
    auth.then((response) => {
      if (response.statusCode) {
        console.log("erreur", error)
        setError(true)
        setMessage(response.message)
      } else {
        backend.auth = new ApiClient()
        .setHeader("lang", "en")
        .setHeader("Accept", "Application/json")
        .setHeader("Content-Type", "application/json")
        .setBearerAuth(response.accessToken);
        // Cookies.set("logedUser", backend.auth);
        if (response.roles.includes('admin')) {
          router.push({pathname: "/stats"},undefined,{shallow: true});
        }
      }
    });
  };

  const goSignup = () => {
    router.push({
      pathname: `inscription`,
      query: { number: router.query.num ? router.query.num : null },
    });
  };

  const signInWith = (provider) => {

    
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
            onSubmit={(e) => connexion(e)}
          >
            <h1 className={styles.h1} style={{ fontSize: 25 }}>
              Connexion
            </h1>
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Mot de passe"
              onChange={(e) => setPassword(e.target.value)}
            />
            {fool && (
              <small style={{ color: "red" }}>
                Mot de passe ou email incorrecte
              </small>
            )}

            <button
              className={styles.action}
              style={{ animation: "pulse 1sec infite" }}>
              Connexion
            </button>
          </form>
          <div className={styles.social}>
            <button
              style={{
                backgroundColor: "#437BFF",
                fontWeight:"bold",
                color: "white",
                position: "relative",
                height:60,
              }}
              onClick={signInWith}
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
              Connexion
            </button>
            <button
              style={{
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                fontSize:18,
                backgroundColor: "white",
                fontWeight:"bold",
                color: "#437BFF",
                 height:60,
                boxShadow: "0px 0px 6px 4px rgba(0,0,0,0.10)",
              }}
              onClick={signInWith}
            >
              <span style={{ position: "absolute", left: 8, bottom: 1 }}>
                <Image src={google} width="40" height="40" alt="google logo" />
              </span>
              Connexion
            </button>
          </div>
        </section>
        <small style={{color:"grey"}}>
          Pas encore de compte ?
          <strong style={{ color: "#437BFF" }}>
            {" "}
            <button   style={{
                margin:10,
                fontWeight:"bold",
                color: "#437BFF",
                border:"none",
                padding:10,
                border:5
              }}
              onClick={goSignup}> S'inscrire</button>
          </strong>
        </small>
      </div>
      <Footer />
    </div>
  );
}
