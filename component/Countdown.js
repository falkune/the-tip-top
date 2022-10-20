import React, { useEffect, useState } from "react";
import dayjs from "dayjs";

const Count = ({ current }) => {
  const [tdays, setDays] = useState(0);
  const [thours, setHours] = useState(0);
  const [tminutes, setMinutes] = useState(0);
  const [tseconds, setSeconds] = useState(0);

  useEffect(() => {
    countDownInterval;
    console.log("start", current.endDate);
  }, []);

  const countDownDate = new Date(current.endDate).getTime();

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

  const countDownInterval = setInterval(() => {
    getChrono();
  }, 100000);

  return (
    <div style={styles.count}>
      <p
        style={{ fontSize: 45, color: "grey", textAlign: "center", margin: 0 }}
      >
        <strong style={{ color: "white" }}>{tdays}</strong>J{" "}
        <strong style={{ color: "white" }}>{thours}</strong>H{" "}
        <strong style={{ color: "white" }}>{tminutes}</strong>M{" "}
        <strong style={{ color: "white" }}>{tseconds}</strong>S{" "}
      </p>
    </div>
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
