import React, { useEffect, useState } from "react";
import OneLot from "./OneLot";
import axios from "axios";

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

  const getAllGroup = async () => {
    const url = "https://api.dev.dsp-archiwebo21-ct-df-an-cd.fr/Group"
    const response = await axios.get(url);
    setGroupInfo(response.data);
  }
   
  return (
  <div style={styles.lot} >
    { 
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

const styles = {
  lot: {
    display: "flex",
    padding: 15,
    width: "100%",
    marginBottom: 25,
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
};