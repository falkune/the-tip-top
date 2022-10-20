import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../image/logo.png";
import OneLot from "./OneLot";

const StatsLots = ({ lots }) => {
  const lots = [
    { now: 200, max: 1000, title: " Infuseur à thé", color: "#41C2B0" },

    { now: 3600, max: 5000, title: "Boite de 100g d’un thé détox " },

    {
      now: 4500,
      max: 10000,
      title: "Boite de 100g d’un thé signature",
      color: "#41C2B0",
    },

    { now: 5000, max: 1000000, title: "Coffret découverte" },
  ];

    const lots = [
      {
        now:200,
        max:1000,
        title:" Infuseur à thé",
        color:"#41C2B0",
        value: 19
      },
      {
        now:3600,
        max:5000,
        title:"Boite de 100g d’un thé détox ",
        value: 21
      }, 
      {
        now:4500,
        max:10000,
        title:"Boite de 100g d’un thé signature",
        color:"#41C2B0",
        value: 32
      },
      {
        now:5000,
        max:1000000,
        title:'Coffret découverte',
        value: 56
      } 
    ] 
   
  return (
  <div style={styles.lot} >
    { 
      lots.map((l,index)=> (
        <Speedometer 
          key={index}
          title={l.title}
          now={l.now}
          max={l.max}
          image={l.image}
          value={l.value}/> ))
    }
  </div>

  )}
 

const styles = {
  lot: {
    display: "flex",
    padding: 15,
    width: "100%",
    marginBottom: 25,
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
};
