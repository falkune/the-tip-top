import React, { useEffect, useState, useContext } from "react";
import ApiContext from '../context/apiContext';
import { notifier, refreshToken } from '../fonctions/utils';
import { claimedTickeBySession } from '../fonctions/tickets';
import { CardSummary } from './CardSummary';
import PieGraph from './Piecharte';
import HalfPie from './Halfpie';


export default function ParticipationStat({ claimbedTicket, deliveredTicket, idSession }) {
  const [numberOfClaimbedTicket, setNumberOfClaimbedTicket] = useState(0)
  const context = useContext(ApiContext);

  useEffect(() => {
    if (idSession != "") {
      validationTicketsStats();
    }
  }, [idSession]);

  const validationTicketsStats = () => {
    claimedTickeBySession(context, idSession)
      .then((response) => {
        if (response.statusCode) {
          refreshToken(response, context);
        } else {
          setNumberOfClaimbedTicket(response.length);
        }
      })
      .catch(() => notifier())
  }

  return (
    <div style={styles.container}>
      <CardSummary title="Total inscription" totalInscrit={1024} totalDay={27}/>
      <HalfPie title="stats global" data={[{name: 'Tickets assignés', value: claimbedTicket},{name: 'Tickets livrés', value: deliveredTicket}]}/>
      <PieGraph title="stats global" data={[{ name: 'Tickets assignés', value: claimbedTicket },{ name: 'Tickets livrés', value: deliveredTicket }]}/>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: "space-around",
    flexWrap: "wrap",
  }
}