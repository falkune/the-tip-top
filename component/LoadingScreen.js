import React from "react"
import Image from 'next/image'
import Link from "next/link"
import logo from "../image/logo.png"
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import { display } from "@mui/system";

const Ticket = () => {
    
  return (
    <div style={styles.load}>   
     <ClipLoader color={"white"} loading={true}  size={250} />
    </div>
  )
}

export default Ticket

const styles = {

    load:{
         width:"100vw",
         height:"100vh",
         display:"flex",
         alignItems:'center',
         justifyContent:"center",
         backgroundColor:"#41D8C2"
    },
}