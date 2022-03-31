import React from "react"
<<<<<<< HEAD
<<<<<<< HEAD
import Link from "next/link"
=======
import Image from 'next/image'
import Link from "next/link"
import logo from "../image/logo.png"
<<<<<<< HEAD
>>>>>>> 82befde (first page)
=======
import { padding } from "@mui/system"
>>>>>>> a4a8112 (add loader)

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
=======
import Image from 'next/image'
import Link from "next/link"
import logo from "../image/logo.png"

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
>>>>>>> bd3cdc4 (next auth for authenticate with google or facebook)
  )
}

export default Footer

const styles = {
<<<<<<< HEAD
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
<<<<<<< HEAD
        justifyContent:"space between",
>>>>>>> 82befde (first page)
=======
        justifyContent:"space-evenly",
>>>>>>> bbb5a45 (add first page and login page)
        alignItems:"center",
    },
    nav:{
     display:"flex",
<<<<<<< HEAD
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
=======
     color:"white",
     padding:0,
>>>>>>> a4a8112 (add loader)
    },

    li:{
    margin:10,
    listStyleType:"none",
    fontSize:13
    }
=======

	footer:{
		width:"100%",
		backgroundColor:"#40EFD7",
		height:70,
		display:"flex",
		justifyContent:"space between",
		alignItems:"center",
	},
	nav:{
	 display:"flex",
	 marginRight :25,
	 color:"white"
	},

	li:{
	marginLeft:15,
	listStyleType:"none",
	fontSize:13
	}
>>>>>>> bd3cdc4 (next auth for authenticate with google or facebook)





<<<<<<< HEAD
>>>>>>> 82befde (first page)
=======
>>>>>>> bd3cdc4 (next auth for authenticate with google or facebook)
}