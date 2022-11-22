import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../image/logo.png";
import iconMenu from "../image/menu.svg";
import Drawer from "@mui/material/Drawer";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useRouter } from "next/router";
<<<<<<< HEAD
=======
import Cookies from 'js-cookie';
>>>>>>> 6740139edc7fabd68e04d0357dd9fe84b56e54ce

const Header = ({ menu, changemenu }) => {
  const router = useRouter();
  const [width, setWidth] = useState(0);
  const [role, setRole] = useState(null);
<<<<<<< HEAD
=======

>>>>>>> 6740139edc7fabd68e04d0357dd9fe84b56e54ce

  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const logout = () =>{


  }

  const updateDimensions = () => {
    setWidth(window.innerWidth);
    localStorage.setItem("width", width);
  };
  useEffect(() => {
    if (localStorage.getItem("role") !== undefined) {
      setRole(localStorage.getItem("role"));
    }else{
      router.push("/connexion");
    }
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [width]);

<<<<<<< HEAD


  const logOut = ()=> {
    localStorage.removeItem('role')
    localStorage.removeItem('token')
    router.push('/connexion')

=======
  const logOut = ()=> {
    Cookies.remove('accessToken');
    Cookies.remove('userRole');
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('width');
>>>>>>> 6740139edc7fabd68e04d0357dd9fe84b56e54ce
  }

  return (
    <header style={styles.header}>
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          display: "flex",
          padding: 15,
          justifyContent: "space-between",
        }}
      >
        <Link href="/">
          <Image src={logo} width={56} height={56} alt="logo" />
        </Link>
        {width > 850 ? (
          <nav>
            <ul style={styles.nav}>
<<<<<<< HEAD
            <Link href="/equipe">
                <li style={ menu === "equipe" ? styles.liactive : styles.li}>Qui sommes nous ?</li>
              </Link>
              <Link href="/regle">
            <li style={menu === "regle" ? styles.liactive : styles.li}>Règle du jeux</li>
          </Link>
          <Link href="/lots">
            <li style={menu === "lots" ? styles.liactive : styles.li}>Lot à gagner</li>
          </Link>
=======
              {!role || role === 'client' &&(
                <Link href="/equipe">
                  <li style={styles.li}>Qui sommes nous ?</li>
                </Link>
              )}
              
              {!role || role === 'client' &&(
                <Link href="/regle">
                  <li style={styles.li}>Règle du jeux</li>
                </Link>
              )}
              
              {!role || role === 'client' &&(
              <Link href="/lots">
                <li style={styles.li}>Lot à gagner</li>
              </Link>)}
              
>>>>>>> 6740139edc7fabd68e04d0357dd9fe84b56e54ce
              {role && role === "client" && (
                <li style={menu === "bingo" ? styles.liactive : styles.li}>
                  {" "}
                  <Link href="/bingo">Bingo ticket </Link>
                </li>
              )}

              {role && role === "client" && (
                <li style={menu === "jeux" ? styles.liactive : styles.li}>
                  {" "}
                  <Link href="/jeux">Grand jeux concours </Link>
                </li>
              )}

              {role && role === "client" && (
                <li style={menu === "tickets" ? styles.liactive : styles.li}>
                  <Link href="/tickets">Mes tickets </Link>
                </li>
              )}
<<<<<<< HEAD
              <li style={menu === "contact" ? styles.liactive : styles.li}>
=======
                {/* <li style={styles.li}>
>>>>>>> 6740139edc7fabd68e04d0357dd9fe84b56e54ce
                  <Link href="/contact">Contactez nous </Link>
                </li> */}

              {!role && (
                <li style={styles.login}>
                  <Link href="/connexion">Connexion </Link>
                </li>
              )}
              {role &&   (
<<<<<<< HEAD
      
                  <button style={styles.login} onClick={logOut}>Déconnexion </button>
        
=======
                <button style={styles.login} onClick={logOut}>Déconnexion </button>
>>>>>>> 6740139edc7fabd68e04d0357dd9fe84b56e54ce
              )}
                
            </ul>
          </nav>
        ) : (
          <Image
            onClick={toggleDrawer(true)}
            src={iconMenu}
            width={30}
            height={30}
            alt="menu"
          />
        )}
      </div>
      <Drawer
        anchor={"right"}
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <div style={styles.draw}>
          <ul className="responsiveMenu">
          <Link href="/equipe">
            <li>Qui sommes nous</li>
          </Link>
          <Link href="/regle">
            <li>Règle du jeux</li>
          </Link>
          <Link href="/lots">
            <li>Lot à gagner</li>
          </Link>
            {role && role === "client" && (
              <Link href="/bingo">
                <li>Bingo ticket</li>
              </Link>
            )}

            {role && role === "client" && (
              <Link href="/jeux">
                <li>Grand jeux concours</li>
              </Link>
            )}

            {role && role === "client" && (
              <Link href="/tickets">
                <li>Mes tickets</li>
              </Link>
            )}

            {role && role === "admin" && (
              <Link href="/stats">
                <li>Mes stats</li>
              </Link>
            )}
          </ul>
          {role && role === "admin" && (
            <div>
              <button
                value={"stats"}
                style={
                  menu === "stats"
                    ? styles.sideButtonActive
                    : styles.sideButtonInactive
                }
                onClick={changemenu}
              >
                Mes stats
              </button>
              <button
                value={"generator"}
                style={
                  menu === "generator"
                    ? styles.sideButtonActive
                    : styles.sideButtonInactive
                }
                onClick={changemenu}
              >
                Ticket generator
              </button>
              <button
                value={"ticket"}
                style={
                  menu === "ticket"
                    ? styles.sideButtonActive
                    : styles.sideButtonInactive
                }
                onClick={changemenu}
              >
                Ticket checker
              </button>
              <button
                value={"users"}
                style={
                  menu === "users"
                    ? styles.sideButtonActive
                    : styles.sideButtonInactive
                }
                onClick={changemenu}
              >
                Listes utilisateurs
              </button>
              <button
                value={"sessions"}
                style={
                  menu === "sessions"
                    ? styles.sideButtonActive
                    : styles.sideButtonInactive
                }
                onClick={changemenu}
              >
                {" "}
                Gestions des sessions
              </button>
            </div>
          )}
          {role ? (
            <li style={styles.toLogin} onClick={logOut}>
              <Link href="/connexion">Déconnexion </Link>
            </li>
          ) : (
            <li style={styles.toLogin}>
              <Link href="/connexion">Connexion </Link>
            </li>
          )}
        </div>
      </Drawer>
    </header>
  );
};

