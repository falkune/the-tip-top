import React, { useState } from "react";
import styles from '../styles/Home.module.css';

const ModalAge = ({ showHide }) => {
    const showHideClassName = showHide;
    return(
        <div style={{display : showHideClassName ? "flex" : "none"}}>
            <div className={styles.modal}>
                <h2 style={{marginBottom:5,fontSize:28}}>Votre age</h2>
                <p>Pour participer au jeu, nous avons besoin de votre age </p>
                <input style={{padding:10,width:"90%",height:50}}
                type="date" />
                <button className={styles.action} style={{animation:"pulse 1sec infite"}}>Valider</button>
            </div>  
        </div>
    )
}

export default ModalAge;