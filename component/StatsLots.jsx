import React from "react";
import OneLot from "./OneLot";
import Gauge from './gauge';
import PieGraph from './Piecharte';

const StatsLots = ({ allGroup }) => {
  return (
    <div>
      <div style={styles.lot}>
        { 
          allGroup.map((l,index)=> (
            <OneLot
              key={index}
              title={l.groupName}
              deliveredTicket={l.deliveredTicket}
              claimbedTicket={l.claimbedTicket}  
              limitTicket={l.limitTicket}/>
          ))
        }
      </div>

      <div style={styles.pieBloc}>
        { 
          allGroup.map((l,index)=> (
            <Gauge key={index} title={l.groupName} data={[{name: 'Lots délivrés', value: l.deliveredTicket},{name: 'Lots non délivrés', value: l.notDeliveredTicket}]}/>
          ))
        }
      </div>

      <div style={styles.pieBloc}>
        { 
          allGroup.map((l,index)=> (
            <PieGraph key={index} title={l.groupName} data={[{ name: 'Tickets assignés', value: l.claimbedTicket },{ name: 'Tickets non assignés', value: l.notClaimbedTicket}]}/>
          ))
        }
      </div>

      <div style={styles.pieBloc}>
        { 
          allGroup.map((l,index)=> (
            <PieGraph key={index} title={l.groupName} data={[{ name: 'Lots délivrés', value: l.deliveredTicket}, { name: 'Lots non délivrés', value: l.notDeliveredTicket }]}/>
          ))
        }
      </div>
    </div>

  )
}
export default StatsLots;

const styles = {
  lot: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    borderRadius:15,
    flexWrap: "wrap",
    margin: 10,
    boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)"
  },
  pieBloc:{
    width: "100%",
    display: "flex",
    margin: 20,
    borderRadius:15,
    flexWrap: "wrap",
    boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)"
  }
};