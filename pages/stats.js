<<<<<<< HEAD
import React, { useEffect, useState } from "react";
=======
import React, { useEffect, useRef, useState } from "react";
>>>>>>> 0760426 (udpate format)
import Head from "next/head";
import styles from "../styles/Home.module.css";
import AllStats from "../component/AllStats";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Users from "../component/Users";
import AgeModal from "../component/AgeModal";
import TicketChecker from "../component/TicketChecker";
import TicketGenerator from "../component/TicketGenerator";
import Sessions from "../component/Sessions";
import axios from "axios";
<<<<<<< HEAD
import { useRouter } from "next/router";
import Cookies from 'js-cookie';
=======
>>>>>>> 0760426 (udpate format)

// material ui
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
<<<<<<< HEAD


export default function Stats() {
  const [menu, setMenu] = useState("stats")
  const [now, setNow] = useState(Date.now)
  const [birthday, setBirthday] = useState("stats")
  const [age,setAge] = useState(true)
  const [numAge,setNumAge] = useState(null)
  const [session, setSession] = React.useState(30);
 
=======

export default function Stats() {
  const [menu, setMenu] = useState("stats");
  const [now, setNow] = useState(Date.now);
  const [birthday, setBirthday] = useState("stats");
  const [age, setAge] = useState(true);
  const [numAge, setNumAge] = useState(null);
  const [session, setSession] = React.useState({
    name: "",
    start: "",
    end: "",
    limit: 15000,
    id: "",
  });
  const [lots, setLots] = React.useState([]);
  const [sessions, setSessions] = useState([]);
  const [idSession, setIdSession] = useState("");

  useEffect(() => {
    getAllSessions();
    getAllLots();
  }, []);

  const getAllSessions = async () => {
    //fonction pour créer un ticket
    const token = localStorage.getItem("token");
    // console.log("tokens", token);

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const api = "https://api.dev.dsp-archiwebo21-ct-df-an-cd.fr/session";
    // console.log("config", config);

    try {
      let Allsessions = await axios.get(api, config);
      setSessions(Allsessions.data);
      // console.log(sessions);
      setIdSession(Allsessions.data[0]._id);
      // console.log("idsession", idSession);
    } catch (e) {
      console.log(e);
    }
  };
  const getAllLots = async () => {
    //fonction pour créer un ticket
    const token = localStorage.getItem("token");
    // console.log("tokens", token);

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const api = "https://api.dev.dsp-archiwebo21-ct-df-an-cd.fr/group";
    // console.log("config", config);

    try {
      let AllLots = await axios.get(api, config);
      setLots(AllLots.data);
      // console.log("lots", lots);
    } catch (e) {
      console.log(e);
    }
  };
>>>>>>> 0760426 (udpate format)
  const giveAge = () => {
    setAge(true);
  };

  const closeAge = () => {
    setAge(false);
  };

  const handleChangeSession = (event) => {
<<<<<<< HEAD
<<<<<<< HEAD
    setIdSession(event.target.value);
    setSession(event.target.value);
=======
    console.log("hey", event.target.value);
    setIdSession(event.target.value);
    setSession(event.target.value);

<<<<<<< HEAD
    setOneSession(event.target.value);
    console.log("onesession", oneSession);
>>>>>>> 0760426 (udpate format)
=======
    console.log("setIdSession", idSession);
>>>>>>> 9b2aab2 (update route dashboard)
=======
    // console.log("hey", event.target.value);
    setIdSession(event.target.value);
    setSession(event.target.value);

    // console.log("setIdSession", idSession);
>>>>>>> ac3cdf0 (updating StatInscription and AgeStat)
  };

  const handlechange = (e) => {
    const date = new Date();
    setBirthday(e.target.value);
<<<<<<< HEAD
<<<<<<< HEAD
    let mydate = new Date(birthday);
    let nowtime = new Date(now);
    const yes = nowtime.getFullYear() - mydate.getFullYear();
    setNumAge(yes);
=======
    console.log(birthday);
=======
    // console.log(birthday);
>>>>>>> ac3cdf0 (updating StatInscription and AgeStat)
    let mydate = new Date(birthday);
    let nowtime = new Date(now);
    const yes = nowtime.getFullYear() - mydate.getFullYear();
    console.log("calcule", yes);
    setNumAge(yes);
<<<<<<< HEAD
    console.log(numAge);
>>>>>>> 0760426 (udpate format)
=======
    // console.log(numAge);
>>>>>>> ac3cdf0 (updating StatInscription and AgeStat)
  };

  const changemenu = (e) => {
    setMenu(e.target.value);
<<<<<<< HEAD
<<<<<<< HEAD
=======
    console.log("menu", menu);
>>>>>>> 0760426 (udpate format)
=======
    // console.log("menu", menu);
>>>>>>> ac3cdf0 (updating StatInscription and AgeStat)
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>TeaBingo - Jeux concours</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Header />

      <div style={{ display: "flex", width: "100%", background: "green" }}>
        <AgeModal
          // numAge={numAge}
          //  giveAge={giveAge}
          closeAge={closeAge}
          handlechange={handlechange}
        />

<<<<<<< HEAD
    < AgeModal
    // numAge={numAge}
    // giveAge={giveAge}
      closeAge={closeAge}
      handlechange={handlechange} />
  
    <div style={stylez.side}>
      <h2 style={{color:"white",textAlign:"center"}}>Dashboard</h2>
          <button value={"stats"} style={menu === "stats" ? stylez.sideButtonActive : stylez.sideButtonInactive } onClick={changemenu}>Mes stats</button>
          <button  value={"generator"}style={menu === "generator" ? stylez.sideButtonActive : stylez.sideButtonInactive } onClick={changemenu}>Ticket generator</button>
          <button  value={"ticket"}style={menu === "ticket" ? stylez.sideButtonActive : stylez.sideButtonInactive } onClick={changemenu}>Ticket checker</button>
          <button  value={"users"}style={menu === "users" ? stylez.sideButtonActive : stylez.sideButtonInactive }onClick={changemenu}>Listes utilisateurs</button>
          <button  value={"sessions"} style={menu === "sessions" ? stylez.sideButtonActive : stylez.sideButtonInactive } onClick={changemenu}> Gestions des sessions</button>
    </div>
    <div  style={stylez.stat}>
   <div style={{backgroundColor:"white",padding:25,display:"flex",flexDirection:"column",alignItems:"center"}}>
  <h2 className={styles.h2}>Selectionner une session</h2>
   <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={session}
          label="session"
          onChange={handleChangeSession}>
          <MenuItem value={10}>Session 14_mai_31_juin_2022</MenuItem>
          <MenuItem value={20}>Session 14_juillet_31_Aout_2022</MenuItem>
          <MenuItem value={30}>Session 14_Septembre_31_octobre_2022</MenuItem>
        </Select> 
    </div> 
  
    { menu === "stats" && <AllStats/>}
    {menu === "ticket" && <TicketChecker/>}
    {menu === "users" && <Users/>}
    {menu === "generator" && <TicketGenerator/>}
=======
        <div style={stylez.side}>
          <h2 style={{ color: "white", textAlign: "center" }}>Dashboard</h2>
          <button
            value={"stats"}
            style={
              menu === "stats"
                ? stylez.sideButtonActive
                : stylez.sideButtonInactive
            }
            onClick={changemenu}
          >
            Mes stats
          </button>
          <button
            value={"generator"}
            style={
              menu === "generator"
                ? stylez.sideButtonActive
                : stylez.sideButtonInactive
            }
            onClick={changemenu}
          >
            Ticket generator
          </button>
          <button
            value={"ticket"}
            style={
              menu === "ticket"
                ? stylez.sideButtonActive
                : stylez.sideButtonInactive
            }
            onClick={changemenu}
          >
            Ticket checker
          </button>
          <button
            value={"users"}
            style={
              menu === "users"
                ? stylez.sideButtonActive
                : stylez.sideButtonInactive
            }
            onClick={changemenu}
          >
            Listes utilisateurs
          </button>
          <button
            value={"sessions"}
            style={
              menu === "sessions"
                ? stylez.sideButtonActive
                : stylez.sideButtonInactive
            }
            onClick={changemenu}
          >
            {" "}
            Gestions des sessions
          </button>
        </div>
>>>>>>> 0760426 (udpate format)

        <div style={stylez.stat}>
          <div
            style={{
              backgroundColor: "white",
              padding: 25,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h2 className={styles.h2}>Selectionner une session</h2>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={idSession}
              label="session"
              onChange={handleChangeSession}
            >
              {sessions.map((s, index) => (
                <MenuItem key={index} value={s._id}>
                  {s.name}
                </MenuItem>
              ))}
            </Select>
          </div>
          {menu === "stats" && <AllStats lots={lots} idSession={idSession}/>}
          {menu === "ticket" && <TicketChecker session={idSession} />}
          {menu === "users" && <Users idSession={idSession} />}
          {menu === "generator" && <TicketGenerator session_id={idSession} />}
          {menu === "sessions" && <Sessions idSession={idSession} />}
        </div>
      </div>
      <Footer />
    </div>
  );
}

const stylez = {
  gain: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    width: "90%",
    maxWidth: 560,
  },
  side: {
    width: "15%",
    backgroundColor: "white",
    backgroundColor: "#41D8C2",
    display: "flex",
    flexDirection: "column",
  },
  sideButtonActive: {
    fontSize: 20,
    margin: 5,
    color: "white",
    marginLeft: 0,
    marginRight: 0,
    padding: 10,
    width: "100%",
    border: "none",
    height: 60,
    background: "#41C2B0",
<<<<<<< HEAD
  },
  sideButtonInactive: {
    fontSize: 20,
    margin: 5,
    color: "#3AAB9B",
    marginLeft: 0,
    marginRight: 0,
    padding: 10,
    width: "100%",
    border: "none",
    height: 60,
    background: "none",
  },
  stat: {
    backgroundColor: "#F1F1F1",
    padding: 25,
    width: "85%",
  },

  fullStat: {
    backgroundColor: "#F1F1F1",
    padding: 25,
    width: "100%",
=======
  },
  sideButtonInactive: {
    fontSize: 20,
    margin: 5,
    color: "white",
    marginLeft: 0,
    marginRight: 0,
    padding: 10,
    width: "100%",
    border: "none",
    height: 60,
    background: "none",
  },
  stat: {
    backgroundColor: "#F1F1F1",
    padding: 25,
    width: "85%",
>>>>>>> 0760426 (udpate format)
  },
};
