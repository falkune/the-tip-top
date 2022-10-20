import React, { useEffect, useRef, useState } from "react"
import Chart from "chart.js/auto"

export default function StatInscription({data}) {
  const canvasEl = useRef(null)
  const [inscriptions, setInscription] = useState(data)

  useEffect(() => {
    const ctx = canvasEl.current.getContext("2d")

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
      "Jour 30"
    ];
    const data = {
      labels: labels,
      datasets: [
        {
          label: "Nombre d'inscrit par jour",
          data: inscriptions,
          fill: true,
          borderWidth: 2,
          borderColor: "#41C2B0",
          lineTension: 0.3,
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

  
  const stats  = {
    total:985000,
    totalMax: 1500000 }
  const TauxP =(stats.total*100)/stats.totalMax


  return (
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
    </div>
  )
}
