import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import gift from "../../../image/teahall.jpeg";
import Header from "../../../component/Header";
import Footer from "../../../component/Footer";
import Breadcrumbs from 'nextjs-breadcrumbs';


export default function grandtirage() {


  return (
    <div className="main2">
      <Head>
        <title>Grand tirage au sort jeux concours</title>
        <meta name="jeux grand tirage au sors " content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section
        className="block"
        style={{ borderBottom: "solid 1px white" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            padding: 25,
            paddingTop: 125,
            background: "linear-gradient(48deg, rgba(56,135,13,1) 0%, rgba(56,135,13,1) 28%, rgba(144,203,6,1) 100%, rgba(211,255,0,1) 100%)",

          }} >
          <h1 style={{ color: "white", fontSize: 35 }}>Participez du grand tirage au sort !</h1>
          <Breadcrumbs useDefaultStyle={false} containerClassName="breakLight" rootLabel="Accueil" />
        </div>


        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", padding: 25 }}>
          <div className="bigGift animate__animated animate__bounceInLeft"
            style={{ maxWidth: 300, borderRadius: 15, margin: 25 }}>
            <Image style={{ height: "100%" }} src={gift} alt="active gift" />
          </div>
          <div
            className="animate__animated animate__bounceInRight"
            style={{
              display: "flex",
              maxWidth: 500,
              borderRadius: 15,
              background: " rgb(221, 237, 221)",
              padding: 15,
              flexDirection: "column",
              textAlign: "center"
            }}>
            <h1>Gagné l'équivalant de 1 an de thé !</h1>
            <p style={{ textAlign: "left" }}>Au délà de
              <Link href={"/lots"}>nos nombreux lots</Link>, Le jeu concours aura lieu sur une période de 30 jours durant lesquels 1 500 000 de tickets maximums
              pourront être distribués. Les joueurs auront 30 jours à compter de la date de clôture du jeu pour aller sur le
              site internet et tester le numéro de leur(s) ticket(s) ainsi que réclamer leur lot en magasin ou en ligne.
              À l’issue du jeu-concours, un tirage au sort sera effectué parmi tous les participants afin de déterminer le
              gagnant d’un an<br></br> de thé d’une valeur de 360€.<br></br>
              Attention : Pour le tirage au sort du gros lot, le nombre de participations d’un client n'augmente pas ses
              chances de gagner. Tous les tickets du jeu-concours étant gagnant sur les lots intermédiaires plus un client
              joue plus il gagne.<br></br>
            </p>

            <small style={{ marginTop: 20 }}>Le règlement et les modalités du jeu-concours ont été déposés auprès de Maître Arnaud Rick huissier de
              justice et le tirage au sort du gros lot sera également effectué sous le contrôle de ce dernier.</small>
          </div>
        </div>

      </section>
      <Footer />
    </div>
  );
}
