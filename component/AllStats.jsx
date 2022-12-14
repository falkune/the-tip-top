import React, { useEffect, useState, useContext } from "react";
import StatsLots from './StatsLots';
import StatInscription from './StatInscription';
import ParticipationStat from './ParticipationStat';
import ApiContext from '../context/apiContext';
import { statLots } from '../fonctions/tickets';

const AllStats = ({idSession}) => {
  const [numberDay, setNumberDay] = useState([]);
  const [sessionStat, setSessionStats] = useState({});
  const [allGroup, setAllGroup] = useState([]);
  const context = useContext(ApiContext);

  useEffect(() => {
    if(idSession){
      getAsignTicket(context,idSession);
    }
    
  }, [idSession])

  

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
      <StatInscription idSession={idSession} />
      <StatsLots allGroup={allGroup}/>
    </div>
  )
}
export default AllStats;

const styles = {
  stat:{
    background:"none",
    minHeight:"100vh"
  }
}