import React, { useEffect, useState } from "react";
import StatsLots from './StatsLots';
import StatInscription from './StatInscription';
<<<<<<< HEAD
import AgeStat from './AgeStat';
import ParticipationStat from './ParticipationStat';
import axios from "axios";
import Iscrit from './Inscrit';

const AllStats = (props) => {
  const tauxDeparticipation = 44;
  const [numberDay, setNumberDay] = useState(0);
  
  useEffect(() => {
    getNumberDay(props.idSession)
  },[props])

  const getNumberDay = (idSession) => {
    axios.get("https://api.dev.dsp-archiwebo21-ct-df-an-cd.fr/session/"+idSession)
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
      <StatInscription days={numberDay} idSession={props.idSession}/>
      <StatsLots/>
      <AgeStat data={[25, 9, 7, 13]}/>
    </div>
  )
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


  const AllStats = ({ lots, session }) => {
    return (
      <div style={styles.stat}>
        <ParticipationStat val={tauxDeparticipation}/>
        <StatInscription data={inscritParJour}/>
        <StatsLots/>
        <LoStats data={[25, 9, 7, 13]}/>
      </div>
    )
  }

>>>>>>> a584e821a7aee8a69ef870781d3a7bb3e50d105c
}
export default AllStats;

const styles = {
  stat:{
    backgroundColor:"#F1F1F1",
    padding:25
  }
}
