import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import logo from "../image/whitelogo.png";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { useRouter } from "next/router";

import arrow from "../image/arrow.gif";



export default function infuseur() {


  return (
    <div className={styles.main2}>
      <Head>
        <title>TeaBingo - Jeux concours</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Header/>
      <section style={{ paddingTop: 125, paddingBottom: 50,height:"100vh" }}>
     <p>Qui sommes nous</p>
      </section>
      <Footer />
    </div>
  );
}
