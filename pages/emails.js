import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../component/Header'
import Footer from "../component/Footer"
import Email from "../component/Email"
import arrow from "../image/topArrow.png"
import { users } from "../component/Data"

export default function Emails() {

  const number = users.length

  return (
    <div className="container">
      <Head>
        <title>TeaBingo - Jeux concours</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <h1 className={styles.h1}>Emails</h1>
       <button style={stylez.export}>Exporter
        <span style={{margin:5,position:"absolute",right:8,top:4}}>
          <Image src={arrow} width={13} height={20.8} alt="arrow"/>
        </span>
       </button>
        <p style={{fontSize:18,color:"grey"}}><strong style={{color:" #38870D"}}>{number} </strong>{`emails`}</p>
          <div style={stylez.gain}>
          {users.map((i,index) => (
                <Email
                  key={index}
                  date={i.date}
                  name={i.name}
                  email={i.email}
                  />
              ))}
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
  },

  export : {
      margin:8,
      padding:8,
      backgroundColor:"white",
      border:"solid 1px  #38870D",
      fontSize:18,
      minHeight:45,
      textAlign:"center",
      minWidth:200,
      color:" #38870D",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      position:"relative"
  }
}