import React from "react";
import Head from "next/head";
import Image from "next/image";
import team from "../image/team.jpg";
import Header from "../component/Header";
import Footer from "../component/Footer";
import "animate.css";
import Breadcrumbs from 'nextjs-breadcrumbs';

export default function equipe() {


  return (
    <div className="main2">
      <Head>
        <title>Qui sommes nous </title>
        <meta name="google-site-verification" content="iDBitZ99_g4ELVANaUEpnh57Tum7BZhycjYf21Zxy-M" />
        <meta name="Equipe teaBingo" content="lequipe tiptop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header menu={"equipe"} />
      <section
className="rule"
style={{
  color: " #38870D",
  padding: 0,
  paddingTop:80
}}
>
<section style={{marginTop:50,
minHeight:"100vh",
width:"100%",
display:"flex",
flexDirection:"column",
alignItems:"center",
flex:1}}>
  <div style={{marginBottom:50,display:"flex",flexDirection:"column",alignItems:"center"}}>
      <h1 className="h1" >Qui sommes nous ?</h1>
      <Breadcrumbs useDefaultStyle={false}
          containerClassName="breakLight" 
          rootLabel="Accueil" />  </div>
  <div className="team">  <Image  className="animate__animated  animate__backInUp"  style={{width:"50%"}} src={team} alt="team dev"/>
</div>
<div className="team2">
<h2 className="animate__animated animate__fadeInUp">Une team soudé & passionné </h2>
<p className="animate__animated animate__fadeInUp" style={{color:"white"}}> C'EST AVANT TOUT UNE ÉQUIPE DE FEMMES ET D'HOMMES PASSIONNÉS PAR LEUR MÉTIER, LEUR SPORT, LEUR FAMILLE ... LA VIE QUOI ! 
VOUS CONNAISSEZ PEUT-ÊTRE DÉJÀ LE PRODUIT, DÉCOUVREZ CEUX QUI EN SONT SUR PARIS!</p>
</div>
</section>

      </section>
      <Footer />
    </div>
  );
}
