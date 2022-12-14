import React, { useEffect, useState, useContext } from "react";
import ApiContext from '../context/apiContext';
import { getuserBySession } from '../fonctions/users';
import { CardSummary } from './CardSummary';
import PieGraph from './Piecharte';
import HalfPie from './Halfpie';
import {notifier, refreshToken} from '../fonctions/utils';


export default function ParticipationStat({sessionStat, idSession }) {
  const [users, setUser] = useState(0);
  const [data, setData] = useState([{name: 'Tickets assignés', value: sessionStat.sessionTotalClaimbedTicket},{name: 'Tickets livrés', value: sessionStat.sessionTotalDeliveredTicket}])
  const context = useContext(ApiContext);

  useEffect(() => {
    if (idSession != "") {
      getUsers(context, idSession)
    }
  }, [idSession]);
  
  const getUsers = () => {
    getuserBySession(context, idSession)
    .then((response) => {
      if(response.statusCode){
        refreshToken(response, context);
      }else{
        setUser(response.length);
      }
    })
    .catch(() => notifier())
  }


  return (
    <div style={styles.container}>
      <CardSummary title="Total inscription" totalInscrit={users} totalDay={2}/>
      <HalfPie title="stats global" data={data}/>
      
      <PieGraph title="stats global" data={data}/>
  </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexWrap: "wrap",
  },
  bloc:{
    display: 'flex',
    justifyContent: "space-between"
  }
}