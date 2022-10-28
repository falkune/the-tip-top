import React, { useEffect, useState } from "react";
import StatsLots from './StatsLots';
import StatInscription from './StatInscription';
import LoStats from './LotStats';
import ParticipationStat from './ParticipationStat';
import axios from "axios"

const AllStats = (props) => {
  const tauxDeparticipation = 44;
  const [numberDay, setNumberDay] = useState(0);
  
  useEffect(() => {
    console.log(numberDay)
    getNumberDay(props.idSession)
  },[numberDay])

  const getNumberDay = (idSession) => {
    console.log(idSession)
    axios.get("https://api.dev.dsp-archiwebo21-ct-df-an-cd.fr/session/"+idSession+"/")
    .then((response) => {
      const endDate = new Date(response.data.endDate);
      const startDate = new Date(response.data.startDate);
      const timeDiference = endDate.getTime() - startDate.getTime();
      const dayDiference = timeDiference / (1000 * 3600 * 24);
      setNumberDay(dayDiference);
    })
  }

  return (
    <div style={styles.stat}>
      <ParticipationStat val={tauxDeparticipation} idSession={props.idSession}/>
      <StatInscription days={25}/>
      <StatsLots/>
      <LoStats data={[25, 9, 7, 13]}/>
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

