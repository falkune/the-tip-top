import React, { useEffect, useState ,useContext} from "react";
import Modal from "@mui/material/Modal";
import ApiContext from '../context/apiContext';
import ClipLoader from "react-spinners/ClipLoader";
import { generateTicketApi } from "../fonctions/tickets";
import { refreshToken, notifier } from "../fonctions/utils";

export default function TicketGenerator({ session_id }) {
  const context = useContext(ApiContext)
  const [loading, setLoading] = useState(false);
  const [generate, setGenerate] = useState(false);
  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    console.log(session_id)
  })

  const copyCode = (e) => {
    e.target.value;
    {
      navigator.clipboard.writeText(e.target.value);
    }
    notifier("Copié !","info");
  };

  const generateTicket = async () => {
    //fonction pour créer un ticket
    setLoading(true);
    let ticket = await generateTicketApi(context, session_id);
    if (ticket.statusCode) {
     refreshToken(ticket, context);
     notifier(ticket.message);
     setLoading(false);
    } 

   else {
     setTicket(ticket.ticketNumber);
     setLoading(false);
     setGenerate(true);}  
  };

  const closeTicket = () => {
    //fonction pour créer un ticket
    setGenerate(false);
  };

  const handleClose = () => setGenerate(false);


  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: 1000,
      }}
    >
         <Modal
            open={generate}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">

          <div style={stylez.modalSession} >
          <button
            onClick={handleClose}
            style={{
              position: "absolute",
              right: 10,
              top: 8,
              color: "white",
              border: "none",
              borderRadius: 8,
              padding: 8,
              background: "#318176"}} >
            Fermer
          </button>
          

    {ticket != null && loading === false ? 
        <span
            style={{
              display: "flex",
              justifyContent: "space-around",
              borderRadius: 8,
              margin: 35,
              maxWidth: "100%",
              padding:"10px 10px",
              backgroundColor: " #38870D"}}>
            
              <p style={{ color: "white" }}>{ticket}</p>
                    <button
                      onClick={copyCode}
                      value={ticket}
                      style={{
                        border: "none",
                        padding: 10,
                        color: "white",
                        marginLeft:15,
                        background: "#96D614"}} >
                          Copier
                    </button>
              </span>   
                : 
                <span
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  borderRadius: 8,
                  margin: 35,
                  maxWidth: "100%",
                  padding:"10px 10px",
                  backgroundColor: " #38870D"}}>
                
                  <p style={{ color: "white" }}>Invalide</p>
                     
                  </span>  
                 }
          
   
          </div>   
        </Modal>
      <div
        style={{
          display: "flex",
          background: "white",
          borderRadius:15,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 30,
          padding: 15,
          minWidth:360,
          height: 500,
        }}
      >
      
             { loading === true ? 
            <ClipLoader color={" #38870D"} loading={true} size={70} />
            :   <div
                  style={{
                    width: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    maxWidth: 350,
                    padding: 10,
                    textAlign: "center",
                  }}>
            <div>
              <h2 className="h2" >Générateur de ticket</h2>
              <button onClick={generateTicket} className="action">
                Générer un ticket
              </button>
              <button onClick={closeTicket} className="noaction">
                Quitter
              </button>
            </div>
          </div> }
      </div>
    </div>
  );
}

const stylez = {
  gain: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "90%",
    maxWidth: 360,
    minHeight: "100vh",
  },

  export: {
    margin: 8,
    padding: 8,
    backgroundColor: "white",
    border: "solid 1px  #38870D",
    fontSize: 18,
    minHeight: 45,
    textAlign: "center",
    minWidth: 200,
    color: " #38870D",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
    modalSession: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems:"center",
    padding: 20,
    fontSize: 18,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 350,
    borderRadius: 15,
    backgroundColor: "#84B71E",
    color:'white',
    boxShadow: 24,
}
}