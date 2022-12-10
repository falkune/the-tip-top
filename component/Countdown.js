import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import Countdown from "react-countdown";

const Count = ({ current }) => {
  const xtime = dayjs(current.endDate).valueOf();
 console.log(xtime,"xtime")
  const renderer = ({ days, hours, minutes, seconds,completed }) => (
    <div style={styles.count}>
      <p
        style={{
          fontSize: 20,
          color: "#C7FFF7",
          textAlign: "center",
          margin: 8,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <strong style={{ color: "white", fontSize: 35 }}>{days}</strong>Jours{" "}
      </p>
      <p
        style={{
          fontSize: 20,
          color: "#C7FFF7",
          textAlign: "center",
          margin: 8,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <strong style={{ color: "white", fontSize: 35 }}>{hours}</strong>Heures{" "}
      </p>
      <p
        style={{
          fontSize: 20,
          color: "#C7FFF7",
          textAlign: "center",
          margin: 8,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <strong style={{ color: "white", fontSize: 35 }}>{minutes}</strong>
        Minutes{" "}
      </p>
      <p
        style={{
          fontSize: 20,
          color: "#C7FFF7",
          textAlign: "center",
          margin: 8,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <strong style={{ color: "white", fontSize: 35 }}>{seconds}</strong>
        Secondes{" "}
      </p>
    </div>
  );

  return (
    <>
      <Countdown date={xtime} renderer={renderer} />
    </>
  );
};

export default Count;

const styles = {
  count: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 30,
  },
};
