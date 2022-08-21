import React, { useEffect, useRef, useState } from "react"
import styles from '../styles/Home.module.css'
import ClipLoader from "react-spinners/ClipLoader";
import clipboard from "../image/clipboard.png";
import axios from "axios"

export default function TicketGenerator() {
    const [load,setLoad] = useState(false)
    const [loading,setLoading] = useState(false)
    const [input,setInput] = useState("")
    const [visible,setVisible] = useState(false) 
    const [generate,setGenerate] = useState(false) 
    const [newTicket,setNewTicket] = useState("") 
    const [ticket,setTicket] = useState({
        assigné:null,
        create_at:"07-06-2022",
        validé:true,
        numéro:"545455d4ds5d4sd",
        lot:"Grand thé vert"
    })





    const copyCode = (e) => {
        e.target.value
        {navigator.clipboard.writeText(e.target.value)}
        alert("code copié")
    }

    const generateTicket = () => {
               //fonction pour créer un ticket 
        setLoading(true)
        setTimeout(() => setLoading(false), 2000);
        setGenerate(true)
        const token = ""
        const url="https://api.dev.dsp-archiwebo21-ct-df-an-cd.fr/api/ticket" 
        axios.post(url, {"body":token}, {
          headers: {
          'Content-Type': 'application/json'
          }}).then(response => setNewTicket(response.data.id));
          //setLoading(false)
            
    }

    const closeTicket = () => {
        //fonction pour créer un ticket 
 setGenerate(false)
}




  return (
    <div style={{display:'flex',flexDirection:"column",alignItems:"center",minHeight:1000}}>
        <div style={{display:'flex',background:"white",alignItems:"center",justifyContent:"center",marginTop:30,padding:15,height:500}}>
            <div style={{   width:"50%",
                            display:"flex",
                            justifyContent:"center",
                            alignItems:"center",
                            flexDirection:"column",
                            maxWidth:350,
                            padding:10,
                            textAlign:"center"}}>
                                <div>
                                <h2 className={styles.h2}>Générateur de ticket</h2>            
                                <button onClick={generateTicket} className={styles.action}>Générer un ticket</button>
                                <button onClick={closeTicket} className={styles.noaction}>Quitter</button>
                                </div>
            </div>
            {generate === true && loading === false &&
            <span style=
            {{width:"50%",
            display:"flex",
            justifyContent:"space-around",
            borderRadius:8,
            margin:35,
            maxWidth:350,
            padding:10,
            backgroundColor:"#41D8C2"}}>
            {ticket.numéro != null ?
            <> <p style={{color:"white"}}>Numéro : {ticket.numéro}</p> 
            <button  onClick={copyCode} value={ticket.numéro} style={{border:"none",padding:10,color:"white",background:"#41C2B0"}}> 
                Copier
           </button>
            </>
            : <p>invalide</p>
        
          }
    
            </span>} 
             { loading === true &&
                <div style={{width:"50%",
                display:"flex",marginLeft:70}}>            
                <ClipLoader color={"#41D8C2"} loading={true} size={70} /> 
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