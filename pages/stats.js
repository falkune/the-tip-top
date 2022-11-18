import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import AllStats from "../component/AllStats";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Users from "../component/Users";
import TicketChecker from "../component/TicketChecker";
import TicketGenerator from "../component/TicketGenerator";
import Sessions from "../component/Sessions";
import axios from "axios";
import { useRouter } from "next/router";
import Cookies from 'js-cookie';

// material ui
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export default function Stats() {
  const router = useRouter();
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
  const [width, setWidth] = useState(0);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
    localStorage.setItem("width", width);
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [width]);

  useEffect(() => {
    if(Cookies.get('accessToken') == undefined) {
      router.push("/connexion");
    }else if(Cookies.get('userRole') !== "admin"){
      router.push("/bingo");
    }else{
      getAllSessions();
      getAllLots();
    }
  }, []);

  const getAllSessions = async () => {
    //fonction pour créer un ticket
    const token = localStorage.getItem("token");

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const api = "https://api.dev.dsp-archiwebo21-ct-df-an-cd.fr/session";
    try {
      let Allsessions = await axios.get(api, config);
      setSessions(Allsessions.data);
      setIdSession(Allsessions.data[0]._id);
    } catch (e) {
      // console.log(e);
    }
  };
  const getAllLots = async () => {
    //fonction pour créer un ticket
    const token = localStorage.getItem("token");

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const api = "https://api.dev.dsp-archiwebo21-ct-df-an-cd.fr/group";
    try {
      let AllLots = await axios.get(api, config);
      setLots(AllLots.data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChangeSession = (event) => {
    setIdSession(event.target.value);
    setSession(event.target.value);
  };

  const handlechange = (e) => {
    const date = new Date();
    setBirthday(e.target.value);
    let mydate = new Date(birthday);
    let nowtime = new Date(now);
    const yes = nowtime.getFullYear() - mydate.getFullYear();
    setNumAge(yes);
  };

  const changemenu = (e) => {
    setMenu(e.target.value);
  };

  if(Cookies.get("accessToken") !== undefined && Cookies.get('userRole') == "admin"){
    return (
      <div className={styles.container}>
        <Head>
          <title>TeaBingo - Jeux concours</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/fav.png" />
        </Head>
        <Header changemenu={changemenu} stylez={stylez} menu={menu} />
  
        <div style={{ display: "flex", width: "100%", background: "green" }}>
          {width > 850 && (
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
          )}
  
          <div style={width > 850 ? stylez.stat : stylez.fullStat}>
            <div
              style={{
                backgroundColor: "white",
                padding: 25,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "50px",
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
            {menu === "stats" && <AllStats lots={lots} idSession={idSession} />}
            {menu === "ticket" && <TicketChecker session={idSession} />}
            {menu === "users" && <Users idSession={idSession} />}
            {menu === "generator" && <TicketGenerator session_id={idSession} />}
            {menu === "sessions" && <Sessions idSession={idSession} />}
          </div>
        </div>
        <Footer />
      </div>
    );
  }else{
    return (
      <div>
        <p>loading...</p>
      </div>
    )
  }
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
    backgroundColor: " #02558D",
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
  },
};
