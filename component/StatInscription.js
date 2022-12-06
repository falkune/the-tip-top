import React, { useEffect, useState, useContext } from "react";
import ApiContext from '../context/apiContext';
import Cookies from 'js-cookie';
import Exemple  from "./LineChart";
import {notifier} from '../fonctions/utils';

export default function StatInscription({ days,  idSession}) {
  const [registration, setRegistration] = useState([]);
  const context = useContext(ApiContext);

  useEffect(() => {
    if(idSession != ""){
      getRegistrationByDay();
    }
  },[days]);

  const getRegistrationByDay = async () => {
    let getregistrationByDay = context.backend.auth.users.get('registration-by-day/'+idSession)
    getregistrationByDay.then((response) => {
      if(response.statusCode){
        notifier(response.message)
      }else{
        setRegistration(response)
      }
    })
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