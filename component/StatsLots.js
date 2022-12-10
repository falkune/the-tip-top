import React, { useEffect, useState, useContext } from "react";
import OneLot from "./OneLot";
import ApiContext from '../context/apiContext';
import {statLots} from '../fonctions/tickets';
import Gauge from './gauge';
import PieGraph from './Piecharte';

const StatsLots = ({ idSession }) => {
  const [allGroup, setAllGroup] = useState([]);
  const context = useContext(ApiContext);

  useEffect(() => {
    if(idSession != ""){
      getStatLots(context, idSession);
    }
  },[idSession]);

  const getStatLots = (context, idSession) => {
    statLots(context, idSession)
    .then((response) => {
      console.log(response)
      setAllGroup(response.groupStats);
    })
    .catch((error) => console.log(error))
  }

  return (
    <div>
      <div style={styles.lot}>
        { 
          allGroup.map((l,index)=> (
            <OneLot
              key={index}
              title={l.groupName}
              totalTicket={l.numberOfTickets} 
              claimbedTicket={l.claimbedTicket}  
              limitTicket={l.limitTicket}
              claimbedTicketPercentage={l.claimbedTicketPercentage}
              notClaimbedTicket={l.notClaimbedTicket} 
              numberOfTicketsPercentage={l.numberOfTicketsPercentage}/>
          ))
        }
      </div>

      <div style={styles.pieBloc}>
        { 
          allGroup.map((l,index)=> (
            <Gauge title={l.groupName} data={[{name: "Tickets generés", value: l.numberOfTickets},{name: "Tickets assignés", value: l.claimbedTicket},{name: "Tickets livrés", value: l.deliveredTicket}]}/>
          ))
        }
      </div>

      <div style={styles.pieBloc}>
        { 
          allGroup.map((l,index)=> (
            <PieGraph title={l.groupName} data={[{name: "Tickets generés", value: l.numberOfTicketsPercentage},{name: "Tickets assignés", value: l.claimbedTicketPercentage},{name: "Tickets livrés", value: l.deliveredTicketPercentage}]}/>
          ))
        }
      </div>
    </div>

  )
}
export default StatsLots;

const styles = {
  lot: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    margin: 10,
  },
  pieBloc:{
    width: "100%",
    display: "flex",
    justifyContent:"space-around",
    margin: "20px 10px",
    flexWrap: "wrap"
  }
};