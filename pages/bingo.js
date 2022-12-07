import React, { useEffect, useState, useContext } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { useRouter } from "next/router";
import gift from "../image/win.gif"
import 'nextjs-breadcrumbs/dist/index.css'
import Cookies from "js-cookie";
import "animate.css";
import ApiContext from '../context/apiContext';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import "animate.css";


export default function Bingo() {
  const [num, setNum] = useState("");
  const [current, setCurrent] = useState("");
  const router = useRouter();
  const context = useContext(ApiContext)

  useEffect(() => {
    if(!Cookies.get('role')) {
      router.push("/connexion");
    }
    getCurrent();
  }, []);

  const goResult = () => {
    if (num.length === 10) {
      router.push({
        pathname: `resultat`,
        query: { number: num },
      });
    } else  
  };

  const getCurrent = async () => {
    let sessions = context.backend.api.sessions.get('get-current-session', {
      Accept: "Application/json",
      "Content-Type": "application/json",
    })
    sessions.then((response) => {
      if(response.statusCode){
        console.log("vrai", response)
      }else{
        setCurrent(response[0]._id);
      }
    })
  };


  const handleNameChange = (e) => {
    const limit = 10;
    setNum(e.target.value.slice(0, limit));
  };

  if(Cookies.get('role')) {
    return (
      <div className={styles.container}>
        <Head>
          <title>{router === undefined ? null : router.query.num}- TeaBingo - Résultat</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/fav.png" />
        </Head>
        <Header menu="bingo" />
        <section className={styles.block}>
          <h1 className={styles.h1}>Bingo ticket</h1>
        
          <p>Tester votre ticket pour voir votre lot remporté (100% gagnant )</p>
          <form className="bingo animate__animated  animate__backInUp">
            <input 
              type="number"
              name="numero"
              autoComplete="off"
              placeholder="Veuillez rentrer vos 10 numéros"
              maxLength={10}
              onChange={handleNameChange}
              value={num}
            />
          </form>
        
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
               <Link href="/lots">
            <small style={{ color: " #38870D", fontSize: "1.2em" }}>
              Voir les differents lots
            </small>
          </Link>
          <Image src={gift} height={250} width={250} alt="logo" />
        </section>
        <Footer />
      </div>
    );
  }else{
    return(
      <Box sx={{ width: '100%' }}>
        <LinearProgress />
      </Box>
    )
  }
  
}
