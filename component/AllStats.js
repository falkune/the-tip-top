import React, { useEffect, useState } from "react";
import StatsLots from './StatsLots';
import StatInscription from './StatInscription';
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
    </div>
  )
}

export default AllStats

const styles = {
  stat:{
    backgroundColor:"#F1F1F1",
    padding:25
  }
}