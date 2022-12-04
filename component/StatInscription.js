import React, { useEffect, useState, useContext } from "react";
// import { Line } from "react-chartjs-2";
import axios from "axios";
import ApiContext from '../context/apiContext';
import Cookies from 'js-cookie';
import Exemple  from "./LineChart";

export default function StatInscription({ days,  idSession}) {
  const [labels, setLabels] = useState([]);
  const [registration, setRegistration] = useState([]);

  const context = useContext(ApiContext);

  useEffect(() => {
    if(idSession != ""){
      getRegistrationByDay();
    }
  },[days]);

  const getRegistrationByDay = async () => {
    const labels = Array();
    for(let i = 1; i <= days; i++){
      labels.push("Jour "+i)
    }
    setLabels(labels);
    const registrationByDay = Array();
    let getregistrationByDay = context.backend.auth.users.get('registration-by-day/'+idSession)
    getregistrationByDay.then((response) => {
      if(response.statusCode){
        console.log("faux =>", response)
      }else{
        setRegistration(response)
        console.log("vrai =>",response)
      }
    })
  }

  const getRegistrationByDayold = async () => {
    const labels = Array();
    for(let i = 1; i <= days; i++){
      labels.push("Jour "+i)
    }
    setLabels(labels);
    const accessToken = Cookies.get('authToken');
    const url = "https://api.dev.dsp-archiwebo21-ct-df-an-cd.fr/user/registration-by-day/"+idSession
    const response = await axios.get(url, { headers: { "Authorization" : `Bearer ${accessToken}` }})
    const registrationByDay = Array();
    response.data.forEach(e => {
      registrationByDay.push(e.nomberOfRegitration)
    })
    setRegistration(registrationByDay)
  }

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Nombre d'inscrit",
        data: registration,
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      }
    ]
  };
      
  const options = {
    scales: {
      yAxes: {
        ticks: {
          display: true,
        }
      },
      xAxes: {
        ticks: {
          display: true,
        }
      }
    }
  };

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