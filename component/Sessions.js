import React, { useEffect, useRef, useState } from "react";
import Modal from "@mui/material/Modal";
import axios from "axios";

const Sessions = ({ session }) => {
  console.log("ok", session);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [Session, setSession] = React.useState({
    name: "",
    start: "",
    end: "",
    limit: "",
    id: "",
  });
  const [sess, setSess] = React.useState(session);
  const [newSession, setNewsession] = React.useState({
    name: "",
    startDate: "",
    endDate: "",
    description: "ceci est une session",
    limitTicket: null,
  });

  useEffect(() => {
    getSession();

    console.log("new format session", Session);
  }, [sess]);

  const getSession = async () => {
    //fonction pour créer un ticket
    console.log("take session");
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const api = `https://api.dev.dsp-archiwebo21-ct-df-an-cd.fr/session/${session}`;
    console.log("tokens", token);
    try {
      let newsession = await axios.get(api, config);
      setSession({
        name: newsession.data.name,
        start: newsession.data.startDate,
        end: newsession.data.endDate,
        limit: newsession.data.limitTicket,
        id: newsession.data._id,
      });
    } catch (e) {
      console.log(e);
    }
  };
  const CreateSession = async () => {
    //fonction pour créer un ticket
    console.log("take session");
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const api = `https://api.dev.dsp-archiwebo21-ct-df-an-cd.fr/session/${session}`;
    console.log("tokens", token);
    try {
      let newsession = await axios.post(api, config);
      setSession({
        name: newsession.data.name,
        start: newsession.data.startDate,
        end: newsession.data.endDate,
        limit: newsession.data.limitTicket,
        id: newsession.data._id,
      });
    } catch (e) {
      console.log(e);
    }
  };

  // session update

  const UpdateNewSessionName = (e) => {
    setNewsession({ name: e.target.value });
    console.log(e.target.value);
  };

  const UpdateTicketLimited = (e) => {
    setNewsession({ limitTicket: e.target.value });
    console.log(e.target.value);
  };

  const UpdateNewSessionStart = (e) => {
    setNewsession({ startDate: e.target.value });
    console.log(e.target.value);
  };
  const UpdateNewSessionEnd = (e) => {
    setNewsession({ endDate: e.target.value });
    console.log(e.target.value);
  };

  // new session
  const UpdateSessionName = (e) => {
    setSession({ name: e.target.value });
    console.log(e.target.value);
  };

  const UpdateSessionEnd = (e) => {
    setSession({ end: e.target.value });
    console.log(e.target.value);
  };

  const UpdateSessionStart = (e) => {
    setSession({ start: e.target.value });
    console.log(e.target.value);
  };

  return (
    <div style={styles.email}>
      <button style={styles.createButton} onClick={handleOpen}>
        Créer une nouvelle session
      </button>

      <form style={styles.formSession}>
        <p style={{ color: "#41D8C2", textAlign: "center", margin: 5 }}>
          Etat : <strong> En cours </strong>
        </p>
        <p style={{ color: "#41D8C2", textAlign: "center", margin: 8 }}>
          Date limite : fin dans <strong>25 jours</strong>
        </p>
        <input
          onChange={UpdateSessionName}
          type="texte"
          style={styles.dateInput}
          value={Session.name}
          placeholder="Indiquer un nouveau nom de session"
        />
        <input
          onChange={UpdateSessionStart}
          style={styles.dateInput}
          type="date"
          value={Session.endDate}
        />
        <input
          onChange={UpdateSessionEnd}
          style={styles.dateInput}
          type="date"
          value={new Date(Session.startDate)}
        />
        <button style={styles.dateButton}> Mettre à jour</button>
      </form>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form style={styles.modalSession}>
          <p style={{ textAlign: "center" }}>Nouvelle session</p>
          <button
            onClick={handleClose}
            style={{ position: "absolute", right: 10, top: 8 }}
          >
            fermer
          </button>
          <input
            onChange={UpdateNewSessionName}
            style={styles.modalInput}
            type="texte"
            value={newSession.name}
            placeholder="Indiquer un nom de session"
          />
          <input
            onChange={UpdateTicketLimited}
            style={styles.modalInput}
            type="number"
            value={newSession.limitTicket}
            placeholder="Indiquer le nombre de ticket maximum"
          />
          <input
            onChange={UpdateNewSessionStart}
            style={styles.modalDate}
            type="date"
            value={newSession.startDate}
          />
          <input
            onChange={UpdateNewSessionEnd}
            style={styles.modalDate}
            type="date"
            value={newSession.endDate}
          />
          <button style={styles.modalCreate}>Créer la session</button>
        </form>
      </Modal>
    </div>
  );
};

export default Sessions;

const styles = {
  email: {
    width: "100%",
    minHeight: 500,
    backgroundColor: "#41D8C2",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "white",
    margin: 10,
    paddingTop: 25,
  },

  elem: {
    margin: 0,
    marginBottom: 3,
  },
  dateInput: {
    padding: 8,
    color: "#41D8C2",
    background: "none",
    border: "solid 1px #41D8C2",
    margin: 5,
    fontSize: 18,

    borderRadius: 3,
  },
  dateButton: {
    padding: 8,
    color: "white",
    backgroundColor: "#41D8C2",
    border: "solid 1px white",
    fontSize: 18,

    margin: 5,
  },
  dateInput: {
    padding: 8,
    color: "#41D8C2",
    background: "none",
    border: "solid 1px #41D8C2",
    margin: 5,
    fontSize: 18,

    outline: "none",
  },
  createButton: {
    padding: 10,
    color: "white",
    backgroundColor: "#41D8C2",
    border: "solid 1px white",
    margin: 10,
    fontSize: 18,

    borderRadius: 5,
  },
  formSession: {
    display: "flex",
    flexDirection: "column",
    width: 350,
    padding: 15,
    fontSize: 18,
    backgroundColor: "white",
    borderRadius: 8,
  },
  modalSession: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    padding: 15,
    fontSize: 18,
    top: "50%",
    left: "57.3%",
    transform: "translate(-50%, -50%)",
    width: 350,
    borderRadius: 8,
    backgroundColor: "white",
    boxShadow: 24,
  },

  modalInput: {
    borderRadius: 3,
    fontSize: 18,

    padding: 8,
    color: "#41D8C2",
    background: "none",
    border: "solid 1px #41D8C2",
    margin: 5,
    outline: "none",
  },
  modalDate: {
    fontSize: 18,

    borderRadius: 3,
    padding: 8,
    color: "#41D8C2",
    background: "none",
    border: "solid 1px #41D8C2",
    margin: 5,
    outline: "none",
  },

  modalCreate: {
    fontSize: 18,

    borderRadius: 3,
    padding: 8,
    color: "#41D8C2",
    background: "none",
    border: "solid 1px #41D8C2",
    margin: 5,
  },
};
