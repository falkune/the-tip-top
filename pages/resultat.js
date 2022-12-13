/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { useRouter } from "next/router";
import LoadingScreen from "../component/LoadingScreen";
import tea1 from "../image/tea1.png";
import tea2 from "../image/tea2.png";
import tea3 from "../image/tea3.png";
import tea4 from "../image/tea4.png";
import tea5 from "../image/tea5.png";
import confuse from "../image/confuse.gif";
import surprise from "../image/surprise.gif";
import { verifTicketApi } from "../fonctions/tickets";
import { refreshToken,isSessionFinished } from "../fonctions/utils";
import ApiContext from '../context/apiContext';
import Modal from "@mui/material/Modal";
import Cookies from "js-cookie";
import CookiesManagement from '../component/cookiesManagement';
import dayjs from "dayjs";
import "dayjs/locale/fr" 
dayjs.locale('fr')

export default function Resultat() {
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)
  const context = useContext(ApiContext)
  const [win, setWin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [invalide,SetInvalide] = useState(false)
  const [isfinish,SetIsFinish] = useState(false)
  const [remind,SetRemind] = useState("")
  const [lot, setLot] = useState("");
  const [error,setError] = useState({
  title:"",
  description:""

  })

  const router = useRouter();
  useEffect(() => {
    if(!Cookies.get('role')) {
      router.push("/connexion");
    }
    if(!router?.query?.number) {
      router.push("/bingo");
    }
    showLot()
  }, []);

  const showLot = () =>{
    VerifyTicket(router?.query?.number).finally( ()=> {
      setLoading(false);
    })
  }

  const handleClose = () =>  {
    setWin(false)
    router.push('/bingo')
  }
  

  

  const VerifyTicket = async (n) => {

    if(n === undefined){
      n ="6176182680"
    }
    
     let ticket = await verifTicketApi( context, n.toString())
     if ( ticket.statusCode  ){
      refreshToken(ticket, context);
      setError({
        title:ticket.error,
        description:ticket.message
      })
      SetInvalide(true)
    } 
    else {
      SetIsFinish(isSessionFinished())
      setLot(ticket.description)
      setWin(true)
      SetRemind(dayjs().to(dayjs(Cookies.get('currentEnd'))))

    }
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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center" }} >

            { loading &&
           <LoadingScreen />  }
          
      </div>
      <Modal
        open={win}
        style={{ border: "none" }}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
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
            textAlign: "center" }} >
              
          <h2 style={{ color: " #38870D", marginBottom: 0 }}> Vous avez gagné ! </h2>
            { isfinish ?
                   <>
                   { lot === "Coffret 69 euros" && <Image src={tea1} alt="Coffret de thé" /> }
                   { lot === "Coffret 39 euros" && <Image src={tea2} alt="Coffret de thé" /> }
                   { lot === "thé signature" && <Image src={tea3} alt="Coffret de thé" /> }
                   { lot === "Infuseur à thé" && <Image src={tea4} alt="Coffret de thé" /> }
                   { lot === "100g thé detox" && <Image src={tea5} alt="Coffret de thé" /> }
                   <p style={{fontWeight:"bold",margin:5}}>{lot}</p>
                   <small style={{ color: "grey" }}>
                     Rendez-vous dans votre <br></br> magasin pour venir le récuperer
                   </small>
                   </> :
                    <>
                    <Image src={surprise} alt="gift"/>
                   <p>Pour voir votre lot <br></br>veuillez patienter{' '}
                   <strong style={{color:"#38870D"}}>
                   {remind}
                    </strong>
                   </p>
                   </>
              
            }
       
         
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
              borderRadius: 5 }}>
            ok
          </button>
        </div>
      </Modal>




      <Modal
        open={invalide}
        style={{ border: "none" }}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
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
            textAlign: "center" }} >
              
              <h2 style={{ color: " #38870D", marginBottom: 0 }}> Oops !</h2>
              <Image src={confuse} alt="confuse character" />
              <small>{error.description}</small>
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
                  borderRadius: 5 }}>
             Réesseyer
              </button>
        </div>
      </Modal>
      <CookiesManagement/>
      <Footer />
    </div>
  );
}
