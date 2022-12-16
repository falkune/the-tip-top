import React, { useEffect, useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import Drawer from "@mui/material/Drawer";
import { useRouter } from "next/router";
import Cookies from 'js-cookie';
import ApiContext from '../context/apiContext';
import { notifier } from "../fonctions/utils";
import { getLogout } from '../fonctions/users';

const Header = ({ menu, changemenu }) => {
  const router = useRouter();
  const [width, setWidth] = useState(0);
  const [role, setRole] = useState(null);
  const context = useContext(ApiContext);
  console.log("test", role);
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const updateDimensions = () => {
    setWidth(window.innerWidth);
    Cookies.set("width", width);
  };

  useEffect(() => {
    updateDimensions();
    setRole(Cookies.get('role'))
    console.log(Cookies.get('role'))
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [width]);

  const logOut = () => {
    getLogout(context)
      .then((response) => {
        notifier(response.message, "success");
        Cookies.remove('authToken');
        Cookies.remove('role');
        Cookies.remove('idClient');
        router.push("/connexion")
      })
      .catch((error) => {
        notifier(error);
      })
  }

  return (
    <header>
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          display: "flex",
          alignItems: "center",
          padding: 15,
          justifyContent: "space-between",
        }}
      >
        <Link href="/">
          <span style={{ width: 56, height: 56 }}>
            <Image src='/logo.png' width={56} height={56} alt="logo" />
          </span>
        </Link>
        {width > 850 ? (
          <nav>
            <ul style={styles.nav}>
              {!role || role == "client" ? (
                <>
                  <li style={menu == "equipe" ? styles.liactive : styles.li}>
                    <Link href="/equipe">
                      Qui sommes nous ?
                    </Link>
                  </li>

                  <li style={menu == "regle" ? styles.liactive : styles.li}>
                    <Link href="/regle">
                      Règle du jeux
                    </Link>
                  </li>

                  <li style={menu == "lots" ? styles.liactive : styles.li}>
                    <Link href="/lots">
                      Lot à gagner
                    </Link>
                  </li>
                </>
              ) : (<></>)}

              {role && role == "admin" && (
                <li style={menu == "bingo" ? styles.liactive : styles.li}>
                  <Link href="/stats">
                    Administration
                  </Link>
                </li>
              )}


              {role && role == "client" && (
                <li style={menu == "bingo" ? styles.liactive : styles.li}>
                  {" "}
                  <Link href="/bingo">Bingo ticket </Link>
                </li>
              )}

              {role && role == "client" && (
                <li style={menu == "jeux" ? styles.liactive : styles.li}>
                  {" "}
                  <Link href="/jeux">Grand jeux concours </Link>
                </li>
              )}

              {role && role == "client" && (
                <li style={menu == "tickets" ? styles.liactive : styles.li}>
                  <Link href="/tickets">Mes tickets </Link>
                </li>
              )}
              {!role || role == "client" &&

                <li style={menu == "contact" ? styles.liactive : styles.li}>
                  <Link href="/contact">Contactez nous </Link>
                </li>}

              {!role && (
                <li style={styles.login}>
                  <Link href="/connexion">Connexion </Link>
                </li>
              )}
              {role && (
                <button style={styles.login} onClick={logOut}>Déconnexion </button>
              )}

            </ul>
          </nav>
        ) : (
          <Image
            onClick={toggleDrawer(true)}
            src='/menu.svg'
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
            {!role || role == "client" ? (
              <>
                <li style={menu == "equipe" ? styles.liactive : styles.li}>
                  <Link href="/equipe">
                    Qui sommes nous ?
                  </Link>
                </li>

                <li style={menu == "regle" ? styles.liactive : styles.li}>
                  <Link href="/regle">
                    Règle du jeux
                  </Link>
                </li>

                <li style={menu == "lots" ? styles.liactive : styles.li}>
                  <Link href="/lots">
                    Lot à gagner
                  </Link>
                </li>
              </>
            ) : (<></>)}
            {role && role == "client" && (
              <Link href="/bingo">
                <li>Bingo ticket</li>
              </Link>
            )}

            {role && role == "client" && (
              <Link href="/jeux">
                <li>Grand jeux concours</li>
              </Link>
            )}

            {role && role == "client" && (
              <Link href="/tickets">
                <li>Mes tickets</li>
              </Link>
            )}

            {role && role == "admin" && (
              <div>
                <button
                  value={"stats"}
                  style={
                    menu == "stats"
                      ? styles.DrawereButtonActive
                      : styles.DrawereButtonInactive
                  }
                  onClick={changemenu}
                >
                  Stats
                </button>

                <button
                  value={"generator"}
                  style={
                    menu == "generator"
                      ? styles.DrawereButtonActive
                      : styles.DrawereButtonInactive
                  }
                  onClick={changemenu}
                >
                  Ticket generator
                </button>

                <button
                  value={"ticket"}
                  style={
                    menu == "ticket"
                      ? styles.DrawereButtonActive
                      : styles.DrawereButtonInactive
                  }
                  onClick={changemenu}
                >
                  Ticket checker
                </button>
                <button
                  value={"users"}
                  style={
                    menu == "users"
                      ? styles.DrawereButtonActive
                      : styles.DrawereButtonInactive
                  }
                  onClick={changemenu}
                >
                  Listes utilisateurs
                </button>
                <button
                  value={"sessions"}
                  style={
                    menu == "sessions"
                      ? styles.DrawereButtonActive
                      : styles.DrawereButtonInactive
                  }
                  onClick={changemenu}
                >
                  {" "}
                  Gestions de la session
                </button>
              </div>
            )}
          </ul>

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
    display: "flex",
    alignItems: "center",
    listStyleType: "none",
    textDecoration: "none",
    color: "gray",
    fontWeight: "bold"
  },

  liactive: {
    display: "flex",
    alignItems: "center",
    marginLeft: 15,
    listStyleType: "none",
    textDecoration: "none",
    color: "#38870D",
    fontWeight: "bold"
  },

  login: {
    backgroundColor: " #38870D",
    color: "white",
    width: 125,
    height: 40,
    textAlign: "center",
    borderRadius: 100,
    marginLeft: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    listStyleType: "none",
    textDecoration: "none",
    border: "none",
    fontWeight: "bold"
  },
  toLogin: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: " #38870D",
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
    border: "none",
    fontWeight: "bold"

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
    background: "#96D614",
  },
  sideButtonInactive: {
    fontSize: 20,
    margin: 5,
    color: "#96D614",
    marginLeft: 0,
    marginRight: 0,
    padding: 10,
    width: "100%",
    border: "none",
    height: 60,
    background: "none",
  },
  DrawereButtonInactive: {
    fontSize: 20,
    color: "grey",
    marginLeft: 0,
    marginRight: 0,
    padding: 0,
    width: "100%",
    border: "none",
    height: 60,
    marginBottom: 20,
    textAlign: "left",
    background: "none",
  },
  DrawereButtonActive: {
    fontSize: 20,
    color: "#108427",
    marginLeft: 0,
    marginRight: 0,
    padding: 0,
    width: "100%",
    border: "none",
    height: 60,
    marginBottom: 20,
    textAlign: "left",
    background: "none",
  },
};
