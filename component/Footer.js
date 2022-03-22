import React from "react"
<<<<<<< HEAD
import Link from "next/link"
=======
import Image from 'next/image'
import Link from "next/link"
import logo from "../image/logo.png"
>>>>>>> 82befde (first page)

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
<<<<<<< HEAD
    footer:{
        width:"100%",
        backgroundColor:"#41D8C2",
        height:70,
        display:"flex",
        justifyContent:"space-evenly",
=======

    footer:{
        width:"100%",
        backgroundColor:"#40EFD7",
        height:70,
        display:"flex",
        justifyContent:"space between",
>>>>>>> 82befde (first page)
        alignItems:"center",
    },
    nav:{
     display:"flex",
<<<<<<< HEAD
     color:"white",
     padding:0,
    },
    li:{
    margin:10,
    listStyleType:"none",
    fontSize:13
    }
=======
     marginRight :25,
     color:"white"
    },

    li:{
    marginLeft:15,
    listStyleType:"none",
    fontSize:13
    }





>>>>>>> 82befde (first page)
}