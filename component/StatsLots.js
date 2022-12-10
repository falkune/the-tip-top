import React, { useEffect, useState, useContext } from "react";
import OneLot from "./OneLot";
import ApiContext from '../context/apiContext';
import LinearProgress from '@mui/material/LinearProgress';
import {statLots} from '../fonctions/tickets';
import {notifier} from '../fonctions/utils';

const StatsLots = ({ idSession }) => {
  const [groupInfo, setGroupInfo] = useState([]);
  const [allGroup, setAllGroup] = useState([]);
  const context = useContext(ApiContext);

  useEffect(() => {
    if(idSession != ""){
      getStatLots(context, idSession);
    }
    getAllGroup();
  },[idSession]);

  const getStatLots = (context, idSession) => {
    statLots(context, idSession)
    .then((response) => {
      setAllGroup(response.groupStats);
    })
    .catch((error) => console.log(error))
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
              totalTicket={l.numberOfTickets} 
              claimbedTicket={l.claimbedTicket}  
              limitTicket={l.limitTicket}
              claimbedTicketPercentage={l.claimbedTicketPercentage}
              notClaimbedTicket={l.notClaimbedTicket} 
              percentage={(l.claimbedTicket * 100) / (l.claimbedTicket+l.notClaimbedTicket)}/>
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
    justifyContent: "space-around",
    flexWrap: "wrap",
    margin: 10
  },
};