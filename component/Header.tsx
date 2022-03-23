import React from "react"
import Image from 'next/image'
import Link from "next/link"
import logo from "../image/logo.png"
import menu from "../image/menu.svg"

const Header = () => {
  


  return (
    <header>
        <div style={{width:'100%',
        height:"100%",
        position:"relative",
        display:"flex",
        padding:15,
        justifyContent:"space-between"}}>
            <Link href="/"> 
                <Image src={logo} width="55" height="60" /> 
            </Link>   

            {/* { larg > 375 ? */}
                {/* <nav>
                    <ul style={styles.nav}>
                    <Link href="/bingo"> 
                        <li style={styles.li}>Bingo ticket</li>
                    </Link>

                    <Link href="/jeux"> 
                        <li style={styles.li}>Grand jeux concourt</li>
                    </Link>

                    <Link href="/tickets">
                        <li style={styles.li}>Mes ticket</li>
                    </Link>
                    </ul>
                </nav>  */}
                <Image src={menu} width="30" height="30" /> 

            
         </div>
    </header>
  )
}

export default Header

const styles = {

    header:{
        width:"100%",
        minHeight:70,
        display:"flex",
        justifyContent:"end",
        backgroundColor:"white",
        alignItems:"center",
        boxShadow:"0px 4px 15px 0px rgba(0,0,0,0.35)",
        position:"fixed",
        top:0,
        zIndex:99999999999999999
    },
    nav:{
     display:"flex",
     marginRight :25,
     color:"#AEAEAE"
    },

    li:{
    marginLeft:15,
    listStyleType:"none"



    }





}