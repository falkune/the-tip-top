import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Link from "next/link";
import google from "../image/google.svg";
import facebook from "../image/facebook.png";
import { useRouter } from "next/router";
import Cookies from 'js-cookie'
import ApiClient from "../api/api-client"
import { constant } from "lodash-es";
import ErrorMessage from "../component/ErrorMessage";




export default function Connexion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fool, setFool] = useState(false);
  const [backend, setBackend] = useState(new ApiClient()
    .setHeader("lang", "en"));
  const router = useRouter();

  const connexion = async (e) => {
    e.preventDefault();
    const params = {
      email: email,
      password: password,
    };

    let login = backend.users.post('login', JSON.stringify(params), {
      Accept: "Application/json",
      "Content-Type": "application/json",
    });
    
    console.log("login");

    console.log(login);

    console.log("login");
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
            {!forgotPassword &&(
              <h1 className={styles.h1} style={{ fontSize: 25 }}>
                Connexion
              </h1>
            )}
            {forgotPassword &&(
              <p className={styles.h1} style={{ fontSize: 25 }}>
                Entrez votre mail pour modifier votre mot de passe
              </p>
            )}
              <input
               type="text"
               placeholder="Email"
               onChange={(e) => setEmail(e.target.value)}
               required
             />
             {error && forgotPassword &&(
              <ErrorMessage errorMessage={message}/>
            )}
             {!forgotPassword &&(
              <input
                type="password"
                placeholder="Mot de passe"
                onChange={(e) => setPassword(e.target.value)}
                required
              />)}
            {error && !forgotPassword &&(
              <ErrorMessage errorMessage={message}/>
            )}
            <button
              className={styles.action}
              style={{ animation: "pulse 1sec infite" }}
            >
              Connexion
            </button>
          </form>
          {!forgotPassword &&(
            <div style={{marginTop: "20px", color: "#437BFF" }}>
              <span onClick={() => setforgotPassword(true)}>Mot de passe oublié</span>
            </div>
          )}
          <div className={styles.social}>
            <button
              style={{
                backgroundColor: "#437BFF",
                color: "white",
                position: "relative",
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
                backgroundColor: "white",
                color: "#437BFF",
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
        <small>
          Pas encore de compte ?
          <strong style={{ color: "#437BFF" }}>
            <strong style={{ color: "#437BFF" }}>
              <Link href="/inscription"> S'inscrire </Link>
            </strong>
          </strong>
        </small>
      </div>
      <Footer />
    </div>
  );
}
