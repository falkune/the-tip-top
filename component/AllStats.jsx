import React, { useEffect, useState, useContext } from "react";
import StatsLots from './StatsLots';
import StatInscription from './StatInscription';
import ParticipationStat from './ParticipationStat';
import ApiContext from '../context/apiContext';
import { getDaysBetweenTwoDates } from "../fonctions/utils";
import { getSessionDetails } from '../fonctions/sessions';
import {statLots} from '../fonctions/tickets';
import AgeStat from './AgeStat';

const AllStats = (props) => {
  const [limitTicket, setLimitTicket] = useState(0);
  const [numberDay, setNumberDay] = useState([]);
  const [asignTicket, setAsignTicket] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [percentageGenerate, setPercentageGenerate] = useState(0);
  const context = useContext(ApiContext);

  useEffect(() => {
    setAsignTicket(0)
    getAsignTicket(context, props.idSession);
    getDetailsSession(context, props.idSession);
  },[props.idSession])

  const getDetailsSession = (context, idSession) => {
    getSessionDetails(context, idSession)
    .then((response) => {
      setLimitTicket(response.limitTicket)
      setNumberDay(getDaysBetweenTwoDates(new Date(response.endDate), new Date(response.startDate)))
    })
  }

  const getAsignTicket = (context, idSession) => {
    statLots(context, idSession)
    .then((response) => { 
      if(!response.statusCode){
        setAsignTicket(response.sessionStats.sessionTotalNumberOfTickets)
        setPercentage(response.sessionStats.sessionTotalNumberOfTicketsPercentage);
        setPercentageGenerate(response.sessionStats.sessionClaimbedTicketPercentage)
      }
    })
  }

  return (
    <div style={styles.stat}>
      <ParticipationStat asignTicket={asignTicket} limitTicket={limitTicket} percentage={percentage} percentageGenerate={percentageGenerate} idSession={props.idSession}/>
      <StatInscription days={numberDay} idSession={props.idSession}/>
      <StatsLots idSession={props.idSession}/>
      <AgeStat/>
    </div>
  )
}
export default AllStats;

const styles = {
  stat:{
    background:"none",
  }
}