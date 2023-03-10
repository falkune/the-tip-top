/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from "react";
import Head from "next/head";
import Image from "next/image";
import AllStats from "../component/AllStats";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Users from "../component/Users";
import TicketChecker from "../component/TicketChecker";
import TicketGenerator from "../component/TicketGenerator";
import Sessions from "../component/Sessions";
import { useRouter } from "next/router";
import Cookies from 'js-cookie';
import ApiContext from '../context/apiContext';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { getSessions } from "../fonctions/sessions";
import sessions from '../image/session.png'
import users from '../image/users.png'
import search from '../image/search.png'
import load from '../image/load.png'
import graph from '../image/graph.png';



export default function Stats() {
  const context = useContext(ApiContext)
  const router = useRouter();
  const [menu, setMenu] = useState("ticket");
  const [allsessions, setAllSessions] = useState([]);
  const [idSession, setIdSession] = useState("");
  const [width, setWidth] = useState(0);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
    Cookies.set("width", width);
  };

  useEffect(() => {
    if (!Cookies.get('authToken') || Cookies.get('role') != "admin") {
      router.push('/connexion')
    }
    getAllSessions(context);
  }, []);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);

  }, [width]);


  const getAllSessions = async (context) => {
    getSessions(context)
      .then((response) => {
        setAllSessions(response);
        setIdSession(response[0]._id);
      })
  };

  const handleChangeSession = (event) => {
    setIdSession(event.target.value);
  };

  const changemenu = (e) => {
    setMenu(e.target.value);
  };

  if (Cookies.get('authToken') && Cookies.get('role') == "admin") {
    return (
      <div className="container">
        <Head>
          <title>Interface administateur</title>
          <meta name="administrateur" content="interface d'administrateur" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header changemenu={changemenu} stylez={stylez} menu={menu} />

        <div style={{ display: "flex", width: "100%", background: "#c7c7c7" }}>
          {width > 850 && (
            <div style={stylez.side}>
              <h2 style={{ color: "white", textAlign: "center" }}>Dashboard</h2>
              <button
                value={"stats"}
                style={
                  menu === "stats"
                    ? stylez.sideButtonActive
                    : stylez.sideButtonInactive} onClick={changemenu} >
                <span style={{ marginRight: 15 }}>
                  <Image src={graph} alt="session_logo" width={20} height={20} />
                </span>
                Mes stats
              </button>
              <button
                value={"generator"}
                style={
                  menu === "generator"
                    ? stylez.sideButtonActive
                    : stylez.sideButtonInactive
                }
                onClick={changemenu}>
                <span style={{ marginRight: 15 }}>
                  <Image src={load} alt="session_logo" width={20} height={20} />
                </span>
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
                <span style={{ marginRight: 15 }}>
                  <Image src={search} alt="session_logo" width={20} height={20} />
                </span>
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
                <span style={{ marginRight: 15 }}>
                  <Image src={users} alt="session_logo" width={20} height={20} />
                </span>
                Listes utilisateurs
              </button>
              <button
                value={"sessions"}
                style={
                  menu === "sessions"
                    ? stylez.sideButtonActive
                    : stylez.sideButtonInactive
                }
                onClick={changemenu}>
                <span style={{ marginRight: 15 }}>
                  <Image src={sessions} alt="session_logo" width={20} height={20} />
                </span>
                Gestions de la session
              </button>
            </div>
          )}

          <div style={width > 850 ? stylez.stat : stylez.fullStat}>
            <div

              style={{
                background: "rgb(56,135,13",
                background: " linear-gradient(142deg, rgba(56,135,13,1) 0%, rgba(56,135,13,1) 49%, rgba(144,203,6,1) 100%, rgba(211,255,0,1) 100%)",
                padding: 25,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: 20,
                borderRadius: 15
              }}
            >
              <h2 style={{ color: "white" }}>Selectionner une session</h2>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={idSession}
                label="session"
                onChange={handleChangeSession}
                style={{ border: "solid 2px white", color: "white" }

                }>
                {allsessions.map((s, index) => (
                  <MenuItem key={index} value={s._id}>
                    {s.name}
                  </MenuItem>
                ))}
              </Select>
            </div>
            {menu === "stats" && <AllStats idSession={idSession} />}
            {menu === "sessions" && <Sessions idSession={idSession} />}
            {menu === "ticket" && <TicketChecker session={idSession} />}
            {menu === "users" && <Users idSession={idSession} />}
            {menu === "generator" && <TicketGenerator session_id={idSession} />}
          </div>
        </div>
        <Footer />

      </div>
    );
  }
  else {
    return (
      <Box sx={{ width: '100%' }}>
        <LinearProgress />
      </Box>
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
    paddingTop: 100,
    background: "linear-gradient(48deg, rgba(56,135,13,1) 0%, rgba(56,135,13,1) 91%, rgba(144,203,6,1) 100%, rgba(211,255,0,1) 100%)",
    display: "flex",
    flexDirection: "column",
  },
  sideButtonActive: {
    display: "flex",
    alignItems: "center",
    fontSize: 20,
    textAlign: "left",
    margin: 5,
    color: "white",
    marginLeft: 0,
    marginRight: 0,
    padding: 10,
    width: "100%",
    border: "none",
    height: 60,
    background: "#96D614",
  },
  sideButtonInactive: {
    fontSize: 20,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    margin: 5,
    color: "white",
    opacity: 0.5,
    marginLeft: 0,
    marginRight: 0,
    padding: 10,
    width: "100%",
    border: "none",
    height: 60,
    background: "none",
  },
  stat: {
    backgroundColor: "#ddeddd",
    padding: 25,
    paddingTop: 120,
    width: "85%",
    minHeight:"100vh"
  },

  fullStat: {
    backgroundColor: "white",
    padding: 25,
    paddingTop: 100,
    width: "100%",
    minHeight:"100vh"

  },

  titleMenu: {
    margin: 0,
    marginLeft: 15
  }
};
