import React from "react"
import Image from 'next/image'
import tea1 from "../image/tea1.png"
import tea2 from "../image/tea2.png"
import tea3 from "../image/tea3.png"
import tea4 from "../image/tea4.png"

const Lot = (props) => {
  return (
    <div style={styles.lot} className="pulse">   
       <Image src={props.image} width="150" height="150" objectFit='contain' alt="lots"/> 
            <p>
            {props.name}        
            </p>
        </div>
  )
}

export default Lot

const styles = {

  lot : {
    backgroundColor:" white",
    margin: 10,
    width: 250,
    height: 250,
    padding: 5,
    color :" #38870D",
    boxShadow: "0px 0px 0px 5px rgba(255,255,255,0.46)",
    borderRadius: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }
}