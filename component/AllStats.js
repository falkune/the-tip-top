import React, { useEffect, useState, useContext } from "react";
import StatsLots from './StatsLots';
import StatInscription from './StatInscription';
import AgeStat from './AgeStat';
import ParticipationStat from './ParticipationStat';
import ApiContext from '../context/apiContext';

const AllStats = (props) => {
  const [limitTicket, setLimitTicket] = useState(0);
  const [numberDay, setNumberDay] = useState([]);
  const context = useContext(ApiContext);

  useEffect(() => {
    getSessionDetails(props.idSession);
  },[props.idSession])


  const getSessionDetails = (idSession) => {
    context.backend.api.sessions.get(idSession)
    .then((response) => {
      if(response.statusCode){
        console.log("statusCode ", response)
      }else{
        setLimitTicket(response.limitTicket)
        setNumberDay(getDatesBetweenDates(new Date(response.endDate), new Date(response.startDate)))
      }
    })
  }
  const getDatesBetweenDates = (startDate, endDate) => {
    let dates = []
    const theDate = new Date(startDate)
    while (theDate < new Date(endDate)) {
      dates = [...dates, new Date(theDate)]
      theDate.setDate(theDate.getDate() + 1);
    }
    dates = [...dates, new Date(endDate)]
    return dates
  }

  return (
    <div style={styles.stat}>
      <ParticipationStat ticket={limitTicket} idSession={props.idSession}/>
      <StatInscription days={numberDay} idSession={props.idSession}/>
      <StatsLots idSession={props.idSession}/>
      <AgeStat data={[25, 9, 7, 13]}/>
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