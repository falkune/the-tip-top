import React from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "../../../component/Header";
import Footer from "../../../component/Footer";
import Link from "next/link";
import tea5 from "../../../image/tea5.png";
import Breadcrumbs from 'nextjs-breadcrumbs';





export default function thedetox() {


  return (
    <div className="main2">
      <Head>
        <title>Coffret matcha lover</title>
        <meta name="Coffret matcha lover" content="tea magique" />
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
               <Image src={tea5} alt="coffret tea" />
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
            <h1 style={{margin:8}}>100g thé detox </h1>
            <h2 style={{textAlign:"center",margin:8}}> Coffret matcha lover </h2>
          <p style={{padding:10,color:"#8E8E8E", maxWidth:500, lineHeight:1.8, paddingRight:25}} > 
         Description : Ceci est un lot de notre <span style={{color:"grey",fontWeight:"bold"}} ><Link href="/lots"> Jeu concour </Link></span> <br></br>
          Ce thé a de nombreuses vertus pour la santé et un goût très prononcé. Le thé Matcha est un thé vert japonais en poudre, de couleur vert vif qui pourrait être considéré comme un super aliment. En effet les bienfaits du Thé Matcha sur la santé sont nombreux:
          – Très riche en antioxydants : ce sont des catéchines, stimulant l’immunité et protégeant les cellules du vieillissement
          – Lutte contre l’oxydation du cholestérol
          – Contribue à la protection contre des maladies, et notamment le cancer
          – Composé de L-théanine, un acide aminé qui aide à la relaxation
          – Composé également de chlorophyle, favorisant l’élimination des toxines
          – Bien-sûr en caféine, qui permet d’accroître votre vigilance
          </p>
          <section className="childLot">
            <strong style={{color:"grey",marginBottom:10}}>Voir les autres lots</strong>
            <Link href={{ pathname: '/lots/coffret69'}}>Coffret 69 euros</Link>
            <Link href={{ pathname: '/lots/coffret32'}}>Coffret 32 euros</Link>
            <Link  href={{ pathname: '/lots/thesignature'}}>100g thé signature</Link>
            <Link  href={{ pathname: '/lots/infuseur'}}>Infuseur à thé</Link>
          </section>

         </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
