import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

export default function StatInscription({ days,  idSession}) {
  const [labels, setLabels] = useState([]);
  const [registration, setRegistration] = useState([]);

  useEffect(() => {
    if(localStorage.getItem('token')){
      getRegistrationByDay();
    }
  },[days]);

  const getRegistrationByDay = async () => {
    const labels = Array();
    for(let i = 1; i <= days; i++){
      labels.push("Jour "+i)
    }
    setLabels(labels);
    const accessToken = localStorage.getItem('token');
    const url = "https://api.dev.dsp-archiwebo21-ct-df-an-cd.fr/user/registration-by-day"
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
    <div className="App">
      <Line height={80} data={data} options={options}/>
    </div>
  );
}
