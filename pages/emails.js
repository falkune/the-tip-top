import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../component/Header'
import Footer from "../component/Footer"
<<<<<<< HEAD
import Email from "../component/Email"
import arrow from "../image/topArrow.png"
import { users } from "../component/Data"

export default function Emails() {

  const number = users.length
=======
import Ticket from "../component/Ticket"

export default function Emails() {

  const number = 10245
>>>>>>> a4a8112 (add loader)

  return (
    <div className={styles.container}>
      <Head>
        <title>TeaBingo - Jeux concours</title>
        <meta name="description" content="Generated by create next app" />
<<<<<<< HEAD
        <link rel="icon" href="/fav.png" />
      </Head>
      <Header/>
      <h1 className={styles.h1}>Emails</h1>
       <button style={stylez.export}>Exporter
        <span style={{margin:5,position:"absolute",right:8,top:4}}>
          <Image src={arrow} width={13} height={20.8} alt="arrow"/>
        </span>
       </button>
        <p style={{fontSize:18,color:"grey"}}><strong style={{color:"#41D8C2"}}>{number} </strong>{`emails`}</p>
          <div style={stylez.gain}>
          {users.map((i,index) => (
                <Email
                  key={index}
                  date={i.date}
                  name={i.name}
                  email={i.email}
                  />
              ))}
=======
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <h1 className={styles.h1}>Emails</h1>
        <p style={{fontSize:18,color:"grey"}}><strong style={{color:"#40EFD7"}}>{number} </strong>{`emails`}</p>
          <div style={stylez.gain}>
                <Ticket />
                <Ticket />
>>>>>>> a4a8112 (add loader)
          </div>
      <Footer/>
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
    minHeight:"100vh"
<<<<<<< HEAD
  },

  export : {
      margin:8,
      padding:8,
      backgroundColor:"white",
      border:"solid 1px #41D8C2",
      fontSize:18,
      minHeight:45,
      textAlign:"center",
      minWidth:200,
      color:"#41D8C2",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      position:"relative"
  }
=======




  }







>>>>>>> a4a8112 (add loader)
}