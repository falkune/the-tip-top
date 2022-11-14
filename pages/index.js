import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import logo from "../image/whitelogo.png";
import tea1 from "../image/tea1.png";
import tea2 from "../image/tea2.png";
import tea3 from "../image/tea3.png";
import tea4 from "../image/tea4.png";
import Footer from "../component/Footer";
import { useRouter } from "next/router";
import "animate.css";
import ticket from "../image/ticket.gif";
import store from "../image/store.gif";
import keyboard from "../image/keyboard.gif";
import login from "../image/login.gif";
import axios from "axios";
import arrow from "../image/arrow.gif";

// Import Swiper styles
// import "swiper/css";

export default function Home() {
  const [num, setNum] = useState(null);
  const [current, setCurrent] = useState("");
  const router = useRouter();

  const handleNameChange = (e) => {
    const limit = 10;
    setNum(e.target.value.slice(0, limit));
  };

  const goResult = () => {
    if (localStorage.getItem("token") !== undefined) {
      router.push({
        pathname: `bingo`,
        query: { number: num },
      });
    } else
      router.push({
        pathname: `connexion`,
        query: { number: num },
      });
  };

  const gift = [
    {
      name: "Coffret 69 euros",
      src: tea1,
    },
    {
      name: "100g thé signature",
      src: tea2,
    },
    {
      name: "100g thé detox",
      src: tea3,
    },
    {
      name: "Infuseur à thé",
      src: tea4,
    },
  ];

  return (
    <div className={styles.main2}>
      <Head>
        <title>TeaBingo - Jeux concours</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/fav.png" />
      </Head>
      <section
        className={styles.homdiv}
        style={{ paddingTop: 50, paddingBottom: 50 }}
      >
        <Image src={logo} width="125" height="140" alt="logo" />
        <h1 className={styles.h1}>Jeux concours !</h1>
        <h2>Participer à notre jeux concours afin de recevoir votre lot</h2>
        <form className={styles.bingo}>
          <input
            type="number"
            name="numero"
            autoComplete="off"
            placeholder="Veuillez rentrer vos 10 numéros"
            maxLength={10}
            onChange={handleNameChange}
            value={num}
          />
          {num !== null && num.length < 10 && (
            <small
              style={{ color: "red", textDecoration: "none", marginTop: 20 }}
            >
              Numéro invalide
            </small>
          )}
          {num !== null && num.length === 10 && (
            <small
              style={{ color: "green", textDecoration: "none", marginTop: 20 }}
            >
              Numéro valide
            </small>
          )}
          {num !== null && num.length === 10 ? (
            <button type="button" onClick={goResult} className={styles.action}>
              Tester
            </button>
          ) : (
            <button disabled={true} className={styles.noaction}>
              Tester
            </button>
          )}
        </form>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            width: "80%",
            marginTop: 100,
          }}
        >
          {gift.map((g, i) => (
            <Image
              key={i}
              className={styles.floating}
              src={g.src}
              width={215}
              height={214}
              alt="logo"
            />
          ))}
        </div>
      </section>

      <section
        className={styles.part}
        style={{
          color: "#41D8C2",
          padding: 0,
        }}
      >
        <div style={{ padding: 50, background: "#41D8C2", width: "100%" }}>
          <h2
            className={styles.h2}
            style={{
              color: "white",
              marginBottom: 0,
              fontSize: "2.4em",
            }}
          >
            Comment participer ?
          </h2>
          <Image className="floating" src={arrow} />
        </div>

        <p style={{ color: "white" }}>Jouer en 4 étapes</p>
        <div style={{ width: "100%" }}>
          <div
            style={{
              marginBottom: 20,
            }}
          >
            <strong style={{ fontSize: 50, color: "#41D8C2" }}>1</strong>
            <h3>Prendre les 10 chiffres de votre ticket</h3>
            <span style={{ width: 250 }}>
              <Image src={ticket} height={250} width={250} alt="logo" />
            </span>
          </div>

          <div
            style={{ paddingTop: 30, marginBottom: 20, background: "#41D8C2" }}
          >
            <strong style={{ fontSize: 50, color: "white" }}>2</strong>
            <h3 style={{ color: "white" }}>
              Connectez vous sur note plateforme
            </h3>
            <span style={{ width: 250 }}>
              <Image src={login} height={250} width={250} alt="logo" />
            </span>
          </div>

          <div style={{ paddingTop: 30, marginBottom: 20 }}>
            <strong style={{ fontSize: 50, color: "#41D8C2" }}>3</strong>
            <h3>Entrer vos 10 numéro pour voir votre lot gagné</h3>
            <span style={{ width: 250 }}>
              <Image src={keyboard} height={250} width={250} alt="logo" />
            </span>
          </div>

          <div style={{ paddingTop: 30, background: "#41D8C2" }}>
            <strong style={{ fontSize: 50, color: "white" }}>4</strong>
            <h3 style={{ color: "white" }}>
              Aller chercher votre lot en magasin
            </h3>
            <span style={{ width: 250 }}>
              <Image src={store} height={250} width={250} alt="logo" />
            </span>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
