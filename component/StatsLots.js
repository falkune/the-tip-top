import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import axios from "axios";

export default function StatInscription({ days,  idSession}) {
  const canvasEl = useRef(null);

  useEffect(() => {
    // console.log(days, idSession)
    getRegistrationByDay();
  },[days]);

  // this function get the number of registration by day
  const getRegistrationByDay = async () => {
    const accessToken = localStorage.getItem('token');
    const url = "https://api.dev.dsp-archiwebo21-ct-df-an-cd.fr/user/registration-by-day"
    const response = await axios.get(url, { headers: { "Authorization" : `Bearer ${accessToken}` }})
    const registrationByDay = Array();
    response.data.forEach(e => {
      registrationByDay.push(e.nomberOfRegitration)
    })
    drawChart(registrationByDay)

    // const body = {
    //  sessionId : idSession
    // };

    // try {
    //   let createdSession = await axios.post(url, body, config);
    //   console.log(createdSession);
    // } catch (e) {
    //   console.log(e);
    // }
  }

  // this function draw the chart of number of registred person by day
  const drawChart = (registrationByDay) => {
    const labels = Array();
    for(let i = 1; i <= days; i++){
      labels.push("Jour "+i)
    }
    const ctx = canvasEl.current.getContext("2d");
    const data = {
      labels: labels,
      datasets: [
        {
          label: "Nombre d'inscrit par jour",
          data: registrationByDay,
          fill: true,
          borderWidth: 2,
          borderColor: "#41C2B0",
          lineTension: 0.3,
          pointRadius: 1.5,
        },
      ],
    };

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
    </div>
  );
}
