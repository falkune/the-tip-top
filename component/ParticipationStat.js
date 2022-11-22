import React, {useEffect, useState} from "react";
import Gauge from "react-svg-gauge";
import axios from "axios";

export default function ParticipationStat({ticket, idSession}) {
  const [numberOfClaimbedTicket, setNumberOfClaimbedTicket] = useState(0);
  const [percentageOfClaimbedTicket, setpercentageOfClaimbedTicket] = useState(0);
  useEffect(() => {
    if(idSession != ""){
      ticketValidationstats();
    }
  })

  const ticketValidationstats = async () => {
    const accessToken = localStorage.getItem('token');
    const body = {
      idSession : idSession,
    }
    const config = {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
    const url = "https://api.dev.dsp-archiwebo21-ct-df-an-cd.fr/ticket/claimbed-tickets-by-session/"
    const response = await axios.post(url, body, config)
    setNumberOfClaimbedTicket(response.data.length);
    setpercentageOfClaimbedTicket((numberOfClaimbedTicket * 100 / ticket).toFixed(2));
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