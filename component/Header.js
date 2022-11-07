import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../image/logo.png";
import menu from "../image/menu.svg";
import Drawer from "@mui/material/Drawer";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const Header = () => {
  const [width, setWidth] = useState(0);
  const [role, setRole] = useState(null);

  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const updateDimensions = () => {
    setWidth(window.innerWidth);
    localStorage.setItem("width", width);
  };
  useEffect(() => {
    if (localStorage.getItem("role") !== undefined) {
      setRole(localStorage.getItem("role"));
    }
    console.log(role);
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [width]);

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
        {width > 650 ? (
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

              {role && role === "admin" && (
                <li style={styles.li}>
                  {" "}
                  <Link href="/stats">Mes stats </Link>
                </li>
              )}

              {!role && (
                <li style={styles.login}>
                  <Link href="/connexion">Connexion </Link>
                </li>
              )}
              {role && (
                <li style={styles.login}>
                  <Link href="/connexion">Déconnexion </Link>
                </li>
              )}
            </ul>
          </nav>
        ) : (
          <Image
            onClick={toggleDrawer(true)}
            src={menu}
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
            {role ? (
              <li style={styles.toLogin}>
                <Link href="/connexion">Déconnexion </Link>
              </li>
            ) : (
              <li style={styles.toLogin}>
                <Link href="/connexion">Connexion </Link>
              </li>
            )}
          </ul>
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
    height: "100%",
    paddingLeft: 15,
    paddingTop: 100,
  },

  li: {
    marginLeft: 15,
    listStyleType: "none",
    textDecoration: "none",
    color: "gray",
  },

  login: {
    backgroundColor: "#41D8C2",
    color: "white",
    padding: 10,
    textAlign: "center",
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 100,
    marginLeft: 10,
    listStyleType: "none",
    textDecoration: "none",
  },
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
    listStyleType: "none",
    textDecoration: "none",
  },
};
