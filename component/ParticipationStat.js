import React, {useEffect, useState, useContext} from "react";
import OneLot from "./OneLot";
import ApiContext from '../context/apiContext';
import {notifier, refreshToken} from '../fonctions/utils';
import {claimedTickeBySession} from '../fonctions/tickets';

export default function ParticipationStat({ticket, idSession}) {
  const [numberOfClaimbedTicket, setNumberOfClaimbedTicket] = useState(0);
  const context = useContext(ApiContext);

  useEffect(() => {
    if(idSession != ""){
      validationTicketsStats();
    }
  }, [idSession]);

  const validationTicketsStats = () => {
    claimedTickeBySession(idSession, context)
    .then((response) => {
      if(response.statusCode){
        refreshToken(response, context);
      }else{
        setNumberOfClaimbedTicket(response.length);
      }
    })
    .catch(error => notifier())
  }

  return (
    <div>
      <OneLot 
        claimbedTicket={numberOfClaimbedTicket}
        notClaimbedTicket={ticket - numberOfClaimbedTicket}
      /> 
    </div>
  );
}
