import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Home.module.css";
import ClipLoader from "react-spinners/ClipLoader";
import clipboard from "../image/clipboard.png";
import axios from "axios";
import dayjs from "dayjs";

export default function TicketChecker({ session }) {
  const [load, setLoad] = useState(false);
  const [loading, setLoading] = useState(false);
  const [delivred, setDelivred] = useState(false);

  const [input, setInput] = useState("");
  const [visible, setVisible] = useState(false);
  const [ticket, setTicket] = useState({
    deliverd: null,
    assigned: "",
    create_at: "07-06-2022",
    lot: "",
  });

  const checkTicket = async () => {
    //fonction pour créer un ticket
    const token = localStorage.getItem("token");
    setLoading(true);
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const body = {
      ticketNumber: input,
    };

    const api =
      "https://api.dev.dsp-archiwebo21-ct-df-an-cd.fr/ticket/check-ticket";
    try {
      let nTicket = await axios.post(api, body, config);
      console.log("newticket", nTicket.data);
      setTicket({
        assigned: nTicket?.data?.idClient,
        create_at: dayjs(nTicket.data.createdAt).format("YYYY-MM-DD"),
        lot: nTicket.data.lot,
      });
      setLoading(false);
      setVisible(true);
    } catch (e) {
      console.log(e);
    }
  };

  const DelivredLot = async () => {
    //fonction pour créer un ticket
    const token = localStorage.getItem("token");
    setLoading(true);
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const body = {
      ticketNumber: input,
    };

    const api =
      "https://api.dev.dsp-archiwebo21-ct-df-an-cd.fr/ticket/check-ticket";

    // try {
    //   let nTicket = await axios.post(api, body, config);
    //   console.log("newticket", nTicket.data);
    //   setTicket({
    //     assigned: nTicket?.data?.idClient,
    //     create_at: dayjs(nTicket.data.createdAt).format("YYYY-MM-DD"),
    //     lot: nTicket.data.lot,
    //   });
    //   setLoading(false);
    //   setVisible(true);
    // } catch (e) {
    //   console.log(e);
    // }
    setDelivred(true);
  };

  const UpdateInput = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };
  const Cleaner = () => {
    setInput("");
    setVisible(false);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: 1000 }}>
      <div
        style={{
          display: "flex",
          background: "white",
          alignItems: "center",
          justifyContent: "center",
          padding: 15,
          height: 500,
          marginTop: 25,
        }}
      >
        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            maxWidth: 350,
            padding: 10,
            textAlign: "center",
          }}
        >
          <img src={clipboard} alt="" />
          <h2 className={styles.h2}>Vérification du ticket</h2>
          <input
            onChange={UpdateInput}
            className={styles.input}
            maxLength={10}
            value={input}
            type="number"
            placeholder="Indiquer votre numéro de ticket"
          />
          {input.length === 10 ? (
            <button onClick={checkTicket} className={styles.action}>
              Valider
            </button>
          ) : (
            <button style={{ opacity: 0.7 }} className={styles.noaction}>
              Valider
            </button>
          )}
          <button onClick={Cleaner} className={styles.noaction}>
            Réinitaliser
          </button>
        </div>
        {visible === true && load === false && (
          <div
            style={{
              width: "45%",
              display: "flex",
              backgroundColor: " #02558D",
              justifyContent: "center",
              alignItems: "start",
              color: "white",
              height: "80%",
              flexDirection: "column",
              borderRadius: 8,
              maxWidth: 350,
              padding: 10,
              paddingLeft: 50,
              fontSize: 18,
              textAlign: "center",
            }}
          >
            {ticket.lot != null ? <p>Lot : {ticket.lot}</p> : <p>invalide</p>}

            {ticket.assigned != null ? (
              <p>Assigné :{ticket.assigned}</p>
            ) : (
              <p>Ticket non assigné</p>
            )}
            {ticket.deliverd === true ? (
              <p>Lot délivré</p>
            ) : (
              <p> Lot pas encore récupéré</p>
            )}
            {ticket.create_at != null ? (
              <p>Date de création : {ticket.create_at}</p>
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
                style={{ background: "#3AAB9B", padding: 10, borderRadius: 8 }}
              >
                Lot délivré
              </p>
            )}
          </div>
        )}
        {load === true && (
          <div
            style={{
              width: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              maxWidth: 350,
              padding: 10,
              textAlign: "center",
            }}
          >
            <ClipLoader color={" #02558D"} loading={true} size={100} />
          </div>
        )}
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
    border: "solid 1px  #02558D",
    fontSize: 18,
    minHeight: 45,
    textAlign: "center",
    minWidth: 200,
    color: " #02558D",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
};
