import React from "react";
import Cookies from 'js-cookie';
import LineGraph  from "./LineChart";

export default function StatInscription({registration}) {
  return (
    <div style={styles.container}>
      <h3 style={{textAlign:"center", color: "#003e1f"}}>Nombre d'inscription par jour</h3>
      <LineGraph data={registration} width={Cookies.get('width')}/>
    </div>
  );
}

const styles = {
  container:{
    width: "100%",
    borderRadius:15,
    height: 600,
    background: "#FFFFFF",
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
    paddingTop: "35px",
    margin: "20px 5px"
  }
}