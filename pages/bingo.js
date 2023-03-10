/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { useRouter } from "next/router";
import gift from "../image/win.gif"
import Cookies from "js-cookie";
import ApiContext from '../context/apiContext';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import 'nextjs-breadcrumbs/dist/index.css'
import Breadcrumbs from 'nextjs-breadcrumbs';


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

  const goResult = (e) => {
    e.preventDefault();
    if (num.length === 10) {
      router.push({
        pathname: `resultat`,
        query: { number: num },
      });
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
        console.log("mauvaise", response)
        setCurrent(response[0]._id);
        console.log("good", response)
        Cookies.set('currentStart',response[0].startDate)
        Cookies.set('currentEnd',response[0].endDate)
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
          <title>{router === undefined ? null : router.query.num}- Résultat du lot</title>
          <meta name="résult tiptop" content="résultat du jeux concours tiptop" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header menu="bingo" />
      <section style={{paddingTop:100,display:"flex",
      flexDirection:"column",
      minHeight:"100vh",
      width:"100%",
      background:"linear-gradient(83deg, rgba(56,135,13,1) 0%, rgba(56,135,13,1) 50%, rgba(144,203,6,1) 100%, rgba(211,255,0,1) 100%)",
      alignItems:"center"
      }}>
     <div
     className="animate__animated animate__fadeInUp" 
     style={{display:"flex",
     flexDirection:"column",
     alignItems:"center",
     width:"100%",
     maxWidth:500,
     marginTop:50,
     background:"white",
     padding:13,
     borderRadius:20
     }} >
          <h1 className="h1">Bingo ticket</h1>
          <Breadcrumbs useDefaultStyle={false}
          containerClassName="breakLight" 
          rootLabel="Accueil" />

          <p style={{textAlign:"center"}}>Tester votre ticket <br></br>pour voir votre lot remporté (100% gagnant )</p>
          <form  target="#" style={{minWidth:350,display:"flex",flexDirection:"column",alignItems:"center"}}>
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
        
               <Link href="/lots"  passHref>
            <small style={{ color: " #38870D", fontSize: "1.2em" }}>
              Voir les differents lots
            </small>
          </Link>
          <Image src={gift} height={250} width={250} alt="logo" />
          </div>
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
