import React, { useEffect, useRef, useState } from "react";
import Modal from "@mui/material/Modal";
import axios from "axios";
<<<<<<< HEAD
<<<<<<< HEAD
import dayjs from "dayjs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
=======
=======
import dayjs from "dayjs";
import { ToastContainer, toast } from "react-toastify";
>>>>>>> 9b2aab2 (update route dashboard)

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
<<<<<<< HEAD
  const [sess, setSess] = React.useState(session);
>>>>>>> 0760426 (udpate format)
=======
>>>>>>> 9b2aab2 (update route dashboard)
  const [newSession, setNewsession] = React.useState({
    name: "",
    startDate: "",
    endDate: "",
    description: "ceci est une session",
<<<<<<< HEAD
<<<<<<< HEAD
    limit: "",
  });

  const getSession = async () => {
    //fonction pour créer un ticket
=======
    limitTicket: null,
=======
    limit: "",
>>>>>>> 9b2aab2 (update route dashboard)
  });

  const getSession = async () => {
    //fonction pour créer un ticket
<<<<<<< HEAD
    console.log("take session");
>>>>>>> 0760426 (udpate format)
=======
>>>>>>> 9b2aab2 (update route dashboard)
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
<<<<<<< HEAD
<<<<<<< HEAD
    const api = `https://api.dev.dsp-archiwebo21-ct-df-an-cd.fr/session/${idSession}`;
    try {
      let newsession = await axios.get(api, config);
      setOneSession({
        name: newsession.data.name,
        start: newsession.data.startDate,
        end: newsession.data.endDate,
        description: newsession.data.description,
=======
    const api = `https://api.dev.dsp-archiwebo21-ct-df-an-cd.fr/session/${session}`;
    console.log("tokens", token);
=======
    const api = `https://api.dev.dsp-archiwebo21-ct-df-an-cd.fr/session/${idSession}`;
>>>>>>> 9b2aab2 (update route dashboard)
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
<<<<<<< HEAD
      let newsession = await axios.post(api, config);
      setSession({
        name: newsession.data.name,
        start: newsession.data.startDate,
        end: newsession.data.endDate,
>>>>>>> 0760426 (udpate format)
        limit: newsession.data.limitTicket,
        id: newsession.data._id,
      });
=======
      let res = await axios.delete(api, config);
      console.log("res", res);
>>>>>>> 9b2aab2 (update route dashboard)
    } catch (e) {
      console.log(e);
    }
  };

<<<<<<< HEAD
<<<<<<< HEAD
  useEffect(() => {
    getSession();
    console.log("take OneSession", OneSession);
  }, [idSession]);

  const CreateSession = async () => {
    //fonction pour créer un ticket
    event.preventDefault();
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
      await axios.post(api, body, config);
      toast("Session crée!");
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
    try {
      await axios.put(api, body, config);
      toast("Modification prise en compte ! ");
    } catch (e) {
      console.log(e);
    }
  };

  const DeleteSession = async () => {
    //fonction pour créer un ticket
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const api = `https://api.dev.dsp-archiwebo21-ct-df-an-cd.fr/session/${idSession}`;
    try {
      await axios.delete(api, config);
      toast("Session supprimé ! ");
    } catch (e) {
      console.log(e);
    }
  };

  const CurrentSession = async () => {
    //fonction pour créer un ticket
=======
  const CurrentSession = async () => {
    //fonction pour créer un ticket
    console.log("take session");
>>>>>>> 9b2aab2 (update route dashboard)
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
<<<<<<< HEAD
=======
      console.log("res", res);
>>>>>>> 9b2aab2 (update route dashboard)
      toast("Cette session est active !");
    } catch (e) {
      console.log(e);
    }
  };
<<<<<<< HEAD

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
  };

  const UpdateSessionEnd = (e) => {
    setOneSession({ ...OneSession, end: e.target.value });
  };

  const UpdateSessionStart = (e) => {
    setOneSession({ ...OneSession, start: e.target.value });
  };
  const UpdateTicketLimited = (e) => {
    setOneSession({ ...OneSession, limit: e.target.value });
=======
  // session update
=======
>>>>>>> 9b2aab2 (update route dashboard)

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
<<<<<<< HEAD
    setSession({ start: e.target.value });
    console.log(e.target.value);
>>>>>>> 0760426 (udpate format)
=======
    setOneSession({ ...OneSession, start: e.target.value });
    console.log("start", OneSession);
  };
  const UpdateTicketLimited = (e) => {
    setOneSession({ ...OneSession, limit: e.target.value });
    console.log("one", OneSession);
>>>>>>> 9b2aab2 (update route dashboard)
  };

  return (
    <div style={styles.email}>
      <button style={styles.createButton} onClick={handleOpen}>
        Créer une nouvelle session
      </button>

      <form style={styles.formSession}>
<<<<<<< HEAD
        <p style={{ color: "#ABFFF3", textAlign: "center", margin: 5 }}>
          Etat : <strong style={{ color: "white" }}> En cours </strong>
        </p>
        <p style={{ color: "#ABFFF3", textAlign: "center", margin: 8 }}>
          Date limite : fin dans{" "}
          <strong style={{ color: "white" }}> 25 JOURS</strong>
=======
        <p style={{ color: "#41D8C2", textAlign: "center", margin: 5 }}>
          Etat : <strong> En cours </strong>
        </p>
        <p style={{ color: "#41D8C2", textAlign: "center", margin: 8 }}>
<<<<<<< HEAD
          Date limite : fin dans <strong>25 jours</strong>
>>>>>>> 0760426 (udpate format)
=======
          Date limite : fin dans <strong>25 JOURS</strong>
>>>>>>> 9b2aab2 (update route dashboard)
        </p>
        <input
          onChange={UpdateSessionName}
          type="texte"
          style={styles.dateInput}
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
          value={Session.name}
=======
          value={OneSession.name}
>>>>>>> 9b2aab2 (update route dashboard)
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
<<<<<<< HEAD
          value={Session.endDate}
>>>>>>> 0760426 (udpate format)
=======
          value={OneSession.start}
>>>>>>> 9b2aab2 (update route dashboard)
        />
        <input
          onChange={UpdateSessionEnd}
          style={styles.dateInput}
          type="date"
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 9b2aab2 (update route dashboard)
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
<<<<<<< HEAD
        <button onClick={CurrentSession} style={styles.dateButton}>
=======
        <button onClick={CurrentSession} style={styles.modalCreate}>
>>>>>>> 9b2aab2 (update route dashboard)
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
<<<<<<< HEAD
        />
=======
          value={new Date(Session.startDate)}
        />
        <button style={styles.dateButton}> Mettre à jour</button>
>>>>>>> 0760426 (udpate format)
=======
        />
>>>>>>> 9b2aab2 (update route dashboard)
      </form>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form style={styles.modalSession}>
<<<<<<< HEAD
          <p
            style={{
              textAlign: "center",
              color: "white",
              fontSize: "1.6em",
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            Nouvelle session
          </p>
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
=======
          <p style={{ textAlign: "center" }}>Nouvelle session</p>
          <button
            onClick={handleClose}
            style={{ position: "absolute", right: 10, top: 8 }}
          >
            fermer
>>>>>>> 0760426 (udpate format)
          </button>
          <input
            onChange={UpdateNewSessionName}
            style={styles.modalInput}
            type="texte"
            value={newSession.name}
            placeholder="Indiquer un nom de session"
          />
          <input
<<<<<<< HEAD
<<<<<<< HEAD
            onChange={UpdateLimited}
            style={styles.modalInput}
            type="number"
            value={newSession.limit}
            placeholder="Indiquer le nombre de ticket maximum"
          />
          <small
            style={{
              color: "#ABFFF3",
              fontSize: 12,
              padding: "8px 0px 8px 8px",
            }}
          >
            Indiquer une date de début
          </small>
=======
            onChange={UpdateTicketLimited}
=======
            onChange={UpdateLimited}
>>>>>>> 9b2aab2 (update route dashboard)
            style={styles.modalInput}
            type="number"
            value={newSession.limit}
            placeholder="Indiquer le nombre de ticket maximum"
          />
>>>>>>> 0760426 (udpate format)
          <input
            onChange={UpdateNewSessionStart}
            style={styles.modalDate}
            type="date"
            value={newSession.startDate}
          />
<<<<<<< HEAD
          <small
            style={{
              color: "#ABFFF3",
              fontSize: 12,
              padding: "8px 0px 8px 8px",
            }}
          >
            Indiquer une date de fin
          </small>
=======
>>>>>>> 0760426 (udpate format)
          <input
            onChange={UpdateNewSessionEnd}
            style={styles.modalDate}
            type="date"
            value={newSession.endDate}
          />
<<<<<<< HEAD
<<<<<<< HEAD
          <button onClick={CreateSession} style={styles.modalCreate}>
            Créer la session
          </button>
=======
          <button style={styles.modalCreate}>Créer la session</button>
>>>>>>> 0760426 (udpate format)
=======
          <button onClick={CreateSession} style={styles.modalCreate}>
            Créer la session
          </button>
>>>>>>> 9b2aab2 (update route dashboard)
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
<<<<<<< HEAD
    marginTop: 10,
    padding: 50,
=======
    margin: 10,
    paddingTop: 25,
>>>>>>> 0760426 (udpate format)
  },

  elem: {
    margin: 0,
    marginBottom: 3,
  },
<<<<<<< HEAD
=======
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
>>>>>>> 0760426 (udpate format)
  formSession: {
    display: "flex",
    flexDirection: "column",
    width: 350,
    padding: 15,
    fontSize: 18,
<<<<<<< HEAD
    backgroundColor: "#3AAB9B",
    borderRadius: 8,
    margin: 10,
  },
  dateInput: {
    padding: 10,
    paddingLeft: 15,
    height: 50,
    color: "#3AAB9B",
    backgroundColor: "white",
    border: "none",
    margin: 10,
    fontSize: 18,
    borderRadius: 5,
    fontWeight: "bold",

    outline: "none",
  },
  dateButton: {
    padding: 10,
    height: 50,
    color: "white",
    backgroundColor: "#41D8C2",
    border: "none",
    fontSize: 16,
    margin: 5,
    borderRadius: 5,
    fontWeight: "bold",
  },
  createButton: {
    padding: 10,
    color: "white",
    backgroundColor: "#41D8C2",
    border: "solid 3px white",
    margin: 30,
    fontSize: 18,
    fontWeight: "bold",
    minHeight: 50,
    borderRadius: 5,
=======
    backgroundColor: "white",
    borderRadius: 8,
<<<<<<< HEAD
>>>>>>> 0760426 (udpate format)
=======
    margin: 50,
>>>>>>> 9b2aab2 (update route dashboard)
  },
  modalSession: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
<<<<<<< HEAD
    padding: 20,
    fontSize: 18,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 350,
    borderRadius: 15,
    backgroundColor: "#3AAB9B",
    boxShadow: 24,
  },
  modalDate: {
    fontSize: 16,
    borderRadius: 3,
    height: 60,
    padding: 15,
    color: "white",
    background: "#318176",
    border: "none",
=======
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
>>>>>>> 0760426 (udpate format)
    margin: 5,
    outline: "none",
  },

  modalCreate: {
    fontSize: 18,
<<<<<<< HEAD
    borderRadius: 5,
    height: 50,
    padding: 8,
    color: "white",
    background: "#41D8C2",
    border: "none",
    margin: 5,
    marginTop: 15,
    fontWeight: "bold",
  },
  modalInput: {
    borderRadius: 5,
    fontSize: 16,
    height: 60,
    paddingLeft: 15,
    backgroundColor: "white",
    border: "none",
    margin: 5,
    outline: "none",
    color: "#318176",
    fontWeight: "bold",
=======

    borderRadius: 3,
    padding: 8,
    color: "#41D8C2",
    background: "none",
    border: "solid 1px #41D8C2",
    margin: 5,
>>>>>>> 0760426 (udpate format)
  },
};
