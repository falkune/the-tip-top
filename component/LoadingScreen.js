import React from "react"
import ClipLoader from "react-spinners/ClipLoader";

const Ticket = () => {
    
  return (
    <div style={styles.load}>   
     {/* <ClipLoader color={"white"} loading={true}  size={250} /> */}
     <div className="lds-hourglass"></div>
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
    },
}