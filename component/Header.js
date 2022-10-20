import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../image/logo.png";
<<<<<<< HEAD
import iconMenu from "../image/menu.svg";
import Drawer from "@mui/material/Drawer";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useRouter } from "next/router";
import Cookies from 'js-cookie';

const Header = ({ menu, changemenu }) => {
  const router = useRouter();
=======
import menu from "../image/menu.svg";
import Drawer from "@mui/material/Drawer";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const Header = () => {
>>>>>>> 0760426 (udpate format)
  const [width, setWidth] = useState(0);
  const [role, setRole] = useState(null);

  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const updateDimensions = () => {
    setWidth(window.innerWidth);
<<<<<<< HEAD
    localStorage.setItem("width", width);
=======
>>>>>>> 0760426 (udpate format)
  };
  useEffect(() => {
    if (localStorage.getItem("role") !== undefined) {
      setRole(localStorage.getItem("role"));
<<<<<<< HEAD
    }else{
      router.push("/connexion");
    }
=======
    }
    console.log(role);
>>>>>>> 0760426 (udpate format)
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [width]);
<<<<<<< HEAD

  const logout = () => {
    Cookies.remove('accessToken');
    Cookies.remove('userRole');
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('width');
  }
=======
>>>>>>> 0760426 (udpate format)

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
<<<<<<< HEAD
<<<<<<< HEAD
          <Image src={logo} width={56} height={56} alt="logo" />
        </Link>
        {width > 850 ? (
          <nav>
            <ul style={styles.nav}>
              {role && role === "client" && (
                <li style={styles.li}>
                  {" "}
                  <Link href="/bingo">Bingo ticket </Link>
                </li>
              )}

              {role && role === "client" && (
                <li style={styles.li}>
                  {" "}
                  <Link href="/jeux">Grand jeux concours </Link>
                </li>
              )}

              {role && role === "client" && (
                <li style={styles.li}>
                  <Link href="/tickets">Mes tickets </Link>
                </li>
              )}

              {!role && (
                <li style={styles.login}>
                  <Link href="/connexion">Connexion </Link>
                </li>
              )}
              {role && (
                <li style={styles.login} onClick={logout}>
                  <Link href="/connexion">Déconnexion </Link>
                </li>
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
            <li style={styles.toLogin} onClick={logout}>
              <Link href="/connexion">Déconnexion </Link>
            </li>
          ) : (
            <li style={styles.toLogin}>
              <Link href="/connexion">Connexion </Link>
            </li>
          )}
        </div>
=======
          <Image src={logo} width="55" height="60" alt="logo" />
=======
          <div style={{ width: "4%" }}>
            <Image src={logo} alt="logo" />
          </div>
>>>>>>> 9b2aab2 (update route dashboard)
        </Link>
        {width > 650 ? (
          <nav>
            <ul style={styles.nav}>
              {role && role === "client" && (
                <Link href="/bingo">
                  <a style={styles.li}>Bingo ticket</a>
                </Link>
              )}

              {role && role === "client" && (
                <Link href="/jeux">
                  <a style={styles.li}>Grand jeux concours</a>
                </Link>
              )}

              {role && role === "client" && (
                <Link href="/tickets">
                  <a style={styles.li}>Mes tickets</a>
                </Link>
              )}

              {role && role === "admin" && (
                <Link href="/stats">
                  <a style={styles.li2}>Mes stats</a>
                </Link>
              )}

              {!role && (
                <Link href="/connexion">
                  <a style={styles.login}>Connexion</a>
                </Link>
              )}
              {role && (
                <Link href="/connexion">
                  <a style={styles.login}>Déconnexion</a>
                </Link>
              )}
            </ul>
          </nav>
        ) : (
          <Image
            onClick={toggleDrawer(true)}
            src={menu}
            width="30"
            height="30"
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
        <ul style={styles.draw}>
          {role && role === "client" && (
            <Link href="/bingo">
              <a style={styles.li2}>Bingo ticket</a>
            </Link>
          )}

          {role && role === "client" && (
            <Link href="/jeux">
              <a style={styles.li2}>Grand jeux concours</a>
            </Link>
          )}

          {role && role === "client" && (
            <Link href="/tickets">
              <a style={styles.li2}>Mes tickets</a>
            </Link>
          )}

          {role && role === "admin" && (
            <Link href="/stats">
              <a style={styles.li2}>Mes stats</a>
            </Link>
          )}
        </ul>
>>>>>>> 0760426 (udpate format)
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
<<<<<<< HEAD
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
=======
  },

  draw: {
    flex: "flex",
    flexDirection: "column",
    width: "100%",
    padding: 25,
    height: 700,
    paddingTop: 100,
    zIndex: 99999999999999999,
    justifyContent: "center",
>>>>>>> 0760426 (udpate format)
  },

  li: {
    marginLeft: 15,
    listStyleType: "none",
    textDecoration: "none",
    color: "gray",
  },

<<<<<<< HEAD
=======
  li2: {
    margin: 15,
    fontSize: 20,
    listStyleType: "none",
    textDecoration: "none",
    color: "gray",
  },

>>>>>>> 0760426 (udpate format)
  login: {
    backgroundColor: "#41D8C2",
    color: "white",
    padding: 10,
<<<<<<< HEAD
    textAlign: "center",
=======
>>>>>>> 0760426 (udpate format)
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 100,
    marginLeft: 10,
    listStyleType: "none",
    textDecoration: "none",
  },
<<<<<<< HEAD
  toLogin: {
    backgroundColor: "#41D8C2",
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
=======
>>>>>>> 0760426 (udpate format)
};
