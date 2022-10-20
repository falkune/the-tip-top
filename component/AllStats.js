<<<<<<< HEAD
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
=======
import React from "react";
import StatsLots from "./StatsLots";
import StatInscription from "./StatInscription";
import LoStats from "./LotStats";
>>>>>>> 9b2aab2 (update route dashboard)

const AllStats = ({ lots, session }) => {
  return (
    <div style={styles.stat}>
<<<<<<< HEAD
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
=======
      <StatInscription
        data={[
          14, 9, 7, 13, 11, 6, 18, 11, 3, 12, 18, 58, 25, 58, 47, 12, 15, 18,
          16, 25, 36, 41, 62,
        ]}
        session={session}
      />
      <StatsLots llots={lots} />
      <LoStats data={[25, 9, 7, 13]} />
    </div>
  );
};

export default AllStats;

const styles = {
  stat: {
    backgroundColor: "#F1F1F1",
    padding: 25,
  },
};
>>>>>>> 9b2aab2 (update route dashboard)
