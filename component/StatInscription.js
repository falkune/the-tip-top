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
}
