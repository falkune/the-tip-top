import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { useRouter } from "next/router";
import axios from "axios";

export default function Bingo() {
<<<<<<< HEAD
  const router = useRouter();
  const [num, setNum] = useState(
    router.query.number ? router?.query?.number : null
  );
=======
  const [num, setNum] = useState(null);
>>>>>>> 9b2aab2 (update route dashboard)
  const [current, setCurrent] = useState("");

  useEffect(() => {
    getCurrent();
  }, []);

<<<<<<< HEAD
  console.log(num, "num");
  const goResult = () => {
    router.push({
      pathname: `resultat`,
      query: { number: num },
    });
  };

=======
  const router = useRouter();
  console.log(num, "num");
  const goResult = () => {
    if (num.length === 10) {
      router.push({
        pathname: `resultat`,
        query: { number: num },
      });
    } else console.log("perdu");
  };
>>>>>>> 9b2aab2 (update route dashboard)
  const getCurrent = async () => {
    //fonction pour créer un ticket
    const token = localStorage.getItem("token");
    console.log("tokens", token);

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const api =
      "https://api.dev.dsp-archiwebo21-ct-df-an-cd.fr/Session/get-current-session";
    console.log("config", config);

    try {
      let currenSession = await axios.get(api, config);
<<<<<<< HEAD
      console.log("current session", currenSession.data[0]);
      setCurrent(currenSession.data[0]);
      localStorage.setItem("current", currenSession.data[0]);
      // console.log(currenSession.data);
=======
      setCurrent(currenSession.data);
      localStorage.setItem("current", currenSession.data);
      console.log(currenSession.data);
>>>>>>> 9b2aab2 (update route dashboard)
    } catch (e) {
      console.log(e);
    }
  };
<<<<<<< HEAD

  const handleNameChange = (e) => {
    const limit = 10;
    setNum(e.target.value.slice(0, limit));
  };
=======
>>>>>>> 9b2aab2 (update route dashboard)

  return (
    <div className={styles.container}>
      <Head>
        <title>{router.query.num}- TeaBingo - Résultat</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Header />
      <section className={styles.block}>
        <h1 className={styles.h1}>Bingo ticket</h1>
<<<<<<< HEAD

        <p
          style={{
            fontWeight: 600,
            fontSize: "1.2em",
            padding: 15,
            marginBottom: 5,
            color: "#ACACAC",
          }}
        >
          Tester votre ticket pour voir votre lot remporté (100% gagnant )
        </p>
=======
        <p>Tester votre ticket pour voir votre lot remporté (100% gagnant )</p>
        <Link href="/#lots">
          <small style={{ color: "#41D8C2" }}>Voir les differents lots</small>
        </Link>
>>>>>>> 9b2aab2 (update route dashboard)
        <form className={styles.bingo}>
          <input
            type="number"
            name="numero"
<<<<<<< HEAD
            maxLength={2}
            min={0}
            max={99}
            autoComplete="off"
            placeholder="Veuillez rentrer vos 10 numéros"
            onChange={handleNameChange}
            value={num}
          />
=======
            autoComplete="off"
            placeholder="Veuillez rentrer vos 10 numéros"
            maxLength={10}
            onChange={(e) => {
              setNum(e.target.value);
            }}
            value={num}
          />
          {num !== null && num.length < 10 && (
            <small style={{ color: "red", textDecoration: "none" }}>
              Numéro invalide
            </small>
          )}
          {num !== null && num.length === 10 && (
            <small style={{ color: "green", textDecoration: "none" }}>
              Numéro valide
            </small>
          )}
          {num !== null && num.length === 10 ? (
            <button
              type="button"
              onClick={goResult}
              className={styles.action}
              style={{ margin: 25 }}
            >
              Valider
            </button>
          ) : (
            <button
              disabled={true}
              className={styles.noaction}
              style={{ margin: 25 }}
            >
              Valider
            </button>
          )}
>>>>>>> 9b2aab2 (update route dashboard)
        </form>
        {num !== null && num.length < 10 && (
          <small
            style={{ color: "red", textDecoration: "none", marginTop: 20 }}
          >
            Numéro invalide
          </small>
        )}
        {num !== null && num.length === 10 && (
          <small
            style={{
              color: "green",
              textDecoration: "none",
              marginTop: 20,
            }}
          >
            Numéro valide
          </small>
        )}
        {num !== null && num.length === 10 ? (
          <button
            type="button"
            onClick={goResult}
            className={styles.action}
            style={{ margin: 25 }}
          >
            Valider
          </button>
        ) : (
          <button
            disabled={true}
            className={styles.noaction}
            style={{ margin: 25 }}
          >
            Valider
          </button>
        )}

        <Link href="/#lots">
          <small style={{ color: "#41D8C2", fontSize: "1.2em" }}>
            Voir les differents lots
          </small>
        </Link>
      </section>
      <Footer />
    </div>
  );
}
<<<<<<< HEAD
=======

// https://api.dev.dsp-archiwebo21-ct-df-an-cd.fr/
>>>>>>> 9b2aab2 (update route dashboard)
