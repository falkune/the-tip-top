import React, { useEffect, useState, useContext } from "react";
import StatsLots from './StatsLots';
import StatInscription from './StatInscription';
import ParticipationStat from './ParticipationStat';
import ApiContext from '../context/apiContext';
import { getDaysBetweenTwoDates } from "../fonctions/utils";
import { getSessionDetails } from '../fonctions/sessions';
import { statLots } from '../fonctions/tickets';
import AgeStat from './AgeStat';

const AllStats = (props) => {
  const [numberDay, setNumberDay] = useState([]);
  const [claimbedTicket, setClaimbedTicket] = useState(0)
  const [deliveredTicket, setDeliveredTicket] = useState(0)
  const context = useContext(ApiContext);

  useEffect(() => {
    getAsignTicket(context, props.idSession);
    getDetailsSession(context, props.idSession);
  }, [props.idSession])

  const getDetailsSession = (context, idSession) => {
    getSessionDetails(context, idSession)
      .then((response) => {
        setNumberDay(getDaysBetweenTwoDates(new Date(response.endDate), new Date(response.startDate)))
      })
  }

  const getAsignTicket = (context, idSession) => {
    statLots(context, idSession)
      .then((response) => {
        if (!response.statusCode) {
          console.log(response)
          setClaimbedTicket(response.sessionStats.sessionTotalClaimbedTicket)
          setDeliveredTicket(response.sessionStats.sessionTotalDeliveredTicket)
        }
      })
  }

  return (
    <div style={styles.stat}>
      <ParticipationStat claimbedTicket={claimbedTicket} deliveredTicket={deliveredTicket} idSession={props.idSession}/>
      <StatInscription days={numberDay} idSession={props.idSession} />
      <StatsLots idSession={props.idSession} />
    </div>
  )
}
export default AllStats;

const styles = {
  stat:{
    background:"none",
  }
}