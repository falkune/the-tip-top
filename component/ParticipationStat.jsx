import React from "react";
import { CardSummary } from './CardSummary';
import PieGraph from './Piecharte';
import HalfPie from './Halfpie';


export default function ParticipationStat({ sessionStat, totalRegistrations, todaysNumberOfRegistration }) {

  return (
    <div style={styles.container}>
      <CardSummary title="Total inscription" totalRegistrations={totalRegistrations} todaysNumberOfRegistration={todaysNumberOfRegistration} />
      <HalfPie title="stats global" data={[{ name: 'Tickets assignés', value: sessionStat.sessionTotalClaimbedTicket }, { name: 'Tickets non assignés', value: sessionStat.sessionTotalNotClaimbedTicket }]} />
      <PieGraph title="stats global" data={[{ name: 'Tickets assignés', value: sessionStat.sessionTotalClaimbedTicket }, { name: 'Tickets non assignés', value: sessionStat.sessionTotalNotClaimbedTicket }]} />
      <PieGraph title="stats global" data={[{ name: 'Tickets livrés', value: sessionStat.sessionTotalDeliveredTicket }, { name: 'Tickets non livrés', value: sessionStat.sessionTotalNotDeliveredTicket }]} />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexWrap: "wrap",
  },
  bloc: {
    display: 'flex',
    justifyContent: "space-between"
  }
}