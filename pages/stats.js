import React, { useEffect, useRef, useState } from "react"
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import AllStats from '../component/AllStats';
import Header from '../component/Header';
import Footer from "../component/Footer";
import MyEmails from "../component/MyEmails";
import Users from "../component/Users";
import AgeModal from "../component/AgeModal";
import TicketChecker from "../component/TicketChecker";
import TicketGenerator from "../component/TicketGenerator";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function Stats() {
  const [menu, setMenu] = useState("stats")
  const [now, setNow] = useState(Date.now)
  const [birthday, setBirthday] = useState("stats")
  const [age,setAge] = useState(true)
  const [numAge,setNumAge] = useState(null)
  const [session, setSession] = React.useState(30);

 
  const giveAge = () => {
    setAge(true);
  };

  const closeAge = () => {
    setAge(false);
  };

  const handleChangeSession = (event) => {
    setSession(event.target.value);
  };


const handlechange = (e) =>{
  const date = new Date
  setBirthday(e.target.value)
  console.log(birthday)
  let mydate = new Date(birthday)
  let nowtime = new Date(now)

 const yes =  nowtime.getFullYear() - mydate.getFullYear()
  console.log('calcule',yes)
  setNumAge(yes)
  console.log(numAge) }


  const changemenu = (e) => {
  setMenu(e.target.value)
  console.log("menu",menu)}

  return (
    <div className={styles.container}>
      <Head>
        <title>TeaBingo - Jeux concours</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Header/>

<div style={{display:"flex",width:"100%",background:'green'}}> 

    < AgeModal
     // numAge={numAge}
    //  giveAge={giveAge}
      closeAge={closeAge}
      handlechange={handlechange} />
  
    <div style={stylez.side}>
      <h2 style={{color:"white",textAlign:"center"}}>Dashboard</h2>
          <button value={"stats"} style={menu === "stats" ? stylez.sideButtonActive : stylez.sideButtonInactive } onClick={changemenu}>Mes stats</button>
          <button  value={"generator"}style={menu === "generator" ? stylez.sideButtonActive : stylez.sideButtonInactive } onClick={changemenu}>Ticket generator</button>
          <button  value={"ticket"}style={menu === "ticket" ? stylez.sideButtonActive : stylez.sideButtonInactive } onClick={changemenu}>Ticket checker</button>
          <button  value={"users"}style={menu === "users" ? stylez.sideButtonActive : stylez.sideButtonInactive }onClick={changemenu}>Listes utilisateurs</button>
          <button  value={"sessions"} style={menu === "sessions" ? stylez.sideButtonActive : stylez.sideButtonInactive } onClick={changemenu}> Gestions des sessions</button>
    </div>
    <div  style={stylez.stat}>
   <div style={{backgroundColor:"white",padding:25,display:"flex",flexDirection:"column",alignItems:"center"}}>
  <h2 className={styles.h2}>Selectionner une session</h2>
   <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={session}
          label="session"
          onChange={handleChangeSession}>
          <MenuItem value={10}>Session 14_mai_31_juin_2022</MenuItem>
          <MenuItem value={20}>Session 14_juillet_31_Aout_2022</MenuItem>
          <MenuItem value={30}>Session 14_Septembre_31_octobre_2022</MenuItem>
        </Select> 
    </div> 
    { menu === "stats" && <AllStats/>}
    {menu === "ticket" && <TicketChecker/>}
    {menu === "users" && <Users/>}
    {menu === "generator" && <TicketGenerator/>}

    </div>
   </div>      
      <Footer/>
    </div>
  )
}

 const stylez = {
  gain : {
    display:"flex",
    flexWrap:"wrap",
    alignItems:"center",
    width:"90%",
    maxWidth:560,
  },
  side:{
    width:"15%",
    backgroundColor:"white",
    backgroundColor:"#41D8C2",
    display:"flex",
    flexDirection:"column"

  },
  sideButtonActive:{
   fontSize:20,
   margin:5,
   color:"white",
   marginLeft:0,
   marginRight:0,
   padding:10,
   width:'100%',
   border:"none",
   height:60,
   background:"#41C2B0"

  },
  sideButtonInactive:{
    fontSize:20,
    margin:5,
    color:"white",
    marginLeft:0,
    marginRight:0,
    padding:10,
    width:'100%',
    border:"none",
    height:60,
    background:"none"

 
   }
  ,
  stat:{
    backgroundColor:"#F1F1F1",
    padding:25,
    width:"85%",
  }

}