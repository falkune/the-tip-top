import React, { useEffect, useState } from "react";
<<<<<<< HEAD


const Count = () => {
const [tdays, setDays] = useState(0);
const [thours, setHours] = useState(0);
const [tminutes, setMinutes] = useState(0);
const [tseconds, setSeconds] = useState(0);

useEffect(() => {
  countDownInterval
  console.log('ok')
}, []);

const countDownDate = new Date("Jul 25, 2022 23:59:99").getTime();

const getChrono = () =>{
  const now = new Date().getTime();
  const timeleft = countDownDate - now;
      
  let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
=======
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
>>>>>>> a584e821a7aee8a69ef870781d3a7bb3e50d105c
    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
<<<<<<< HEAD
}

const countDownInterval = setInterval (() => {
  getChrono()

},100000)


  return (
    <div style={styles.count}>   
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cc647dd (count down)
       <p style={{fontSize:45,color:"grey",textAlign:"center",margin:0}}>  
        <strong style={{color:"white"}}>{tdays}</strong>J{" "} 
         <strong style={{color:"white"}}>{thours}</strong>H {" "}  
        <strong style={{color:"white"}}>{tminutes}</strong>M {" "}
        <strong style={{color:"white"}}>{tseconds}</strong>S{" "}
        </p>
<<<<<<< HEAD
=======
       <p style={{fontSize:45,color:"white",textAlign:"center"}}>  
        {`${tdays}j ${thours}h ${tminutes}m ${tseconds}s`}</p>
>>>>>>> ddce213 (add ticket page)
=======
>>>>>>> cc647dd (count down)
    </div>
  )
}

export default Count

const styles = {

    count:{
        display:"flex",
<<<<<<< HEAD
<<<<<<< HEAD
        justifyContent:'center',
        marginBottom:30
=======
        justifyContent:'center'
>>>>>>> ddce213 (add ticket page)
=======
        justifyContent:'center',
        marginBottom:30
>>>>>>> cc647dd (count down)
    } 

}
=======
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
>>>>>>> a584e821a7aee8a69ef870781d3a7bb3e50d105c
