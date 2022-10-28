import React from "react";
import Gauge from "react-svg-gauge";

export default function OneLot({now, max, title, value}) {
  return (
    <div style={styles.lot}>
      <h2 style={styles.h2}>{title} </h2>
      <h3 style={styles.h3}>{now}</h3>
      <small style={styles.small}>sur {max}</small>
      <p style={{margin:5,color:"white",padding:8}}>Ticket validés </p>
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
    background:"#41D8C2",
    borderRadius:8,
    padding:15,
    color:"white"
  },
  h3:{
    fontSize:40,
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