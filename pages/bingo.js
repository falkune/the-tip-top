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
import { verifTicketApi } from "../fonctions/tickets";
import ApiContext from '../context/apiContext';
import Modal from "@mui/material/Modal";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import "animate.css";
import { notifier ,refreshToken} from "../fonctions/utils";

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
    console.log("goresult")
    if (num.length === 10) {
      router.push({
        pathname: `resultat`,
        query: { number: num },
      });
    }
  };

  const VerifyTicket = async (n) => {
    e.preventd
    let ticket = await verifTicketApi( context, n.toString())
    if (ticket.statusCode) {
     refreshToken(ticket, context);
     notifier(ticket.message);
     console.log(ticket.message,"message error")
   } else {
     console.log(ticket,"t") 
   }
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
      <div className="container">
        <Head>
          <title>{router === undefined ? null : router.query.num}- TeaBingo - Résultat</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/fav.png" />
        </Head>
        <Header menu="bingo" />
      <section style={{paddingTop:125,display:"flex",flexDirection:"column",minHeight:"100vh",alignItems:"center"}}>

          <h1 className={styles.h1}>Bingo ticket</h1>
        
          <p>Tester votre ticket pour voir votre lot remporté (100% gagnant )</p>
          <form  style={{minWidth:350,display:"flex",flexDirection:"column",alignItems:"center"}}>
            <div className="bingo">
            <input 
              type="number"
              name="numero"
              autoComplete="off"
              placeholder="Veuillez rentrer vos 10 numéros"
              maxLength={10}
              onChange={handleNameChange}
              value={num}
            />
            </div>

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
              type="submit"
              // onClick={() =>VerifyTicket(num)}
              onClick={goResult}
              className="action"
              style={{ margin: 25 }}
            >
              Valider
            </button>
          ) : (
            <button
              disabled={true}
              className="noaction"
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
