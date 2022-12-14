import React, { useEffect, useState, useContext } from "react";
import StatsLots from './StatsLots';
import StatInscription from './StatInscription';
import ParticipationStat from './ParticipationStat';
import ApiContext from '../context/apiContext';
import { getDaysBetweenTwoDates } from "../fonctions/utils";
import { getSessionDetails } from '../fonctions/sessions';
import { statLots } from '../fonctions/tickets';
import AgeStat from './AgeStat';

const AllStats = ({idSession}) => {
  const [numberDay, setNumberDay] = useState([]);
  const [sessionStat, setSessionStats] = useState({});
  const [allGroup, setAllGroup] = useState([]);
  const context = useContext(ApiContext);

  useEffect(() => {
    if(idSession){
      getAsignTicket(context, props.idSession);
    }
    // getDetailsSession(context, props.idSession);
  }, [idSession])

  // const getDetailsSession = (context, idSession) => {
  //   console.log("detail session")
  //   getSessionDetails(context, idSession)
  //     .then((response) => {
  //       setNumberDay(getDaysBetweenTwoDates(new Date(response.endDate), new Date(response.startDate)))
  //     })
  // }

  const getAsignTicket = (context, idSession) => {
    statLots(context, idSession)
      .then((response) => {
        if (!response.statusCode) {
          setSessionStats(response.sessionStats)
          setAllGroup(response.groupStats);
        
        }
        
      })
      .catch((error) => console.log(error))
  }

  return (
    <div style={styles.stat}>
      <ParticipationStat sessionStat={sessionStat} idSession={idSession}/>
      <StatInscription days={numberDay} idSession={props.idSession} />
      <StatsLots allGroup={allGroup}/>
    </div>
  )
}
export default AllStats;

const styles = {
  stat:{
    background:"none",
  }
}