import React from "react"
import Modal from '@mui/material/Modal';

export default function AgeModal({numAge,giveAge,closeAge,handlechange, showHide}) {
  const showHideClassName = showHide;
  return (
    <div style={{display : showHideClassName ? "flex" : "none"}}>
        <Modal  open={giveAge}
                onClose={closeAge} >
            <div className="modal">
                <h2 style={{marginBottom:5,fontSize:28}}>Votre age</h2>
                <p>Pour participer au jeu, nous avons besoin de votre age </p>
                <input style={{padding:10,width:"90%",height:50}}
                type="date" onChange={handlechange} />
                <p>Age : {numAge}{numAge != null && " ans"}</p>
                { numAge != null && numAge > 17 &&  <button  onClick={UpdateAge} className={styles.action}>Confirmer</button>}
                { numAge != null || numAge < 18 &&  <button className="noaction">Confirmer</button>}
                {numAge != null && numAge < 18 &&<small style={{color:"red"}}>Vous devez être majeur pour continuer</small> }
            </div>         
        </Modal>
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