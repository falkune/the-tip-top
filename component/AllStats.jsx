import React, { useEffect, useState, useContext } from "react";
import StatsLots from './StatsLots';
import StatInscription from './StatInscription';
import ParticipationStat from './ParticipationStat';
import ApiContext from '../context/apiContext';
import { statLots } from '../fonctions/tickets';
import AgeStat from './AgeStat';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const AllStats = ({ idSession }) => {
  const [sessionStat, setSessionStats] = useState({});
  const [allGroup, setAllGroup] = useState(null);
  const context = useContext(ApiContext);

  useEffect(() => {
    if (idSession) {
      getAsignTicket(context, idSession);
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

  if (allGroup) {
    return (
      <div style={styles.stat}>
        <ParticipationStat sessionStat={sessionStat} idSession={idSession} />
        <StatInscription idSession={idSession} />
        <StatsLots allGroup={allGroup} />
      </div>
    )
  } else {
    return (
      <Box style={styles.box} sx={{ width: '100%' }}>
        <CircularProgress color="success" />
      </Box>
    )
  }
}
export default AllStats;

const styles = {
  stat: {
    background: "none",
  },
  box: {
    display: "flex",
    justifyContent: "center"
  }
}