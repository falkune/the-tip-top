import React from "react";
import Head from "next/head";
import Image from "next/image";
import tea3 from "../../../image/tea3.png";
import Header from "../../../component/Header";
import Footer from "../../../component/Footer";
import Link from "next/link";
import Breadcrumbs from 'nextjs-breadcrumbs';
import CookiesManagement from '../../../component/cookiesManagement';



export default function thesignature() {


  return (
    <div className="main2">
    <Head>
      <title>Coffret Découverte Tip Top</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="google-site-verification" content="iDBitZ99_g4ELVANaUEpnh57Tum7BZhycjYf21Zxy-M" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header/>
    <section style={{ paddingTop: 125,
       paddingBottom:50,
       minHeight:"100vh",
       display:"flex",
       flexDirection:"column",
       justifyContent:"flex-start",
       alignItems:"center",
       background:" rgb(221, 237, 221)",
       width:"100%" }}>
      <div style={{display:"flex",alignItems:"center",flexWrap:"wrap",  alignItems:"start",}}>
        <div 
          className="animate__animated animate__bounceInLeft"
          style={{backgroundColor:"white",borderRadius:10,margin:20}}>
             <Image src={tea3} alt="coffret tea" />
        </div>

        <div 
          className="animate__animated animate__bounceInRight"
          style={{display:"flex",
        padding:15,
        margin:20,
        backgroundColor:"white",
        flexDirection:"column",
        alignItems:"center",
        borderRadius:10 }}>       
            <Breadcrumbs useDefaultStyle={false}
          containerClassName="breakLight" 
          rootLabel="Accueil" />
          <h1 style={{margin:8}}>100g thé signature</h1>
          <h2 style={{textAlign:"left",margin:8}}>Coffret Découverte Tip Top </h2>
        <p style={{padding:10,color:"#8E8E8E", maxWidth:500, lineHeight:1.8, paddingRight:25}} > 
        Ceci est un lot de notre <span style={{color:"grey",fontWeight:"bold"}} ><Link href="/"> Jeu concour </Link></span> <br></br>
      La découverte au sens propre ! Profitez d’un moment convivial entre amis ou avec 
      votre famille autour d’une tasse de thé. Le coffret vous fera découvrir de multiples saveurs 
      façon Thé Tip Top, allant de l’infusion, au thé et même au matcha.
      En effet, le coffret decouverte est composé de 36 sachets de thé avec 6 mélanges de thés différents.
        </p>
        <section className="childLot">
            <strong style={{color:"grey",marginBottom:10}}>Voir les autres lots</strong>
            <Link href={{ pathname: '/lots/coffret69'}}>Coffret 69 euros</Link>
            <Link href={{ pathname: '/lots/coffret32'}}>Coffret 32 euros</Link>
            <Link  href={{ pathname: '/lots/thedetox'}}>100g thé détox</Link>
            <Link  href={{ pathname: '/lots/infuseur'}}>Infuseur à thé</Link>
        </section>

       </div>
      </div>
  

     
  
    </section>
    <CookiesManagement/>
    <Footer />
  </div>
  );
}
