import React, { useEffect, useState } from "react";


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
    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
}

const countDownInterval = setInterval (() => {
  getChrono()

},100000)


  return (
    <div style={styles.count}>   
       <p style={{fontSize:45,color:"white",textAlign:"center"}}>  
        {`${tdays}j ${thours}h ${tminutes}m ${tseconds}s`}</p>
    </div>
  )
}

export default Count

const styles = {

    count:{
        display:"flex",
        justifyContent:'center'
    } 

}