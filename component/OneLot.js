import React from "react";
import Gauge from "react-svg-gauge";

export default function OneLot({now, max, title, value}) {
  return (
    <div style={styles.lot}>
      <h2 style={styles.h2}>{title} </h2>
      <h3 style={styles.small}>Ticket validés : {now}</h3>
      <small style={styles.small}>Total ticket : {max}</small>
      <Gauge
        value={value}
        label=""
        width={350}
        height={200}
        color='#ef233c'
        backgroundColor="#ffffff"
        topLabelStyle={{ display: "flex", fontSize: "2em" , fontWeight: "bold"}}
        valueLabelStyle={{fontSize: "2em"}}
        valueFormatter={number => `${number}%`}
      />
    </div>
  );
}

const styles = {
  lot:{
    textAlign:"center",
    display:"flex",
    width:"22%",
    flexDirection:"column",
    justifyContent:"center",
    margin:5,
    background:" #02558D",
    borderRadius:8,
    padding:15,
    color:"white"
  },
  h3:{
    fontSize:2,
    margin:2,
    color:"white"
  },
  h2:{
    fontSize:20,
    opacity:0.8,
    margin:3,
    color:"white"

  },
  small:{
   fontSize:18,
   color:"white",
   opacity:0.9

  },
 title:{
  fontSize:20,
  color:"white"
 }
}