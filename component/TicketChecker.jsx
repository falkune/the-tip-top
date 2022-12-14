import React, { useState, useContext } from "react";
import Modal from "@mui/material/Modal";
import ApiContext from '../context/apiContext';
import ClipLoader from "react-spinners/ClipLoader";
import clipboard from "../image/clipboard.png";
import { checkTicketApi,delivredLot } from "../fonctions/tickets";
import { refreshToken, notifier } from "../fonctions/utils";
import dayjs from "dayjs";

export default function TicketChecker({ session }) {
  const context = useContext(ApiContext)
  const [loading, setLoading] = useState(false);
  const [delivred, setDelivred] = useState(false);
  const [input, setInput] = useState("");
  const [visible, setVisible] = useState(false);
  const [ticket, setTicket] = useState({
    deliverd: null,
    assigned: "",
    create_at: "07-06-2022",
    name:"",
    email:"",
    lot: "",
  });

  const checkTicket = async () => {
    //fonction pour créer un ticket
    setLoading(true);
    console.log('input',input)
    let ticket = await checkTicketApi(context, input.toString());
     if (ticket.statusCode) {
      refreshToken(ticket, context);
      notifier(ticket.message);
    } else {
      setTicket(
        { deliverd:ticket?.isDelivered,
          name:ticket?.fullName,
          email:ticket?.email,
          assigned:ticket?.idClient,
          create_at:ticket?.createdAt,
          lot:ticket?.lot})
      setVisible(true)
      setLoading(false)   
    }
  };
  const handleClose = () => setVisible(false);

  const DelivredLot = async () => {
    let ticket = await delivredLot( context, input)
    if ( ticket.statusCode  ){
     refreshToken(ticket, context);
     notifier(ticket.message);
   } 
   else {
    setDelivred(true);
    notifier("Lot délivré","success");
   }
  };

  const UpdateInput = (e) => {
    setInput(e.target.value);
     
  };
  const Cleaner = () => {
    setInput("");
    setVisible(false);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems:"center",minHeight: 1000 }}>
      <div
        style={{
          display: "flex",
          background: "white",
          alignItems: "center",
          justifyContent: "center",
          width:"100%",
          padding: 15,
          height: 500,
          maxWidth:400,
          marginTop: 25,
          borderRadius:15,
          backgroundColor:'white'
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: 10,
            textAlign: "center",
          }}
        >
          
          {loading === true ?
          <ClipLoader color={" #38870D"} loading={true} size={100} /> :
          <> 
          <img src={clipboard} alt="" />
            <h2 className="h2">Vérification du ticket</h2>
            <input
              onChange={UpdateInput}
              className="inputChecker"
              maxLength={10}
              value={input}
              type="number"
              placeholder="Indiquer votre numéro de ticket"
            />
            {input.length === 10 ? (
              <button onClick={checkTicket} className="action">
                Valider
              </button>
            ) : (
              <button style={{ opacity: 0.7 }} className="noaction">
                Valider
              </button>
            )}
            <button onClick={Cleaner} className="noaction">
              Réinitaliser
            </button>
           </>

        }
     
    
        </div>
        <Modal
        open={visible}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <div 
          style={stylez.modalSession} >
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
              background: "#318176",
            }}
          >
            Fermer
          </button>

            {ticket.lot != null ? <p>Lot : 
              <strong> {ticket.lot}</strong></p>:
              <strong> <p>invalide</p></strong>}

            {ticket.assigned  ? (
              <p>Ticket Assigné</p>
            ) : (
              <p>Ticket non assigné</p>
            )}

            
          {ticket.name && <p>{ticket.name}</p>}
          {ticket.email && <p>{ticket.email}</p>}


            {ticket.deliverd === true ? (
              <p>Lot délivré</p>
            ) : (
              <p> Lot pas encore récupéré</p>
            )}
            {ticket.create_at ? (
              <p>Date de création : <strong>{dayjs(ticket.create_at).format('MMMM D, YYYY')}</strong></p>
            ) : (
              <p>invalide</p>
            )}
            {!delivred ? (
              <button
                style={{
                  width: 180,
                  height: 50,
                  border: "none",
                  fontSize: 16,
                  fontWeight: "bold",
                  marginTop: 10,
                  borderRadius: 5,
                }}
                onClick={DelivredLot}
              >
                Délivrer le cadeau
              </button>
            ) : (
              <p
                style={{ background: "#96D614", padding: 10, borderRadius: 8 }}
              >
                Lot délivré
              </p>
            )}
          </div>
          </Modal>
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
};
