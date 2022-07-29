import React, { useEffect, useState } from "react";
import Image from 'next/image'
import Link from "next/link"
import logo from "../image/logo.png"
import menu from "../image/menu.svg"
import Drawer from '@mui/material/Drawer';

const Header = ({user}) => {
  const [width, setWidth] = useState(0);
  const [open, setOpen] = React.useState(false);


  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    updateDimensions()
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions)
  }, [width])

  return (
    <header style={styles.header}>
        <div style={{width:'100%',
        height:"100%",
        position:"relative",
        display:"flex",
        padding:15,
        justifyContent:"space-between"}}>
            <Link href="/"> 
              <Image src={logo} width="55" height="60" alt="logo"/> 
            </Link>   
              {width > 650 ? <nav>
                    <ul style={styles.nav}>
                   { user && user ==="client" && <Link href="/bingo"> 
                        <a style={styles.li}>Bingo ticket</a>
                    </Link> }

                    { user && user ==="client" && <Link href="/jeux"> 
                        <a style={styles.li}>Grand jeux concours</a>
                    </Link> }

                    { user && user ==="client" && <Link href="/tickets">
                        <a style={styles.li}>Mes tickets</a>
                    </Link>}

                    {user && user ==="pro" && <Link href="/emails">
                        <a style={styles.li}>Mes emails</a>
                    </Link> }
                   {user && user ==="pro" && <Link href="/stats">
                        <a style={styles.li}>Mes stats</a>
                    </Link>}

            


                    </ul>
                </nav> :
                <Image onClick={toggleDrawer(true)} src={menu} width="30" height="30" alt="menu"/>
                 }
         </div>
         <Drawer
                    anchor={"right"}
                    open={open}                    
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}>
             <ul style={styles.draw}>
                    { user && user ==="client" && <Link href="/bingo"> 
                        <a style={styles.li2}>Bingo ticket</a>
                    </Link> }

                    { user && user ==="client" && <Link href="/jeux"> 
                        <a style={styles.li2}>Grand jeux concours</a>
                    </Link> }

                    { user && user ==="client" && <Link href="/tickets">
                        <a style={styles.li2}>Mes tickets</a>
                    </Link>}

                    {user && user ==="client" && <Link href="/emails">
                        <a style={styles.li2}>Mes emails</a>
                    </Link> }
                   {user && user ==="pro" && <Link href="/tickets">
                        <a style={styles.li2}>Mes stats</a>
                    </Link>}
                
                </ul>
            </Drawer>
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
        zIndex: 45739863

    },
    nav:{
     display:"flex",
     marginRight :25,
     color:"#AEAEAE"
    },

    draw:{
        flex:"flex",
        flexDirection:"column",
        width:"100%",
        padding:25,
        height:700,
        paddingTop:100,
        zIndex:999999999999999999,
        justifyContent:"center"

       },

    li:{
    marginLeft:15,
    listStyleType:"none",
    textDecoration: "none",
    color: "gray"
    },

    li2:{
        margin:15,
        fontSize:20,
        listStyleType:"none",
        textDecoration:"none",
        color: "gray"
    }
}