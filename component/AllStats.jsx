import React, { useEffect, useState, useContext } from "react";
import StatsLots from './StatsLots';
import StatInscription from './StatInscription';
import ParticipationStat from './ParticipationStat';
import ApiContext from '../context/apiContext';
import { statLots } from '../fonctions/tickets';
import {notifier, refreshToken} from '../fonctions/utils';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { getRegistrationByDayBySession } from '../fonctions/users';

const AllStats = ({ idSession }) => {
  const [sessionStat, setSessionStats] = useState({});
  const [allGroup, setAllGroup] = useState(null);
  const [registration, setRegistration] = useState([]);
  const [totalRegistrations, setTotalRegistrations] = useState(0);
  const [todaysNumberOfRegistration, setTodaysNumberOfRegistration] = useState(0)
  const context = useContext(ApiContext);

  useEffect(() => {
    if (idSession) {
      getAsignTicket(context, idSession);
      getRegistrationByDay(context, idSession);
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
      .catch((error) => console.log(""))
  }

  const getRegistrationByDay = (context, idSession) => {
    getRegistrationByDayBySession(context, idSession)
    .then((response) => {
      if(response.statusCode){
        refreshToken(response, context);
      }else{
        setRegistration(response.registrationsByDay);
        setTotalRegistrations(response.totalRegistrations)
        setTodaysNumberOfRegistration(response.todaysNumberOfRegistration);
      }
    })
    .catch(() => notifier())
  }

  if (allGroup) {
    return (
      <div style={styles.stat}>
        <ParticipationStat sessionStat={sessionStat} totalRegistrations={totalRegistrations} todaysNumberOfRegistration={todaysNumberOfRegistration} />
        <StatInscription registration={registration} />
        <StatsLots allGroup={allGroup} />
      </div>
    )
  } else {
    return (
      <Box style={styles.box} sx={{ width: '100%' }}>
        <LinearProgress color="success"/>
      </Box>
    )
  }
}
export default AllStats;

const styles = {
  stat:{
    background:"none",
    minHeight:"100vh"
  }
}