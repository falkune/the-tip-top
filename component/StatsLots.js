import React, { useEffect, useState, useContext } from "react";
import OneLot from "./OneLot";
import axios from "axios";
import ApiContext from '../context/apiContext';
import LinearProgress from '@mui/material/LinearProgress';

const StatsLots = ({ idSession }) => {
  const [groupInfo, setGroupInfo] = useState([]);
  const [allGroup, setAllGroup] = useState([]);
  const context = useContext(ApiContext);

  useEffect(() => {
    if(idSession != ""){
      getTicketStats();
    }
    getAllGroup();
  },[idSession]);

  const getTicketStats = async () => {
    context.backend.api.tickets.get('get-ticket-stats/'+idSession)
    .then((response) => {
      setAllGroup(response);
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const getAllGroup = () => {
    context.backend.api.groups.get('')
    .then((response) => {
      setGroupInfo(response);
    })
    .catch((error) => {
      console.log(error)
    })
  }

  if(groupInfo.length != 0){
    return (
      <div style={styles.lot}>
        { 
          allGroup.map((l,index)=> (
            <OneLot 
              key={index}
              title={groupInfo.find(item => item._id == l._id).description}
              claimbedTicket={l.claimbedTicket}
              notClaimbedTicket={l.numberOfTickets - l.claimbedTicket}
            /> 
          ))
        }
      </div>
    )
  }else{
    return(
      <>
        <LinearProgress color="secondary" style={{margin: 10}}/>
        <LinearProgress color="success" style={{margin: 10}}/>
        <LinearProgress color="inherit" style={{margin: 10}}/>
      </>
    )
  }
   
}
export default StatsLots;

const styles = {
  lot: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    marginBottom: 25,
    justifyContent: "space-around",
    flexWrap: "wrap"
  },
};