import React, { useEffect, useState, useContext } from "react";
import Modal from "@mui/material/Modal";
import Image from "next/image";
import { verifyLot } from "../fonctions/tickets";
import ApiContext from '../context/apiContext';
import { isSessionFinished } from "../fonctions/utils";
import tea1 from "../image/tea1.png";
import tea2 from "../image/tea2.png";
import tea3 from "../image/tea3.png";
import tea4 from "../image/tea4.png";
import tea5 from "../image/tea5.png";




const ButtonGrid = (props) => {
  const context = useContext(ApiContext)
  const [lot,setLot] = useState(false);
  const [open,setOpen] = useState(false);
  const [isFinished, setIsFinished] = useState(isSessionFinished())


const VerifyTicket = async (n) => {
  let ticket = await verifyLot( context, n.toString())
  if (ticket.statusCode) {
   refreshToken(ticket, context);
   notifier(ticket.message);
 } else {
   console.log(ticket.lot,"t") 
   setLot(ticket.lot)
 }
};

  const buttonClicked = () => {
        VerifyTicket(props.data.ticketNumber)
        console.log(props.data.ticketNumber)
        setOpen(true)
    };

    const handleClose = () =>  {
      setOpen(false)
    }
    
  return (
  
     <span>
     { isFinished ? <>
   
          {<button style={styles.button} onClick={() => buttonClicked()}>Voir le lot </button>} 
          <Modal
        open={open}
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
              
          <h2 style={{ color: " #38870D", marginBottom: 0 }}> {lot} </h2>
          { lot === "Coffret 69 euros" && <Image src={tea1} /> }
          { lot === "Coffret 39 euros" && <Image src={tea2} /> }
          { lot === "thé signature" && <Image src={tea3} /> }
          { lot === "Infuseur à thé" && <Image src={tea4} /> }
          { lot === "100g thé detox" && <Image src={tea5} /> }
       { props.data.isDelivred ? <p style={{fontWeight:"bold",marginTop:15}}> Vous pouvez aller <br>
          </br>le chercher en magasin</p> :<p>Lot délivré</p> }
         
  
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
       Super
          </button>
        </div>
      </Modal>
      </> : <p style={{margin:0}}>Bientot disponible</p>
      }
    </span>
  );
};

export default ButtonGrid;

const styles = {
  stat: {
    backgroundColor: "#F1F1F1",
        padding: 25,
    },
    button: {
        backgroundColor: " #38870D",
        border: "none",
        color: "white",
        padding: 8,
        borderRadius:5
    }
};
