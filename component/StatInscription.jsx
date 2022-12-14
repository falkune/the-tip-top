import React, { useEffect, useState, useContext } from "react";
import ApiContext from '../context/apiContext';
import Cookies from 'js-cookie';
import LineGraph  from "./LineChart";
import {notifier, refreshToken} from '../fonctions/utils';
import { getRegistrationByDayBySession } from '../fonctions/users';

export default function StatInscription({ idSession}) {
  const [registration, setRegistration] = useState([]);
  const context = useContext(ApiContext);

  useEffect(() => {
    getRegistrationByDay();
  },[idSession]);

  const getRegistrationByDay = async () => {
    getRegistrationByDayBySession(context, idSession)
    .then((response) => {
      if(response.statusCode){
        refreshToken(response, context);
      }else{
        setRegistration(response);
      }
    })
    .catch(() => notifier())
  }
  
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