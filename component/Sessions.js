import React, { useEffect, useContext } from "react";
import Modal from "@mui/material/Modal";
import ApiContext from '../context/apiContext';
import Count from "../component/Countdown";

import { refreshToken ,notifier } from "../fonctions/utils";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createSession ,updateSession , deleteSession,currentSession} from "../fonctions/sessions";

const Sessions = ({ idSession }) => {
  const context = useContext(ApiContext)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [OneSession, setOneSession] = React.useState({
    id:"",
    name: "",
    start: "",
    end: "",
    limit: 15000,
    id: "",
    isCurrent:""
  });
  const [DefaultSession, setDefaultSession] = React.useState({
    name: "",
    start: "",
    end: "",
    limit: 15000,
    id: "",
    isCurrent:""
  });
  const [newSession, setNewsession] = React.useState({
    name: "",
    startDate: "",
    endDate: "",
    description: "ceci est une session",
    limit: "",
  });

  const [endGame,setEndGame] = React.useState()

  useEffect(() => {
    getSession();
    console.log(OneSession,"inesession")
    console.log(DefaultSession,"default")
    console.log("default", OneSession == DefaultSession)


  }, [idSession]);

  const getSession = async () => {
    console.log("session test")
    //fonction pour créer un ticket
    try {
      context.backend.auth.sessions.get(idSession).then((value) => {

        console.log('value',value);
         
        setOneSession({
          name: value.name,
          start: new Date(value.startDate).toLocaleDateString('en-CA'),
          end: new Date(value.endDate).toLocaleDateString('en-CA'),
          description: value.description,
          limit: value.limitTicket,
          id: value._id,
          isCurrent:value?.isCurrent
        });


        setEndGame(value);

        setDefaultSession({
          name: value.name,
          start: value.startDate,
          end: new Date(value.endDate),
          description: value.description,
          limit: value.limitTicket,
          id: value._id,
          isCurrent:value?.isCurrent
        });
      }
      )
    } catch (e) {
       
    }
  };



  const CreateSession = async (e) => {
    //fonction pour créer un ticket
    const body = {
      idSession: idSession,
      startDate: newSession.startDate,
      endDate: newSession.endDate,
      name: newSession.name,
      description: "nouvelle session",
      limitTicket: Number(newSession.limit),
    };

    let session = await createSession(context, body);

    if (session.statusCode) {
      refreshToken(session, context);

      if (Array.isArray(session.message)) {
        session.message.forEach(element => {
          notifier(element, "error", "top-right", 5000);
        });
      } else {
        console.error(session);
        notifier(session.message);
        toast("session crée")
      }
    }

  };

  const UpdateSession = async (e) => {
    //fonction pour créer un ticket
     
    e.preventDefault();
    const body = {
      startDate: OneSession.start,
      endDate: OneSession.end,
      name: OneSession.name,
      id: OneSession.id,
      description: OneSession.description,
      limitTicket: Number(OneSession.limit),
    };

    let session = await updateSession(context, body);

    if (session.statusCode) {
      refreshToken(session, context);
      if (Array.isArray(session.message)) {
        session.message.forEach(element => {
          notifier(element, "error", "top-right", 5000);
        });
      } else {
        console.error(session);
        notifier(session.message);
      }
    }else{

      notifier(session.message, "success");
    }
  };

  const DeleteSession = async (e) => {
    //fonction pour créer un ticket
    e.preventDefault();
    let session = await deleteSession(context,idSession);

    if (session.statusCode) {
      refreshToken(session, context);
      if (Array.isArray(session.message)) {
        session.message.forEach(element => {
          notifier(element, "error", "top-right", 5000);
        });
      } else {
        console.error(session);
        notifier(session.message);
      }
    }
  };

  const CurrentSession = async () => {
    //fonction pour créer un ticket
    const body = {
      isCurrent: true,
      idSession: idSession,
    };
      let session = await currentSession(context, body);

      if (session.statusCode) {
        refreshToken(session, context);
        if (Array.isArray(session.message)) {
          session.message.forEach(element => {
            notifier(element, "error", "top-right", 5000);
          });
        } else { 

           

          setEndGame(session?.session);
          notifier(session.message);
        }
      }
  };

  // create session
  const UpdateNewSessionName = (e) => {
    setNewsession({
      ...newSession,
      name: e.target.value,
    });
     
  };
  const UpdateNewSessionStart = (e) => {
    setNewsession({
      ...newSession,
      startDate: e.target.value,
    });
     
  };
  const UpdateNewSessionEnd = (e) => {
    setNewsession({
      ...newSession,
      endDate: e.target.value,
    });
     
  };
  const UpdateLimited = (e) => {
    setNewsession({
      ...newSession,
      limit: e.target.value,
    });
     
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
  };

  return (
    <div style={styles.email}>
      {/* <button style={styles.createButton} onClick={handleOpen}>
        Créer une nouvelle session
      </button> */}

      <form style={styles.formSession}>
        <p style={{ color: "white", textAlign: "center", margin: 5 }}>
          Etat : <strong style={{ color: "white" }}> En cours </strong>
        </p>
        <p style={{ color: "white", textAlign: "center", margin: 8 }}>
          Date limite : fin dans{" "}
          <strong style={{ color: "white" }}> {endGame && <Count current={endGame} /> }</strong>
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
          readOnly
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
        { OneSession != DefaultSession && <button onClick={UpdateSession} style={styles.dateButton}>
          {" "}
          Mettre à jour
        </button> }

        
        {/* <button onClick={DeleteSession} style={styles.dateButton}>
          {" "}
          Supprimer la session
        </button> */}
       {/* { OneSession.isCurrent === false && <button onClick={CurrentSession} style={styles.dateButton}>
          Appliquer comme session active
        </button>} */}
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
        aria-describedby="modal-modal-description">
        <form style={styles.modalSession}>
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
          <small
            style={{
              color: "#84B71E",
              fontSize: 12,
              padding: "8px 0px 8px 8px",
            }}
          >
            Indiquer une date de début
          </small>
          <input
            onChange={UpdateNewSessionStart}
            style={styles.modalDate}
            type="date"
            value={newSession.startDate}
          />
          <small
            style={{
              color: "#84B71E",
              fontSize: 12,
              padding: "8px 0px 8px 8px",
            }}
          >
            Indiquer une date de fin
          </small>
          <input
            onChange={UpdateNewSessionEnd}
            style={styles.modalDate}
            type="date"
            value={newSession.endDate}
          />
          {/* <button onClick={CreateSession} style={styles.modalCreate}>
            Créer la session
          </button> */}
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
    background:" linear-gradient(48deg, rgba(56,135,13,1) 0%, rgba(56,135,13,1) 48%, rgba(144,203,6,1) 100%, rgba(211,255,0,1) 100%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "white",
    marginTop: 10,
    padding: 50,
    borderRadius:10
  },

  elem: {
    margin: 0,
    marginBottom: 3,
  },
  formSession: {
    display: "flex",
    flexDirection: "column",
    width: 350,
    padding: 15,
    fontSize: 18,
    backgroundColor: "transparent",
    border: "solid 3px white",
    borderRadius: 8,
    margin: 10,
  },
  dateInput: {
    padding: 10,
    paddingLeft: 15,
    height: 50,
    color: "#84B71E",
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
    backgroundColor: " #095719",
    border: "none",
    fontSize: 16,
    margin: 5,
    borderRadius: 5,
    fontWeight: "bold",
  },
  createButton: {
    padding: 10,
    color: "white",
    backgroundColor: " #095719",
    border: "none",
    margin: 30,
    fontSize: 18,
    minHeight: 50,
    borderRadius: 5,
  },
  modalSession: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    padding: 20,
    fontSize: 18,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 350,
    borderRadius: 15,
    backgroundColor: "#84B71E",
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
    margin: 5,
    outline: "none",
  },

  modalCreate: {
    fontSize: 18,
    borderRadius: 5,
    height: 50,
    padding: 8,
    color: "white",
    background: " #38870D",
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
  },
};



