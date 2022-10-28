import React from "react";
<<<<<<< HEAD
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
=======
import Image from "next/image";
import tea1 from "../image/tea1.png";
import tea2 from "../image/tea2.png";
import tea3 from "../image/tea3.png";
import tea4 from "../image/tea4.png";
import { fontSize } from "@mui/system";

const OneLot = (props) => {
  return (
    <div style={styles.lot}>
      <h2 style={styles.h2}>{props.title} </h2>
      <h3 style={styles.h3}>{props.now}</h3>
      <small style={styles.small}>sur {props.max}</small>
      <p style={{ margin: 5, color: "white", padding: 8 }}>Ticket validés </p>
    </div>
  );
};

export default OneLot;

const styles = {
  lot: {
    textAlign: "center",
    display: "flex",
    width: "22%",
    flexDirection: "column",
    justifyContent: "center",
    margin: 5,
    background: "#41D8C2",
    borderRadius: 8,
    padding: 15,
    height: 300,
    color: "white",
  },
  h3: {
    fontSize: 40,
    margin: 2,
    color: "white",
  },
  h2: {
    fontSize: 20,
    opacity: 0.8,
    margin: 3,
    color: "white",
  },
  small: {
    fontSize: 18,
    color: "white",
    opacity: 0.9,
  },
  title: {
    fontSize: 20,
    color: "white",
  },
};
>>>>>>> a584e821a7aee8a69ef870781d3a7bb3e50d105c
