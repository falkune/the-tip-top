import React, { useEffect, useState, useContext } from "react";
import ApiContext from '../context/apiContext';
import Cookies from 'js-cookie';
import Exemple  from "./LineChart";
import {notifier, refreshToken} from '../fonctions/utils';
import { getRegistrationByDayBySession } from '../fonctions/users';

export default function StatInscription({ days,  idSession}) {
  const [registration, setRegistration] = useState([]);
  const context = useContext(ApiContext);

  useEffect(() => {
    if(idSession != ""){
      getRegistrationByDay();
    }
  },[days]);

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
    <div style={styles.containe}>
      <h3 style={{textAlign:"center"}}>Nombre d'inscription par jour</h3>
      <Exemple data={registration} width={Cookies.get('width')}/>
    </div>
  );
}

const styles = {
  containe:{
    width: "100%",
    height: 600
  }
}