import React, { useEffect, useRef, useState } from "react";
import Modal from "@mui/material/Modal";
import axios from "axios";
import dayjs from "dayjs";
import { ToastContainer, toast } from "react-toastify";

const Sessions = ({ idSession }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [OneSession, setOneSession] = React.useState({
    name: "",
    start: "",
    end: "",
    limit: 15000,
    id: "",
  });
  const [newSession, setNewsession] = React.useState({
    name: "",
    startDate: "",
    endDate: "",
    description: "ceci est une session",
    limit: "",
  });

  const getSession = async () => {
    //fonction pour créer un ticket
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const api = `https://api.dev.dsp-archiwebo21-ct-df-an-cd.fr/session/${idSession}`;
    try {
      let newsession = await axios.get(api, config);
      setOneSession({
        name: newsession.data.name,
        start: newsession.data.startDate,
        end: newsession.data.endDate,
        description: newsession.data.description,
        limit: newsession.data.limitTicket,
        id: newsession.data._id,
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getSession();
    console.log("take OneSession", OneSession);
  }, [idSession]);

  const CreateSession = async () => {
    //fonction pour créer un ticket
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const body = {
      startDate: newSession.startDate,
      endDate: newSession.endDate,
      name: newSession.name,
      description: "nouvelle session",
      limitTicket: Number(newSession.limit),
    };

    const api = `https://api.dev.dsp-archiwebo21-ct-df-an-cd.fr/session/`;
    console.log("new session", newSession);

    console.log("body", body);

    try {
      let createdSession = await axios.post(api, body, config);
      console.log(createdSession);
    } catch (e) {
      console.log(e);
    }
  };

  const UpdateSession = async () => {
    //fonction pour créer un ticket
    console.log("take session");
    event.preventDefault();
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const body = {
      startDate: OneSession.start,
      endDate: OneSession.end,
      name: OneSession.name,
      description: OneSession.description,
      limitTicket: Number(OneSession.limit),
    };
    const api = `https://api.dev.dsp-archiwebo21-ct-df-an-cd.fr/session/${idSession}`;
    console.log("body", body);
    try {
      let res = await axios.put(api, body, config);
      console.log("res", res);
    } catch (e) {
      console.log(e);
    }
  };

  const DeleteSession = async () => {
    //fonction pour créer un ticket
    console.log("take session");
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const api = `https://api.dev.dsp-archiwebo21-ct-df-an-cd.fr/session/${idSession}`;
    try {
      let res = await axios.delete(api, config);
      console.log("res", res);
    } catch (e) {
      console.log(e);
    }
  };

  const CurrentSession = async () => {
    //fonction pour créer un ticket
    console.log("take session");
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const body = {
      isCurrent: true,
      idSession: idSession,
    };
    const api = `https://api.dev.dsp-archiwebo21-ct-df-an-cd.fr/Session/set-current-session`;
    try {
      let res = await axios.patch(api, body, config);
      console.log("res", res);
      toast("Cette session est active !");
    } catch (e) {
      console.log(e);
    }
  };

  // create session
  const UpdateNewSessionName = (e) => {
    setNewsession({
      ...newSession,
      name: e.target.value,
    });
    console.log(e.target.value);
  };
  const UpdateNewSessionStart = (e) => {
    setNewsession({
      ...newSession,
      startDate: e.target.value,
    });
    console.log(e.target.value);
  };
  const UpdateNewSessionEnd = (e) => {
    setNewsession({
      ...newSession,
      endDate: e.target.value,
    });
    console.log(e.target.value);
  };
  const UpdateLimited = (e) => {
    setNewsession({
      ...newSession,
      limit: e.target.value,
    });
    console.log(e.target.value);
  };

  // Update session
  const UpdateSessionName = (e) => {
    setOneSession({ ...OneSession, name: e.target.value });
    console.log("one", OneSession);
  };

  const UpdateSessionEnd = (e) => {
    setOneSession({ ...OneSession, end: e.target.value });
    console.log("end", OneSession);
  };

  const UpdateSessionStart = (e) => {
    setOneSession({ ...OneSession, start: e.target.value });
    console.log("start", OneSession);
  };
  const UpdateTicketLimited = (e) => {
    setOneSession({ ...OneSession, limit: e.target.value });
    console.log("one", OneSession);
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
          Date limite : fin dans <strong>25 JOURS</strong>
        </p>
        <input
          onChange={UpdateSessionName}
          type="texte"
          style={styles.dateInput}
          value={OneSession.name}
          placeholder="Indiquer un nouveau nom de session"
        />
        <input
          onChange={UpdateTicketLimited}
          type="number"
          style={styles.dateInput}
          value={OneSession.limit}
          placeholder="Indiquer le nombre limité de ticket"
        />
        <input
          onChange={UpdateSessionStart}
          style={styles.dateInput}
          type="date"
          value={OneSession.start}
        />
        <input
          onChange={UpdateSessionEnd}
          style={styles.dateInput}
          type="date"
          value={OneSession.end}
        />
        <button onClick={UpdateSession} style={styles.dateButton}>
          {" "}
          Mettre à jour
        </button>
        <button onClick={DeleteSession} style={styles.dateButton}>
          {" "}
          Supprimer la session
        </button>
        <button onClick={CurrentSession} style={styles.modalCreate}>
          Appliquer comme session active
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
            onChange={UpdateLimited}
            style={styles.modalInput}
            type="number"
            value={newSession.limit}
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
          <button onClick={CreateSession} style={styles.modalCreate}>
            Créer la session
          </button>
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
    margin: 30,
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
    margin: 50,
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
