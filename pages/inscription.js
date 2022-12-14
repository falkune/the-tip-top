import React, { useState, useContext } from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Link from "next/link";
import facebook from "../image/facebook.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from "next/router";
import { faEye } from '@fortawesome/free-solid-svg-icons';
import ApiContext from '../context/apiContext';
import { register, googleLoginRegister, facebookLoginRegister } from '../fonctions/users';
import Cookies from 'js-cookie';
import { notifier } from "../fonctions/utils";


export default function Inscription() {
  const context = useContext(ApiContext);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [nom, setNom] = useState("");
  const [dateNaissance, setDateNaissance] = useState(null);
  const [password, setPassword] = useState("");
  const [showPassword, setShowpassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showVerifPassword, setShowVerifpassword] = useState(false);

  const showHidePassword = () => {
    if (showPassword) {
      setShowpassword(false);
    } else {
      setShowpassword(true);
    }
  }

  const showHideVerifPassword = () => {
    if (showVerifPassword) {
      setShowVerifpassword(false);
    } else {
      setShowVerifpassword(true);
    }
  }

  const googleRegister = async () => {
    let user = await googleLoginRegister(context)
    if (user.statusCode) {
      console.log(user)
      if (Array.isArray(user.message)) {
        user.message.forEach(element => {
          notifier(element, "error", "bottom-right", 5000);
        });
      } else {
        notifier(user.message, "error", "bottom-right", 5000);
      }
    } else {
      if (Cookies.get('role') == "admin")
        router.push({ pathname: "/stats" }, undefined, { shallow: true });
      else
        router.push({ pathname: "/bingo" }, undefined, { shallow: true });
    }
  }
  


  const inscription = async (e) => {
    e.preventDefault();
    if (password == confirmPassword) {
      register(context, nom, email, password, dateNaissance)
        .then((response) => {
          if (response.statusCode != 201) {
            if (Array.isArray(response.message)) {
              response.message.forEach(el => notifier(el))
            } else {
              notifier(response.message)
            }
          } else {
            notifier("un mail vous a été envoyer pour valide votre compte", "success")
          }
        })
        .catch((error) => console.log("ici ",error.message));
    }
  }


  return (
    <div>
      <div className="container"
        style={{
          background: "linear-gradient(83deg, rgba(56,135,13,1) 0%, rgba(56,135,13,1) 50%, rgba(144,203,6,1) 100%, rgba(211,255,0,1) 100%)"
        }} >
        <Head>
          <title>Inscription</title>
          <meta name="subscribe" content="page d'inscription" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <section className="login animate__animated animate__fadeInUp">
          <form
            className="part"
            style={{ borderBottom: "solid 1px #D2D2D2" }}
            onSubmit={(e) => inscription(e)}
          >
            <h1 style={{ fontSize: 25, color: "#38870D" }}>
              Inscription
            </h1>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="text"
              name="firstName"
              placeholder="Nom prénom"
              onChange={(e) => setNom(e.target.value)}
              required
            />
            <input
              type="date"
              name="birthday"
              placeholder="Date de naissance"
              onChange={(e) => setDateNaissance(e.target.value)}
              required
            />
            <div style={{ position: "relative", width: "100%" }}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Mot de passe"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                style={{ position: "absolute", top: "36%", right: "40px" }}
                onClick={showHidePassword}>
                <FontAwesomeIcon icon={faEye} />
              </span>
            </div>
            <div style={{ position: "relative", width: "100%" }}>
              <input
                type={showVerifPassword ? "text" : "password"}
                placeholder="Confirmation du mot de passe"
                name="confimPassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <span
                style={{ position: "absolute", top: "36%", right: "40px" }}
                onClick={showHideVerifPassword}>
                <FontAwesomeIcon icon={faEye} />
              </span>
            </div>
            <button
              className="action"
              style={{ animation: "pulse 1sec infite" }}
            >
              Inscription
            </button>
          </form>
          <div className="social">
          
            <button
              style={{
                backgroundColor: "white",
                fontWeight: "bold",
                color: "#437BFF",
                boxShadow: "0px 0px 6px 4px rgba(0,0,0,0.10)",
              }}
              onClick={googleRegister}
            >
              <span style={{ position: "absolute", left: 8, bottom: 1 }}>
                <Image src='/google.svg' width="40" height="40" alt="google logo" />
              </span>
              S'inscrire
            </button>
          </div>
          <small style={{ color: "grey", margin: 15 }}>
            Déjà un compte ?
            <strong style={{
              backgroundColor: "#cde0cd",
              margin: 10,
              fontWeight: "bold",
              color: "#38870D",
              border: "none",
              padding: 10,
              border: 5
            }}>
              <Link href="/connexion"> Se connecter</Link>
            </strong>
          </small>
        </section>
      </div>
      <Footer />

    </div>
  );
}


