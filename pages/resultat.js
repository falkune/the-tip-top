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
import confuse from "../image/confuse.gif"
import ApiContext from '../context/apiContext';
import Modal from "@mui/material/Modal";
import Cookies from "js-cookie";



export default function Resultat() {
  const context = useContext(ApiContext)
  const [win, setWin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [invalide,SetInvalide] = useState(false)
  const [lot, setLot] = useState("");

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
    verifyTicket(router?.query?.number).finally( ()=> {
      setLoading(false);
    })
  }

  const handleClose = () =>  {
    setWin(false)
    router.push('/bingo')
  }
  
;

  const verifyTicket = async (n) => {
    try {
      context.backend.auth.tickets.patch('assign-ticket',{idClient:Cookies.get("idClient"),ticketNumber:n.toString()}).then((value) =>
        {console.log(value,"value")
        if ( value.statusCode != 409 )
        {setLot(value.description)
          setWin(true)
        }
        else {SetInvalide(true)} } 
       )
 
    } catch (e) {
       
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
        <link rel="icon" href="/fav.png" />
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
          { lot === "Coffret 69 euros" && <Image src={tea1} /> }
          { lot === "Coffret 39 euros" && <Image src={tea2} /> }
          { lot === "thé signature" && <Image src={tea3} /> }
          { lot === "Infuseur à thé" && <Image src={tea4} /> }
          { lot === "100g thé detox" && <Image src={tea5} /> }
          <p style={{fontWeight:"bold",margin:5}}>{lot}</p>
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
              
              <h2 style={{ color: " #38870D", marginBottom: 0 }}> Ticket déjà utilisé ! </h2>
              <Image src={confuse} />
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
      <Footer />
    </div>
  );
}
