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
<<<<<<< HEAD
<<<<<<< HEAD
         backgroundColor:"#41D8C2"
    },
=======
         backgroundColor:"#40EFD7"
    },
<<<<<<< HEAD
 
>>>>>>> a4a8112 (add loader)
=======
>>>>>>> 76f6607 (fix bug)
=======
         backgroundColor:"#41D8C2"
    },
>>>>>>> a584e821a7aee8a69ef870781d3a7bb3e50d105c
}