export default Header;

const styles = {
  header: {
    width: "100%",
    minHeight: 70,
    display: "flex",
    justifyContent: "end",
    backgroundColor: "white",
    alignItems: "center",
    boxShadow: "0px 4px 15px 0px rgba(0,0,0,0.10)",
    position: "fixed",
    top: 0,
    zIndex: 45739863,
  },
  nav: {
    display: "flex",
    marginRight: 25,
    color: "#AEAEAE",
    alignItems: "baseline",
    listStyleType: "none",
  },

  draw: {
    display: "flex",
    flexDirection: "column",
    width: "70vw",
    maxWidth: 350,
    height: "100%",
    paddingLeft: 15,
    paddingTop: 100,
  },

  li: {
    marginLeft: 15,
    listStyleType: "none",
    textDecoration: "none",
    color: "gray",
    fontWeight:"bold"
  },

  liactive: {
    marginLeft: 15,
    listStyleType: "none",
    textDecoration: "none",
    color: "#02558D",
    fontWeight:"bold"
  },

  login: {
    backgroundColor: " #02558D",
    color: "white",
    width:125,
    height:40,
    textAlign: "center",
    borderRadius: 100,
    marginLeft: 15,
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    listStyleType: "none",
    textDecoration: "none",
    border:"none",
    fontWeight:"bold"
  },
  toLogin: {
    backgroundColor: " #02558D",
    color: "white",
    padding: 10,
    textAlign: "center",
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 100,
    margin: 10,
    marginLeft: 0,
    height: 50,
    listStyleType: "none",
    textDecoration: "none",
    border:"none",
    fontWeight:"bold"

  },
  sideButtonActive: {
    fontSize: 20,
    margin: 5,
    color: "white",
    marginLeft: 0,
    marginRight: 0,
    padding: 10,
    width: "100%",
    border: "none",
    height: 60,
    background: "#41C2B0",
  },
  sideButtonInactive: {
    fontSize: 20,
    margin: 5,
    color: "#3AAB9B",
    marginLeft: 0,
    marginRight: 0,
    padding: 10,
    width: "100%",
    border: "none",
    height: 60,
    background: "none",
  },
};
