<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import OneLot from "./OneLot";
import axios from "axios";
=======
import React from "react"
import Image from 'next/image'
import Link from "next/link"
import logo from "../image/logo.png"
import OneLot from "./OneLot"
import Speedometer from './Speedometer'
>>>>>>> fe7b512 (pull some update)

const StatsLots = ({ idSession }) => {
  const [groupInfo, setGroupInfo] = useState(null);
  const [allGroup, setAllGroup] = useState([]);

  useEffect(() => {
    getTicketStats();
    getAllGroup();
  },[]);

  const getTicketStats = async () => {
    const accessToken = localStorage.getItem('token');
    const body = {
      idSession : idSession,
    }
    const config = {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
    const url = "https://api.dev.dsp-archiwebo21-ct-df-an-cd.fr/ticket/get-ticket-stats"
    const response = await axios.get(url)
    setAllGroup(response.data);
  }

<<<<<<< HEAD
  const getAllGroup = async () => {
    const url = "https://api.dev.dsp-archiwebo21-ct-df-an-cd.fr/Group"
    const response = await axios.get(url);
    setGroupInfo(response.data);
  }
=======

    const lots = [
      {
        now:200,
        max:1000,
        title:" Infuseur à thé",
        color:"#41C2B0",
        value: 19
      },
      {
        now:3600,
        max:5000,
        title:"Boite de 100g d’un thé détox ",
        value: 21
      }, 
      {
        now:4500,
        max:10000,
        title:"Boite de 100g d’un thé signature",
        color:"#41C2B0",
        value: 32
      },
      {
        now:5000,
        max:1000000,
        title:'Coffret découverte',
        value: 56
      } 
    ] 
>>>>>>> fe7b512 (pull some update)
   
  return (
  <div style={styles.lot} >
    { 
<<<<<<< HEAD
      allGroup.map((l,index)=> (
        <OneLot 
          key={index}
          title={groupInfo ? groupInfo[index].description : ""}
          now={l.claimbedTicket}
          max={l.numberOfTickets}
          value={(l.claimbedTicket * 100 / l.numberOfTickets).toFixed(2)}
          /> 
      ))
    }
  </div>
  )
}
export default StatsLots;
=======
      lots.map((l,index)=> (
        <Speedometer 
          key={index}
          title={l.title}
          now={l.now}
          max={l.max}
          image={l.image}
          value={l.value}/> ))
    }
  </div>

  )}

export default StatsLots
>>>>>>> fe7b512 (pull some update)
=======
import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../image/logo.png";
import OneLot from "./OneLot";

const StatsLots = ({ llots }) => {
  const lots = [
    { now: 200, max: 1000, title: " Infuseur à thé", color: "#41C2B0" },

    { now: 3600, max: 5000, title: "Boite de 100g d’un thé détox " },

    {
      now: 4500,
      max: 10000,
      title: "Boite de 100g d’un thé signature",
      color: "#41C2B0",
    },

    { now: 5000, max: 1000000, title: "Coffret découverte" },
  ];

  return (
    <div style={styles.lot}>
      {llots.map((l, index) => (
        <OneLot
          key={index}
          title={l.description}
          now={l.limitTicket}
          max={l.percentage}
          image={l.image}
        />
      ))}
    </div>
  );
};

export default StatsLots;
>>>>>>> 9b2aab2 (update route dashboard)

const styles = {
  lot: {
    display: "flex",
    padding: 15,
    width: "100%",
    marginBottom: 25,
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
<<<<<<< HEAD
};
=======
};
>>>>>>> 9b2aab2 (update route dashboard)
