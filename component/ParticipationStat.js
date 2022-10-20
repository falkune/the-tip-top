import React from "react";
import Gauge from "react-svg-gauge";

export default function ParticipationStat({val}) {
  return (
    <div>
      <Gauge
        value={val}
        label={"Taux de participation"}
        width={500}
        height={400}
        color='#2a9d8f'
        backgroundColor="#edf2f4"
        topLabelStyle={{ display: "flex", fontSize: "2em" , fontWeight: "bold"}}
        valueLabelStyle={{fontSize: "4em"}}
        valueFormatter={number => `${number}%`}
      />
    </div>
  );
}
