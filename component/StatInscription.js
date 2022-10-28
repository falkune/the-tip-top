<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD
    <div className="App">
      <Line height={80} data={data} options={options}/>
=======
    <div style={{backgroundColor:'white',padding:25,borderRadius:10}}>
      {/* <h2 style={{textAlign:"center",fontSize:25,fontWeight:"bold",color:"#41D8C2"}}>Souscriptions</h2>
      <div style={{
        padding:15,
        margin:8,
        textAlign:"center",
        borderRadius:8,
        color:"white",
        backgroundColor:"#41D8C2",
        maxWidth:350}}> 
        <p style={{fontSize:50,fontWeight:"bold",marginBottom:0}}>{Math.round(TauxP)}%</p>
        <small style={{opacity:0.5}}>taux de participation</small>
        <p>{stats.total} participations</p>
        <p>sur {stats.totalMax}</p>
      </div> */}
      <canvas ref={canvasEl} height={90} width={500}/>
>>>>>>> fe7b512 (pull some update)
=======
import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
=======
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
>>>>>>> ac3cdf0 (updating StatInscription and AgeStat)
import axios from "axios";

export default function Iscrit({ days,  idSession}) {
    
    const [labels, setLabels] = useState([]);
    const [registration, setRegistration] = useState([]);

    useEffect(() => {
      getRegistrationByDay();
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

<<<<<<< HEAD
    const config = {
      responsive: true,
      type: "line",
      data: data,
    };

    const myLineChart = new Chart(ctx, config);

    return function cleanup() {
      myLineChart.destroy();
    };
  }

  return (
    <div style={{ backgroundColor: "white", padding: 25, borderRadius: 10 }}>
      <canvas ref={canvasEl} height={80} width={500} />
>>>>>>> 9b2aab2 (update route dashboard)
=======
    return (
    <div className="App">
      <Line height={80} data={data} options={options}/>
>>>>>>> ac3cdf0 (updating StatInscription and AgeStat)
    </div>
    );
}
