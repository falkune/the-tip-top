<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
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

=======
import React, { useEffect, useRef, useState } from "react"
import Chart from "chart.js/auto"

export default function StatInscription({data}) {
  const canvasEl = useRef(null)
  const [inscriptions, setInscription] = useState(data)

  useEffect(() => {
    const ctx = canvasEl.current.getContext("2d")

=======
import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

export default function StatInscription({ data, session }) {
  const canvasEl = useRef(null);
  const [inscriptions, setInscription] = useState(data);

  useEffect(() => {
    const ctx = canvasEl.current.getContext("2d");
    console.log("session", session);
>>>>>>> a584e821a7aee8a69ef870781d3a7bb3e50d105c
    const labels = [
      "Jour 1",
      "Jour 2",
      "Jour 3",
      "Jour 4",
      "Jour 5",
      "Jour 6",
      "Jour 7",
      "Jour 8",
      "Jour 9",
      "Jour 10",
      "Jour 11",
      "Jour 12",
      "Jour 13",
      "Jour 14",
      "Jour 15",
      "Jour 16",
      "Jour 17",
      "Jour 18",
      "Jour 19",
      "Jour 20",
      "Jour 21",
      "Jour 22",
      "Jour 23",
      "Jour 24",
      "Jour 25",
      "Jour 26",
      "Jour 27",
      "Jour 28",
      "Jour 29",
<<<<<<< HEAD
      "Jour 30"
    ];
>>>>>>> 9822c4a (ajout graphique dans stats)
=======
      "Jour 30",
    ];
>>>>>>> a584e821a7aee8a69ef870781d3a7bb3e50d105c
    const data = {
      labels: labels,
      datasets: [
        {
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> a584e821a7aee8a69ef870781d3a7bb3e50d105c
          label: "Nombre d'inscrit par jour",
          data: inscriptions,
          fill: true,
          borderWidth: 2,
<<<<<<< HEAD
          borderColor: "#8d99ae",
          lineTension: 0.3,
          // backgroundColor: "#2ec4b6",
          pointRadius: 1.5
        }
      ]
    }
    const config = {
      type: "line",
      data: data
    }
    const myLineChart = new Chart(ctx, config)

    return function cleanup() {
      myLineChart.destroy()
    }
  })

  return (
    <div className="App">
      <canvas ref={canvasEl} height="400" width="1500"/>
    </div>
  )
>>>>>>> 9822c4a (ajout graphique dans stats)
=======
          borderColor: "#41C2B0",
          lineTension: 0.3,
          pointRadius: 1.5,
        },
      ],
    };
    const config = {
      type: "line",
      data: data,
    };
    const myLineChart = new Chart(ctx, config);

    return function cleanup() {
      myLineChart.destroy();
    };
  });

  const stats = {
    total: 985000,
    totalMax: session,
  };
  const TauxP = (stats.total * 100) / stats.totalMax;

  return (
    <div style={{ backgroundColor: "white", padding: 25, borderRadius: 10 }}>
      <h2
        style={{
          textAlign: "center",
          fontSize: 25,
          fontWeight: "bold",
          color: "#41D8C2",
        }}
      >
        Souscriptions
      </h2>
      <div
        style={{
          padding: 15,
          margin: 8,
          textAlign: "center",
          borderRadius: 8,
          color: "white",
          backgroundColor: "#41D8C2",
          maxWidth: 350,
        }}
      >
        <p style={{ fontSize: 50, fontWeight: "bold", marginBottom: 0 }}>
          {Math.round(TauxP)}%
        </p>
        <small style={{ opacity: 0.5 }}>taux de participation</small>
        <p>{stats.total} participations</p>
        <p>sur {stats.totalMax}</p>
      </div>
      <canvas ref={canvasEl} height={80} width={500} />
    </div>
  );
>>>>>>> a584e821a7aee8a69ef870781d3a7bb3e50d105c
}
