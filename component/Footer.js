import React from "react"
import Link from "next/link"

const Footer = () => {
  return (
    <div style={styles.footer}>   
        <nav>
             <ul style={styles.nav}>
             <Link href="/politique"> 
                 <li style={styles.li}>Politique de confidentialié</li>
             </Link>

             <Link href="/condition"> 
                 <li style={styles.li}>Conditions générales</li>
             </Link>

             </ul>
         </nav>

        </div>
  )
}

export default Footer

const styles = {
    footer:{
        width:"100%",
        backgroundColor:"#41D8C2",
        height:70,
        display:"flex",
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