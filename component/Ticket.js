import React from "react"
import Image from 'next/image'
import Link from "next/link"
import logo from "../image/logo.png"

const Ticket = () => {
  return (
    <div style={styles.ticket}>   
      <div style={styles.bloc}>
          <p>27/01/2022</p>
          <p>N 215414789</p>
      </div>
      <div style={styles.bloc2}>
        <p>1 thé infusion</p>
        <p>Jack Atlas</p>     
      </div>
    </div>
  )
}

export default Ticket

const styles = {

    ticket:{
        width:"100%",
        backgroundColor:"#40EFD7",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        color:"white",
        margin:10,
        padding:8
    },
    bloc:{
        display:"flex",
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"center",
        width:"50%"

    },

    bloc2:{
        display:"flex",
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"center",
        borderLeft:"solid 1px white",
        width:"50%"


    },
 
 

 





}