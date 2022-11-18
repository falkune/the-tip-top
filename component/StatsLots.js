import React, { useEffect, useState } from "react";
import OneLot from "./OneLot";
import axios from "axios";
import ErrorMessage from "../component/ErrorMessage";

const StatsLots = ({ idSession }) => {
  const [groupInfo, setGroupInfo] = useState([]);
  const [allGroup, setAllGroup] = useState([]);

  useEffect(() => {
    if(idSession != ""){
      getTicketStats();
    }
    getAllGroup();
  },[idSession]);

  const getTicketStats = async () => {
    const url = "https://api.dev.dsp-archiwebo21-ct-df-an-cd.fr/ticket/get-ticket-stats/"+idSession;
    const response = await axios.get(url);
    setAllGroup(response.data);
  }

  const getAllGroup = async () => {
    const url = "https://api.dev.dsp-archiwebo21-ct-df-an-cd.fr/Group";
    const response = await axios.get(url);
    setGroupInfo(response.data);
  }
   
  return (
    <div style={styles.lot}>
      { 
        allGroup.map((l,index)=> (
          <OneLot 
            key={index}
            title={groupInfo.find(item => item._id == l._id).description}
            now={l.claimbedTicket}
            max={l.numberOfTickets}
            value={l.numberOfTickets > 0 ? (l.claimbedTicket * 100 / l.numberOfTickets).toFixed(2) : 0.0.toFixed(2)}
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