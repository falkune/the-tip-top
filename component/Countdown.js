import React, { useEffect, useState } from "react";
import dayjs from "dayjs";

const Count = ({ current }) => {
  const [tdays, setDays] = useState(0);
  const [thours, setHours] = useState(0);
  const [tminutes, setMinutes] = useState(0);
  const [tseconds, setSeconds] = useState(0);

  useEffect(() => {
    getChrono();
  }, []);

  const countDownDate = dayjs(current.endDate);

  const getChrono = () => {
    const now = new Date().getTime();
    const timeleft = countDownDate - now;

    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  };

  return (
    <div style={styles.count}>
      <p
        style={{
          fontSize: 20,
          color: "grey",
          textAlign: "center",
          margin: 8,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <strong style={{ color: "white", fontSize: 35 }}>{tdays}</strong>Jours{" "}
      </p>
      <p
        style={{
          fontSize: 20,
          color: "grey",
          textAlign: "center",
          margin: 8,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <strong style={{ color: "white", fontSize: 35 }}>{thours}</strong>Heures{" "}
      </p>
      <p
        style={{
          fontSize: 20,
          color: "grey",
          textAlign: "center",
          margin: 8,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <strong style={{ color: "white", fontSize: 35 }}>{tminutes}</strong>
        Minutes{" "}
      </p>
      <p
        style={{
          fontSize: 20,
          color: "grey",
          textAlign: "center",
          margin: 8,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <strong style={{ color: "white", fontSize: 35 }}>{tseconds}</strong>
        Secondes{" "}
      </p>
    </div>
  );
};

export default Count;

const styles = {
  count: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: 30,
    padding: 10,
  },
};
