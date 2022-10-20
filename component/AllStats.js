import React, { useEffect, useState } from "react";
import StatsLots from './StatsLots';
import StatInscription from './StatInscription';
<<<<<<< HEAD
import AgeStat from './AgeStat';
import ParticipationStat from './ParticipationStat';
import axios from "axios";

const AllStats = (props) => {
  const [numberTicket, setNumberTicket] = useState(0);
  const [numberDay, setNumberDay] = useState(0);
  
  useEffect(() => {
    getNumberDay(props.idSession)
  },[props])

  const getNumberDay = (idSession) => {
    axios.get("https://api.dev.dsp-archiwebo21-ct-df-an-cd.fr/session/"+idSession)
    .then((response) => {
      setNumberTicket(response.data.limitTicket);
      const endDate = new Date(response.data.endDate);
      const startDate = new Date(response.data.startDate);
      const timeDiference = endDate.getTime() - startDate.getTime();
      const dayDiference = timeDiference / (1000 * 3600 * 24);
      setNumberDay(dayDiference);
    })
  }

  return (
    <div style={styles.stat}>
      <ParticipationStat ticket={numberTicket} idSession={props.idSession}/>
      <StatInscription days={numberDay} idSession={props.idSession}/>
      <StatsLots idSession={props.idSession}/>
      <AgeStat data={[25, 9, 7, 13]}/>
=======
import LoStats from './LotStats';
import ParticipationStat from './ParticipationStat';
import axios from "axios"

const AllStats = (props) => {
  const tauxDeparticipation = 44;
  const [inscritParJour, setInscitParJour] = useState([]);
  

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    
    getStat(accessToken)

  },[])

  const getStat = (token) => {
    const url = "https://api.dev.dsp-archiwebo21-ct-df-an-cd.fr/user/registration-by-day"
    axios.get(url, { headers: { "Authorization" : `Bearer ${token}` }})
    .then(res => {
      setInscitParJour(res.data)
    })
    .catch((error) => {
      console.log(error)
    });
  }


  return (
    <div style={styles.stat}>
      <ParticipationStat val={tauxDeparticipation}/>
      <StatInscription data={inscritParJour}/>
      <StatsLots/>
      <LoStats data={[25, 9, 7, 13]}/>
>>>>>>> fe7b512 (pull some update)
    </div>
  )
}
export default AllStats;

const styles = {
  stat:{
    backgroundColor:"#F1F1F1",
    padding:25
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> fe7b512 (pull some update)
