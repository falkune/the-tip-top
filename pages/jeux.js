import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Count from "../component/Countdown";
import tea1 from "../image/tea1.png";
import ClipLoader from "react-spinners/ClockLoader";
import axios from "axios";
import dayjs from "dayjs";
import "dayjs/locale/fr";
import wheel from "../image/wheel.gif";

export default function Jeux() {
  const [current, setCurrent] = useState("");

  useEffect(() => {
    getCurrent();
  }, []);
  const getCurrent = async () => {
    //fonction pour créer un ticket
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const api =
      "https://api.dev.dsp-archiwebo21-ct-df-an-cd.fr/Session/get-current-session";
    try {
      let currenSession = await axios.get(api, config);
      setCurrent(currenSession.data[0]);
      localStorage.setItem("current", currenSession.data[0]);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>TeaBingo - Jeux concours</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Header />
      <section
        className={styles.block}
        style={{ borderBottom: "solid 1px white" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            padding: 25,
            backgroundColor: "#41D8C2",
          }}
        >
          <ClipLoader color={"white"} loading={true} size={100} />

          <h1 className={styles.h1} style={{ color: "white" }}>
            Grand jeux concour
          </h1>
          <p style={{ fontSize: 20, color: "white" }}>
            Le tirage au sort dans :
          </p>
          {current && <Count current={current} />}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h2
            className={styles.h2}
            style={{
              fontSize: 30,
              padding: 15,
              paddingBottom: 0,
              marginTop: 20,
              marginBottom: 0,
            }}
          >
            Vous avez été sélectionné pour le grand tirage au sort
          </h2>
          <p style={{ fontSize: 22, color: "grey", padding: 20, margin: 0 }}>
            Le{" "}
            <strong style={{ color: "#41D8C2" }}>
              {dayjs(current.endDate).locale("fr").format(" D MMMM YYYY")}
            </strong>{" "}
            un candidat sera sélectionné et bénéficiera de :{" "}
          </p>
          <p
            className={"pulse"}
            style={{ fontSize: 20, color: "#41D8C2", fontWeight: "bold" }}
          >
            1 an de thé d'une valeur de 360 euros
          </p>
          <Image src={wheel} style={{ marginBottom: 50 }} alt="" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
