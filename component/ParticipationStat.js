import React, {useEffect, useState, useContext} from "react";
import OneLot from "./OneLot";
import ApiContext from '../context/apiContext';
import {notifier, refreshToken} from '../fonctions/utils';
import {claimedTickeBySession} from '../fonctions/tickets';
import Gaugecart from './gauge';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

export default function ParticipationStat({ticket, idSession}) {
  const [numberOfClaimbedTicket, setNumberOfClaimbedTicket] = useState(0);
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
      {/* <Gaugecart claimed={numberOfClaimbedTicket} notClaimed={ticket - numberOfClaimbedTicket}/> */}
      <OneLot claimbedTicket={numberOfClaimbedTicket} notClaimbedTicket={ticket - numberOfClaimbedTicket}/>
    </div>
  );
}

const styles = {
  container:{
    display: 'flex',
    justifyContent: "space-around",
    flexWrap: "wrap"
  }
}