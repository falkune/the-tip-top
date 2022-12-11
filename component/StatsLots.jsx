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
            <Gauge title={l.groupName} data={[{name: 'Tickets generés', value: l.numberOfTickets},{name: 'Tickets assignés', value: l.claimbedTicket},{name: 'Tickets livrés', value: l.deliveredTicket}]}/>
          ))
        }
      </div>

      <div style={styles.pieBloc}>
        { 
          allGroup.map((l,index)=> (
            <PieGraph title={l.groupName} data={[{ name: 'Tickets generés', value: l.numberOfTickets },{ name: 'Tickets assignés', value: l.claimbedTicket },{ name: 'Tickets livrés', value: l.deliveredTicket }]}/>
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
    borderRadius:15,
    flexWrap: "wrap",
    margin: 10,
  },
  pieBloc:{
    width: "100%",
    display: "flex",
    margin: 20,
    borderRadius:15,
    flexWrap: "wrap",
    // backgroundColor: "#FFFFFF",
    // boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)"
  }
};