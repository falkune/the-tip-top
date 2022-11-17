import React from "react"
import Link from "next/link"

const Footer = () => {
  return (
    <div style={styles.footer}>  
    <form className="newsletter">
        <p>S'inscrire à notre Newletter</p>
        <small>Pour être informé de nos news inscrivez à notre newletter</small>
        <input style={{width:"100%"}} placeholder="Nom" type="text" />
        <input  style={{width:"100%"}}placeholder="Email" type="email" />
        <button>S'inscrire</button>
        </form> 
        <nav>
             <ul style={styles.nav}>
             <Link href="/politique"> 
                 <li style={styles.li}>Politique de confidentialié</li>
             </Link>

             <Link href="/condition"> 
                 <li style={styles.li}>Mention légales</li>
             </Link>

             </ul>
         </nav>

        </div>
  )
}

export default Footer

const styles = {
   form:{
   display:'flex',
   flexDirection:"column"}
,
    footer:{
        width:"100%",
        backgroundColor:" #024370",
        minHeight:70,
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-evenly",
        alignItems:"center",
    },
    nav:{
     display:"flex",
     color:"white",
     padding:0,
    },
    li:{
    margin:10,
    listStyleType:"none",
    fontSize:13
    }
}