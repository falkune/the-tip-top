import React from "react"
import Image from 'next/image'
import tea1 from "../image/tea1.png"
import tea2 from "../image/tea2.png"
import tea3 from "../image/tea3.png"
import tea4 from "../image/tea4.png"
import { fontSize } from "@mui/system"

const OneLot = (props) => {
  return (
    <div style={styles.lot}>
        <h2 style={styles.h2}>{props.title} </h2>
        <h3 style={styles.h3}>{props.now}</h3>
        <small style={styles.small}>sur {props.max}</small>
        <p style={{margin:5,color:"white",padding:8}}>Ticket validés </p>
    </div>
  )
}

export default OneLot

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
        height:300,
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