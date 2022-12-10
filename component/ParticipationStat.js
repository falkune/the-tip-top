import React, {useEffect, useState, useContext} from "react";
import ApiContext from '../context/apiContext';
import {notifier, refreshToken} from '../fonctions/utils';
import {claimedTickeBySession} from '../fonctions/tickets';
import {CardSummary} from './CardSummary';
import AgeStat from './AgeStat';


export default function ParticipationStat({asignTicket, limitTicket, idSession}) {
  const [numberOfClaimbedTicket, setNumberOfClaimbedTicket] = useState(0)
  const context = useContext(ApiContext);

  useEffect(() => {
    if(idSession != ""){
      validationTicketsStats();
    }
  }, [idSession]);

  const validationTicketsStats = () => {
    claimedTickeBySession(context, idSession)
    .then((response) => {
      if(response.statusCode){
        refreshToken(response, context);
      }else{
        setNumberOfClaimbedTicket(response.length);
      }
    })
    .catch(() => notifier())
  }

  return (
    <div style={styles.container}>
      <CardSummary
        title="stats global"
        totalTicket={limitTicket}
        asignTicket={asignTicket}
        claimbedTicket={numberOfClaimbedTicket}  
        percentage={numberOfClaimbedTicket != 0 ? (numberOfClaimbedTicket * 100 / asignTicket).toFixed(2) : numberOfClaimbedTicket.toFixed(2)}/>
        {/* <AgeStat/> */}
    </div>
  );
}

const styles = {
  container:{
    display: 'flex',
    justifyContent: "space-around",
    flexWrap: "wrap",
    margin: 20,
  }
}