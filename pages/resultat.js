import React, { useEffect, useState, Component } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { useRouter } from "next/router";
import Lot from "../component/Lot";
import LoadingScreen from "../component/LoadingScreen";
import tea1 from "../image/tea1.png";
import tea2 from "../image/tea2.png";
import tea3 from "../image/tea3.png";
import tea4 from "../image/tea4.png";
import Link from "next/link";
import axios from "axios";
import WheelComponent from "react-wheel-of-prizes";

export default function Resultat() {
  const [win, setWinner] = useState("");
  const [result, setResult] = useState(false);
  const router = useRouter();
  useEffect(() => {
    verifyTicket(router?.query?.number);

    // setTimeout(() => verifyTicket(router?.query?.number), 5000);
  }, []);

  const verifyTicket = async (n) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const api =
      "https://api.dev.dsp-archiwebo21-ct-df-an-cd.fr/ticket/verify-ticket";

    const body = {
      ticketNumber: n,
    };
    console.log("token", token);
    console.log("body", body);

    try {
      let result = await axios.post(api, body, config);
      setWinner(result.data.lot);
      setResult(true);
    } catch (e) {
      console.log(e);
    }
  };

  const segments = [
    "Coffret 69 euros",
    "100g thé signature",
    "100g thé detox",
    "Infuseur à thé",
    "Coffrets 39 euros",
  ];
  const segColors = [
    "#EE4040",
    "#F0CF50",
    "#815CD1",
    "#3DA5E0",
    "#34A24F",
    "#F9AA1F",
    "#EC3F3F",
    "#FF9000",
  ];

  const onFinished = (winner) => {
    console.log("hourra", winner);
  };

  return (
    <>
      <React.Fragment>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#41D8C2",
            alignItems: "center",
          }}
        >
          <Head>
            <title>TeaBingo - Jeux concours</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/fav.png" />
          </Head>
          <Header />
          <h2>Voici le résultat</h2>
          {result == true && (
            <WheelComponent
              segments={segments}
              segColors={segColors}
              winningSegment={win}
              onFinished={(winner) => onFinished(winner)}
              primaryColor="#41D8C2"
              contrastColor="white"
              buttonText="Cliquer ici "
              isOnlyOnce={false}
              size={250}
              upDuration={1000}
              downDuration={2000}
              fontFamily="Arial"
            />
          )}
          <Footer />
        </div>
      </React.Fragment>
    </>
  );
}
