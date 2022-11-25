import React, { useEffect, useState, Component } from "react";
import Head from "next/head";
import Image from "next/image";
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
import Modal from "@mui/material/Modal";

export default function Resultat() {
  const [PrizeNumber, setPrizeNumber] = useState("");
  const [win, setWin] = useState(false);
  const [lot, setLot] = useState("");

  const router = useRouter();
  useEffect(() => {
    verifyTicket(router?.query?.number);
  }, []);
  const handleClose = () => setWin(false);
  const verifyTicket = async (n) => {
    const token = localStorage.getItem("token");
    console.log("n", n);
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const api =
      "https://api.dev.dsp-archiwebo21-ct-df-an-cd.fr/ticket/verify-ticket";

    const body = {
      ticketNumber: n,
    };
    try {
      let result = await axios.post(api, body, config);
      setPrizeNumber(result.data.lot);
      console.log("Le lot", result.data.lot);
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
    console.log("winner", winner);
    setLot(winner);
    setWin(true);
  };

  return (
    <div
      style={{
        backgroundColor: " #38870D",
        width: "100%",
        paddingTop: 100,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Head>
        <title>TeaBingo - Jeux concours</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Header />
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <>
          <WheelComponent
            segments={segments}
            segColors={segColors}
            winningSegment={PrizeNumber}
            onFinished={(winner) => onFinished(winner)}
            primaryColor="black"
            contrastColor="white"
            buttonText="Cliquer"
            isOnlyOnce={true}
            size={300}
            upDuration={1000}
            downDuration={100}
            fontFamily="Arial"
          />
        </>
      </div>
      <Modal
        open={win}
        style={{ border: "none" }}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 15,
            fontSize: 18,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 350,
            border: "none",
            borderRadius: 8,
            backgroundColor: "white",
            boxShadow: 24,
            textAlign: "center",
          }}
        >
          <h2 style={{ color: " #38870D", marginBottom: 0 }}>Vous avez gagné</h2>
          <p>{lot}</p>
          <Image src={tea1} />
          <small style={{ color: "grey" }}>
            Rendez-vous dans votre <br></br> magasin pour venir le récuperer
          </small>
          <button
            onClick={handleClose}
            style={{
              width: 180,
              height: 40,
              background: " #38870D",
              color: "white",
              border: "none",
              margin: 15,
              fontSize: 18,
              borderRadius: 5,
            }}
          >
            ok
          </button>
        </div>
      </Modal>
      <Footer />
    </div>
  );
}
