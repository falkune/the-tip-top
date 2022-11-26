import React, {useEffect, useState, useContext} from "react";
import Gauge from "react-svg-gauge";
import ApiContext from '../context/apiContext';


export default function ParticipationStat({ticket, idSession}) {
  const [numberOfClaimbedTicket, setNumberOfClaimbedTicket] = useState(0);
  const [percentageOfClaimbedTicket, setpercentageOfClaimbedTicket] = useState(0);
  const context = useContext(ApiContext);

  // console.log("dans parti",context.backend.auth)
  useEffect(() => {
    if(idSession != ""){
      ticketValidationstats();
    }
  })

  const ticketValidationstats = async () => {
    let claimbedTicketBySession = context.backend.auth.tickets.get('claimbed-tickets-by-session', {
      Accept: "Application/json",
      "Content-Type": "application/json",
    })
    claimbedTicketBySession.then((response) => {
      if(response.statusCode){
        console.log("vrai", response)
      }else{
        setNumberOfClaimbedTicket(response.length);
        setpercentageOfClaimbedTicket((numberOfClaimbedTicket * 100 / ticket).toFixed(2));
      }
    })
    
  }

  return (
    <div>
      <Gauge
        value={percentageOfClaimbedTicket}
        label={"validation des tickets"}
        width={500}
        height={400}
        color='#2a9d8f'
        backgroundColor="#edf2f4"
        topLabelStyle={{ display: "flex", fontSize: "2em" , fontWeight: "bold"}}
        valueLabelStyle={{fontSize: "4em"}}
        valueFormatter={number => `${number}%`}
      />
    </div>
  );
}