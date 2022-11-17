import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Email from "../component/Email"
import arrow from "../image/topArrow.png"
import { users } from "../component/Data"

export default function MyEmails() {

  const number = users.length

  return (
    <div className={styles.container}>
    <button>Ticket cheaker</button>
    </div>
  )
}

 const stylez = {

  gain : {

    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    width:"90%",
    maxWidth:360,
    minHeight:"100vh",
  },

  export : {
      margin:8,
      padding:8,
      backgroundColor:"white",
      border:"solid 1px  #02558D",
      fontSize:18,
      minHeight:45,
      textAlign:"center",
      minWidth:200,
      color:" #02558D",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      position:"relative"
  }
}