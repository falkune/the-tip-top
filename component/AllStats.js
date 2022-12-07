import React, { useEffect, useState, useContext } from "react";
import StatsLots from './StatsLots';
import StatInscription from './StatInscription';
import AgeStat from './AgeStat';
import ParticipationStat from './ParticipationStat';
import ApiContext from '../context/apiContext';
import { getDaysBetweenTwoDates } from "../fonctions/utils";
import { getSessionDetails } from '../fonctions/sessions';

const AllStats = (props) => {
  const [limitTicket, setLimitTicket] = useState(0);
  const [numberDay, setNumberDay] = useState([]);
  const context = useContext(ApiContext);

  useEffect(() => {
    getDetailsSession(props.idSession);
  },[props.idSession])


  const getDetailsSession = (idSession) => {
    getSessionDetails(context, idSession)
    .then((response) => {
      setLimitTicket(response.limitTicket)
      setNumberDay(getDaysBetweenTwoDates(new Date(response.endDate), new Date(response.startDate)))
    })
  }

  return (
    <div style={styles.stat}>
      <ParticipationStat ticket={limitTicket} idSession={props.idSession}/>
      <StatInscription days={numberDay} idSession={props.idSession}/>
      <StatsLots idSession={props.idSession}/>
      <AgeStat/>
    </div>
  )
}
export default AllStats;

const styles = {
  stat:{
    backgroundColor:"#F1F1F1",
    padding:25
  }
}