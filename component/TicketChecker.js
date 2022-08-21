import React, { useEffect, useRef, useState } from "react"
import styles from '../styles/Home.module.css'
import ClipLoader from "react-spinners/ClipLoader";
import clipboard from "../image/clipboard.png";

export default function TicketChecker() {
    const [load,setLoad] = useState(false)
    const [loading,setLoading] = useState(false)
    const [input,setInput] = useState("")
    const [visible,setVisible] = useState(false) 
    const [generate,setGenerate] = useState(false) 
    const [ticket,setTicket] = useState({
        assigné:null,
        create_at:"07-06-2022",
        validé:true,
        numéro:"545455d4ds5d4sd",
        lot:"Grand thé vert"
    })



    const UpdateLoad = () => {
       //fonction pour get le ticket par numéro
        setLoad(true)
        setTimeout(() => setLoad(false), 2000);
        setVisible(true)
    }
    
    const UpdateInput = (e) =>{
        setInput(e.target.value)
        console.log(e.target.value)
    }
    const Cleaner = () => {
        setInput("")
        setVisible(false)
    }





  return (
    <div style={{display:'flex',flexDirection:"column",minHeight:1000}}>
        <div style={{display:'flex',background:"white",alignItems:"center",justifyContent:"center",padding:15,height:500}}>
            <div style={{width:"50%",display:"flex",justifyContent:"center",alignItems:"center", flexDirection:"column",
                        maxWidth:350,
                        padding:10,
                        textAlign:"center"}}>
                <img src={clipboard} alt=""/>
                <h2 className={styles.h2}>Vérification du ticket</h2>
                <input onChange={UpdateInput} className={styles.input} maxLength={10} 
                  value={input} type="text" placeholder='Indiquer votre numéro de ticket' />
                { input.length === 10 ? <button onClick={UpdateLoad} 
                className={styles.action}>
                    Valider
            </button> : 
            <button style={{opacity:0.7}} className={styles.noaction}>
                Valider</button> }
             <button onClick={Cleaner} className={styles.noaction}>
                Réinitaliser
            </button>

            </div>
            {visible === true && load === false &&
            <div style={{width:"45%",
                        display:"flex",
                        backgroundColor:"#41D8C2",
                        justifyContent:"center",
                        alignItems:"start",
                        color:"white",
                        height:"80%",
                        flexDirection:"column",
                        borderRadius:8,
                        maxWidth:350,
                        padding:10,
                        paddingLeft:50,
                        fontSize:18,
                        textAlign:"center"}}>
            {ticket.numéro != null ? <p>Numéro : {ticket.numéro}</p> : <p>invalide</p>}
            {ticket.assigné != null ? <p>Assigné :{ticket.assigné}</p> : <p>Ticket non assigné</p>}
            {ticket.validé === true ? <p>Ticket validé</p> : <p> ticket expiré</p>}
            {ticket.create_at != null ? <p>Date de création : {ticket.create_at}</p> : <p>invalide</p>}
            </div>} 
             { load === true &&
                <div style={{width:"50%",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                flexDirection:"column",
                maxWidth:350,
                padding:10,
                textAlign:"center"}}>            
                <ClipLoader color={"#41D8C2"} loading={true} size={100} /> 
            </div>
            }
        </div>
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
}