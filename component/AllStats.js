import React, { useEffect, useState } from "react";
import StatsLots from './StatsLots';
import StatInscription from './StatInscription';
import AgeStat from './AgeStat';
import ParticipationStat from './ParticipationStat';
import axios from "axios";

const AllStats = (props) => {
  const [numberTicket, setNumberTicket] = useState(0);
  const [numberDay, setNumberDay] = useState([]);

  useEffect(() => {
    getNumberDay(props.idSession);
  },[props])

 


  const getNumberDay = (idSession) => {
    axios.get("https://api.dev.dsp-archiwebo21-ct-df-an-cd.fr/session/"+idSession)
    .then((response) => {
      setNumberTicket(response.data.limitTicket);
      const endDate = new Date(response.data.endDate);
      const startDate = new Date(response.data.startDate);
      // const timeDiference = endDate.getTime() - startDate.getTime();
      // const dayDiference = (timeDiference / (1000 * 3600 * 24));
      // setNumberDay(dayDiference);
      setNumberDay(getDatesBetweenDates(startDate, endDate))
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
      <ParticipationStat ticket={numberTicket} idSession={props.idSession}/>
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
