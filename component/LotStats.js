import React, { useEffect, useRef, useState } from "react"
import Chart from "chart.js/auto"
<<<<<<< HEAD
=======
import { height } from "@mui/system"
>>>>>>> a584e821a7aee8a69ef870781d3a7bb3e50d105c

export default function LoStats({data}) {
  const canvasEl = useRef(null)
  const [statsLots, setStatsLots] = useState(data)

  useEffect(() => {
    const ctx = canvasEl.current.getContext("2d")

    const labels = [
<<<<<<< HEAD
      "infuseur à thé",
      "Une boite de 100g d’un thé détox ou d’infusion",
      "Une boite de 100g d’un thé signature",
      "Un coffret découverte d’une valeur de 39€ "
=======
      "Infuseur à thé",
      "Une boite de 100g d’un thé détox",
      "Une boite de 100g d’un thé signature",
      "Un coffret découverte "
>>>>>>> a584e821a7aee8a69ef870781d3a7bb3e50d105c
    ];
    const data = {
      axis: 'x',
      labels: labels,
      datasets: [
        {
          label: "Stats des lots",
          data: statsLots,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)'
          ],
          borderWidth: 1
        }
      ]
    }
    const config = {
      type: "bar",
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true,
            stacked: true
          },
          x: {
            grid: {
              offset: true,
              stacked: true
            }
        }
        }
      },
    }
    const barChart = new Chart(ctx, config)

    return function cleanup() {
      barChart.destroy()
    }
  })

  return (
<<<<<<< HEAD
    <div className="App">
      <canvas ref={canvasEl} height="400" width="400"/>
=======
    <div style={{backgroundColor:'white',padding:25,borderRadius:10,margin:10,width:'50%'}}>
      <canvas ref={canvasEl} height={15} width={30}/>
>>>>>>> a584e821a7aee8a69ef870781d3a7bb3e50d105c
    </div>
  )
}
