import React, { useEffect, useState } from "react";
import Image from 'next/image'
import Link from "next/link"
import logo from "../image/logo.png"
import menu from "../image/menu.svg"
import Drawer from '@mui/material/Drawer';


const Header = () => {
    const [width, setWidth] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const handleResize = () => setWidth(window.innerWidth);

    const toggleDrawer = () => {
        setIsOpen(!isOpen)
        }
    
    // useEffect(() => {
    //   window.addEventListener('resize', handleResize);
    //   return () => window.removeEventListener('resize', handleResize);
    // }, [handleResize]);
    // return width;
    // };

  return (
    <header style={styles.header}>
        <div style={{width:'100%',
        height:"100%",
        position:"relative",
        display:"flex",
        padding:15,
        justifyContent:"space-between"}}>
            <Link href="/"> 
                <Image src={logo} width="55" height="60" /> 
            </Link>   
                <nav>
                    <ul style={styles.nav}>
                    <Link href="/bingo"> 
                        <li style={styles.li}>Bingo ticket</li>
                    </Link>

                    <Link href="/jeux"> 
                        <li style={styles.li}>Grand jeux concours</li>
                    </Link>

                    <Link href="/tickets">
                        <li style={styles.li}>Mes ticket</li>
                    </Link>
                    </ul>
                </nav>  

                <Drawer
                 anchor={"left"}
                 open={isOpen}
                 onClose={()=> toggleDrawer}>
                </Drawer>
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
        boxShadow:"0px 4px 15px 0px rgba(0,0,0,0.10)",
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