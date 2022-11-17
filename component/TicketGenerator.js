import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Home.module.css";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function TicketGenerator({ session_id }) {
  console.log("id session", session_id);
  const [load, setLoad] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [visible, setVisible] = useState(false);
  const [generate, setGenerate] = useState(false);
  const [ticket, setTicket] = useState(null);

  const copyCode = (e) => {
    e.target.value;
    {
      navigator.clipboard.writeText(e.target.value);
    }
    toast("Copié !");
  };

  const generateTicket = async () => {
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
      idSession: session_id,
    };
    const api = "https://api.dev.dsp-archiwebo21-ct-df-an-cd.fr/ticket";

    try {
      let newTicket = await axios.post(api, body, config);
      console.log("newticket", newTicket.data);
      setTicket(newTicket.data.ticketNumber);
      setLoading(false);
      setGenerate(true);
    } catch (e) {
      console.log(e);
    }
  };

  const closeTicket = () => {
    //fonction pour créer un ticket
    setGenerate(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: 1000,
      }}
    >
      <div
        style={{
          display: "flex",
          background: "white",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 30,
          padding: 15,
          height: 500,
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
          <div>
            <h2 className={styles.h2}>Générateur de ticket</h2>
            <button onClick={generateTicket} className={styles.action}>
              Générer un ticket
            </button>
            <button onClick={closeTicket} className={styles.noaction}>
              Quitter
            </button>
          </div>
        </div>

        {generate === true && loading === false && (
          <span
            style={{
              width: "50%",
              display: "flex",
              justifyContent: "space-around",
              borderRadius: 8,
              margin: 35,
              maxWidth: 350,
              padding: 10,
              backgroundColor: " #02558D",
            }}
          >
            {ticket != null ? (
              <>
                {" "}
                <p style={{ color: "white" }}>Numéro : {ticket}</p>
                <button
                  onClick={copyCode}
                  value={ticket}
                  style={{
                    border: "none",
                    padding: 10,
                    color: "white",
                    background: "#41C2B0",
                  }}
                >
                  Copier
                </button>
                <ToastContainer
                  position="bottom-center"
                  autoClose={1250}
                  hideProgressBar
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss={false}
                  draggable={false}
                  pauseOnHover={false}
                  theme="colored"
                />
              </>
            ) : (
              <p>invalide</p>
            )}
          </span>
        )}
        {loading === true && (
          <div style={{ width: "50%", display: "flex", marginLeft: 70 }}>
            <ClipLoader color={" #02558D"} loading={true} size={70} />
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
