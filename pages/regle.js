import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Header from '../component/Header'
import Footer from "../component/Footer"
import ticket from "../image/ticket.gif";
import store from "../image/store.gif";
import keyboard from "../image/keyboard.gif";
import login from "../image/login.gif";
import { useRouter } from "next/router";
import Cookies from 'js-cookie'
import Breadcrumbs from 'nextjs-breadcrumbs';


export default function Regle() {
  const router = useRouter();

  const goGame = () => {
    if (!Cookies.get('role')) {
      router.push("/connexion");
    }
    else {
      router.push("/bingo");
    }
  }
  return (
    <div className="container">
      <Head>
        <title>Règle du jeux</title>
        <meta name="regle " content="regle du jeux concours" />
        <meta name="google-site-verification" content="iDBitZ99_g4ELVANaUEpnh57Tum7BZhycjYf21Zxy-M" />rule
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header menu="regle" />
      <section
        className="rule"
        style={{
          color: " #38870D",
          padding: 0,
        }}
      >
        <div style={{ padding: 50, background: " #38870D", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h2
            className="h2"
            style={{
              color: "white",
              marginBottom: 0,
              fontSize: "2.4em",
              marginTop:100,
            }}>
            Comment participer ?
          </h2>
          <Breadcrumbs useDefaultStyle={false}
            containerClassName="breakLight"
            rootLabel="Accueil" />
        </div>

        <p style={{ color: "white" }}>Jouer en 4 étapes</p>
        <div style={{ width: "100%" }}>
          <div
            style={{
              marginBottom: 20,
            }}
          >
            <p><strong style={{ fontSize: 50, color: " #38870D" }}>1</strong></p>
            <h3 style={{ fontSize: "1.8em" }}>
              Récupérer votre code à  10 chiffres  </h3>
            <p style={{ lineHeight: 1.7 }}>
              Rendez-vous dans un magasin TiTop,<br></br>
              après avoir effectué un achat superieur à 90euros<br></br>
              vous obtiendrez automatiquement un numéro gagnant
            </p>
            <span style={{ paddingTop: 50 }}>
              <Image src={ticket} height={250} width={250} alt="logo" />
            </span>




          </div>

          <div
            style={{ paddingTop: 30, marginBottom: 20, background: " #38870D" }}
          >

            <p><strong style={{ fontSize: 50, color: "white" }}>2</strong></p>
            <h3 style={{ color: "white", fontSize: "1.8em" }}>
              Connectez vous sur note plateforme
            </h3>
            <p style={{ color: "white", lineHeight: 1.7 }}>
              Avec votre email et un mot de passe ,<br></br>
              créer votre compte en 15sec <br></br> "18 ans minimum".
            </p>
            <span style={{ width: 50 }}>
              <Image src={login} height={250} width={250} alt="logo" />
            </span>

          </div>

          <div style={{ paddingTop: 30, marginBottom: 20 }}>
            <strong style={{ fontSize: 50, color: " #38870D" }}>3</strong>
            <h3 style={{ fontSize: "1.8em" }}>
              Entrer vos 10 numéro pour voir votre lot gagné</h3>
            <p>
              sur la page de jeux , rentrer votre code à 10 chiffres,<br>
              </br>
              pour voir quel lot vous sera attribué.
              <br></br> Vous ne pourrez que dans la periode du concours
            </p>
            <span style={{ width: 250 }}>
              <Image src={keyboard} height={250} width={250} alt="logo" />
            </span>
          </div>

          <div style={{ paddingTop: 30, background: " #38870D", display: "flex", alignItems: "center", flexDirection: "column" }}>
            <strong style={{ fontSize: 50, color: "white" }}>4</strong>
            <h3 style={{ color: "white", fontSize: "1.8em" }}>
              Aller chercher votre lot en magasin
            </h3>
            <p style={{ color: "white" }}>
              Une fois votre lot affiché, <br>
              </br> rendez-vous dans n'importe quelle magasin <br></br>
              Tiptop pour venir votre lot auprès d'un de nos vendeur.
            </p>
            <div style={{ width: 250, display: "flex", justifyContent: "center" }}>
              <Image src={store} height={250} width={250} alt="logo" />
            </div>

            <button onClick={goGame}
              style={{
                width: 150,
                fontSize: 17,
                fontWeight: "bold",
                height: 150,
                borderRadius: "100%",
                border: "none",
                margin: 50
              }}>
              Commencer
            </button>

          </div>
        </div>
      </section>
      <Footer />

    </div>
  )
}








