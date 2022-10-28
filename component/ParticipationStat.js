import React, {useEffect, useState, useContext} from "react";
import OneLot from "./OneLot";
import ApiContext from '../context/apiContext';


export default function ParticipationStat({ticket, idSession}) {
  const [numberOfClaimbedTicket, setNumberOfClaimbedTicket] = useState(0);
  const context = useContext(ApiContext);

  useEffect(() => {
    if(idSession != ""){
      validationTicketsStats();
    }
  }, [idSession]);

  const validationTicketsStats = () => {
    context.backend.auth.tickets.post('claimbed-tickets-by-session', {idSession : idSession})
    .then((response) => {
      if(response.statusCode){
        console.log('bad =>', response)
      }else{
        setNumberOfClaimbedTicket(response.length);
      }
    })
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