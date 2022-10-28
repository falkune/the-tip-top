<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> a584e821a7aee8a69ef870781d3a7bb3e50d105c
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import logo from "../image/whitelogo.png";
import tea1 from "../image/tea1.png";
import tea2 from "../image/tea2.png";
import tea3 from "../image/tea3.png";
import tea4 from "../image/tea4.png";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { useRouter } from "next/router";
import "animate.css";
import ticket from "../image/ticket.gif";
import store from "../image/store.gif";
import keyboard from "../image/keyboard.gif";
import login from "../image/login.gif";
<<<<<<< HEAD
=======
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo from "../image/logo.png"
import ticket from "../image/tickets.svg"
import computer from "../image/computer.svg"
import store from "../image/store.svg"
import keyboard from "../image/keyboard.svg"
import tea1 from "../image/tea1.png"
import tea2 from "../image/tea2.png"
import tea3 from "../image/tea3.png"
import tea4 from "../image/tea4.png"
import Header from '../component/Header'
import Footer from "../component/Footer"
import { useRouter } from 'next/router'
import 'animate.css';

>>>>>>> 82befde (first page)

export default function Home() {
<<<<<<< HEAD
=======

export default function Home() {
>>>>>>> a584e821a7aee8a69ef870781d3a7bb3e50d105c
  const router = useRouter();
  // const role = getCookie('pro');
  const goConnexion = () => {
    if (localStorage.getItem("token") !== undefined) {
      router.push("/bingo");
    } else router.push("/connexion");
  };
<<<<<<< HEAD
=======
  const router = useRouter()
<<<<<<< HEAD

=======
  // const role = getCookie('pro');
>>>>>>> 9822c4a (ajout graphique dans stats)
  const goConnexion = () => {
    router.push('/connexion')




  }

>>>>>>> ddce213 (add ticket page)

  return (
<<<<<<< HEAD
=======

  return (
>>>>>>> a584e821a7aee8a69ef870781d3a7bb3e50d105c
    <div className={styles.main2}>
      <Head>
        <title>TeaBingo - Jeux concours</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/fav.png" />
        {/* <link rel="stylesheet"  href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" /> */}
      </Head>
      <section
        className={styles.homdiv}
        style={{ paddingTop: 50, paddingBottom: 50 }}
      >
        <Image src={logo} width="125" height="140" alt="logo" />
<<<<<<< HEAD
        <h1 className={styles.h1} class="animate__animated animate__bounce">
          Jeux concours !
        </h1>
        <h2 class="animate__animated animate__pulse animate__infinite">
          Participer à notre jeux concours afin de recevoir votre lot
        </h2>
=======
        <h1 className={styles.h1}>Jeux concours !</h1>
        <h2 className="animate__animated animate__pulse animate__infinite">
          Participer à notre jeux concours afin de recevoir votre lot
        </h2>
        <input
          className={styles.bingo}
          type="number"
          placeholder="Vérifier votre numéro"
        />
>>>>>>> a584e821a7aee8a69ef870781d3a7bb3e50d105c
        <button
          type="button"
          onClick={goConnexion}
          className=" baction animate__animated animate__pulse animate__infinite "
        >
          Participer
        </button>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            width: "80%",
            marginTop: 100,
          }}
        >
          <Image
            className={styles.floating}
            src={tea1}
            width={215}
            height={214}
            alt="logo"
          />
          <Image
            className={styles.floating}
            src={tea2}
            width={215}
            height={214}
            alt="logo"
          />
          <Image
            className={styles.floating}
            src={tea3}
            width={250}
            height={189.79}
            alt="logo"
          />
          <Image
            className={styles.floating}
            src={tea4}
            width={250}
            height={189.79}
            alt="logo"
          />
        </div>
      </section>

      <section
        className={styles.part}
        style={{
          color: "#41D8C2",
        }}
      >
        <h2
          className={styles.h2}
          style={{
            color: "#41D8C2",
            marginTop: 50,
            marginBottom: 0,
            fontSize: 40,
          }}
        >
          Comment participer ?
        </h2>
        <p style={{ color: "white" }}>Jouer en 4 étapes</p>
        <div className={styles.cards}>
          <span style={{ padding: 25 }}>
            <strong style={{ fontSize: 50, color: "#41D8C2" }}>1</strong>
            <Image src={ticket} width="125" alt="logo" />
            Prendre les 10 chiffres de votre ticket
          </span>

          <span style={{ padding: 25 }}>
            <strong style={{ fontSize: 50, color: "#41D8C2" }}>2</strong>
            <Image src={login} width="150" height="150" alt="computer" />
            Connectez vous sur note plateforme
          </span>

          <span style={{ padding: 25 }}>
            <strong style={{ fontSize: 50, color: "#41D8C2" }}>3</strong>
            <Image src={keyboard} width="150" height="150" alt="keybord" />
            Entrer vos 10 numéro pour voir votre lot gagné
          </span>

          <span style={{ padding: 25 }}>
            <strong style={{ fontSize: 50, color: "#41D8C2" }}>4</strong>
            <Image src={store} width="250" height="250" alt="store" />
            Aller chercher votre lot en magasin
          </span>
        </div>
      </section>
      <Footer />
<<<<<<< HEAD
=======
    <div className={styles.main}>
      <Head>
        <title>TeaBingo - Jeux concours</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/fav.png" />
        {/* <link rel="stylesheet"  href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" /> */}
      </Head>
<<<<<<< HEAD
      <Header/>
=======
      <Header user="pro"/>
>>>>>>> 9822c4a (ajout graphique dans stats)
      <section className={styles.part} style={{paddingTop:50,paddingBottom:50}}>
<<<<<<< HEAD
        <Image src={logo} width="125" height="140" alt='logo'/> 
        <h1 className={styles.h1}>Gagner des lots magique</h1> 
=======
        <Image src={logo} width="125" height="140" /> 
        <h1 className={styles.h1}>Gagner des lots magique</h1>
<<<<<<< HEAD
      <h2>YUP</h2>
>>>>>>> f3342ea (add YUP in index.js)
=======
>>>>>>> 5fb08fb (Add COMPOSE_PROJECT ENV in release, remove YUP)
        <p>Participer à notre jeux concours afin de recevoir votre lot</p>
          <button type='button' onClick={goConnexion} className={styles.action} style={{margin:25}}>Commencer</button>
      </section>

      <section className={styles.part} style={{backgroundColor:"#40EFD7",color:"white",minHeight:400,paddingTop:50,paddingBottom:50}}>
       <h2 className={styles.h2} style={{color:"white",marginTop:50,marginBottom:0}}>Comment participer ?</h2>
        <p style={{color:"white"}}>Jouer en 4 étapes</p>
        <div className={styles.cards} >
         <span>
           <strong style={{fontSize:50}}>1</strong>
           <Image src={ticket} width="50" height="50" alt='tecket'/> 

              Prendre les 10 chiffres de votre ticket
         </span>

         <span>
            <strong style={{fontSize:50}}>2</strong>
            <Image  src={computer} width="50" height="50" alt='computer'/> 
             Connectez vous sur note plateforme
         </span>

         <span>
            <strong style={{fontSize:50}}>3</strong>
            <Image src={keyboard} width="50" height="50" alt='keybord'/> 
            Entrer vos 10 numéro pour voir votre lot gagné
         </span>

         <span>
            <strong style={{fontSize:50}}>4</strong>
            <Image src={store} width="50" height="50" alt='store'/> 
            Aller chercher votre lot en magasin 
         </span>




        </div>


      </section>

      <section  id="lots" className={styles.part} style={{paddingTop:50,paddingBottom:50}}>
       <h2 className={styles.h2} style={{marginBottom:0}}>Quel sont les lots ?</h2>
       <p style={{color:"#40EFD7"}}>Jouer en 4 étapes</p>

      <div className={styles.cards2} >
       <span>
       <Image src={tea1} width="150" height="150" alt='lot 1'/> 
          <p>
             Un infuseur à thé         
          </p>
           </span>

         <span>
            <Image src={tea2} width="150" height="150" objectFit='contain' alt='lot 2'/> 
            <p>
            Une boite de 100g d’un thé détox ou d’infusion         
            </p>
            </span>

         <span>
         <Image src={tea3} width="150" height="150" objectFit='contain' alt='lot 3'/> 
         <p>
         Une boite de 100g d’un thé signature
         </p>
         </span>

         <span>
         <Image src={tea4} width="150" height="150" objectFit='contain' alt='lot 4'/> 
              Un coffret découverte d’une valeur de 39€         
         </span>

         <span>
         <Image src={tea4} width="150" height="150" objectFit='contain' alt='lot 5'/> 
             un coffret découverte d’une valeur de 69€         
         </span>





        </div>


      </section>

      <Footer/>
>>>>>>> 82befde (first page)
=======
>>>>>>> a584e821a7aee8a69ef870781d3a7bb3e50d105c
    </div>
  );
}
