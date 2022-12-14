import React, { useState } from "react";
import { CardSummary } from './CardSummary';
import PieGraph from './Piecharte';
import HalfPie from './Halfpie';


export default function ParticipationStat({sessionStat, totalRegistrations, todaysNumberOfRegistration}) {
  const [data, setData] = useState([{name: 'Tickets assignés', value: sessionStat.sessionTotalClaimbedTicket},{name: 'Tickets livrés', value: sessionStat.sessionTotalDeliveredTicket}])

  return (
    <div style={styles.container}>
      <CardSummary title="Total inscription" totalRegistrations={totalRegistrations} todaysNumberOfRegistration={todaysNumberOfRegistration}/>
      <HalfPie title="stats global" data={data}/>
      <PieGraph title="stats global" data={data}/>
  </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexWrap: "wrap",
  },
  bloc:{
    display: 'flex',
    justifyContent: "space-between"
  }
}