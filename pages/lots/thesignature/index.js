import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import tea3 from "../../../image/tea3.png";
import styles from "../../../styles/Home.module.css";
import Header from "../../../component/Header";
import Footer from "../../../component/Footer";
import Link from "next/link";




export default function thesignature() {


  return (
    <div className={styles.main2}>
    <Head>
      <title>TeaBingo - Jeux concours</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/fav.png" />
    </Head>
    <Header/>
    <section style={{ paddingTop: 125,
       paddingBottom:50,
       minHeight:"100vh",
       display:"flex",
       flexDirection:"column",
       justifyContent:"flex-start",
       alignItems:"center",
       background:" rgb(205, 224, 205)",
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
          <div>
                <h1 style={{margin:8}}>100g thé signature</h1>
                <h2 style={{textAlign:"left",margin:8}}>Description :<br></br> INFUSION AU PAMPLEMOUSSE </h2>
          </div>
        <p style={{padding:10,color:"#8E8E8E", maxWidth:500, lineHeight:1.8, paddingRight:25}} > 
        Ceci est un lot de notre <span style={{color:"grey",fontWeight:"bold"}} ><Link href="/"> Jeu concour </Link></span> <br></br>
        L’infusion au pamplemousse est bien la boisson idéale avant d’aller se coucher. Cette boisson vous permet d’allier la gourmandise avec une santé de fer!
        Cette tisane, tout comme de nombreux thés, a le mérite d’apporter beaucoup de bénéfices pour la santé. Les avantages de consommer de la tisane ou une infusion comprennent la détente du corps, le refroidissement de la température corporelle, l’assouplissement de l’estomac et la réduction de la rétention d’eau dans le corps.

        De plus, suivant son goût et les ingrédients qui le compose, les bénéfices peuvent être plus importants.

        L’infusion au pamplemousse, produit détoxifiant, apporte de nombreux bienfaits pour la santé :

        Riche source de vitamines et de minéraux, contient une quantité faible de calories,
        Une activité antioxydante élevée
        Aide pour la perte de poids ou son maintien,
        Boost le système immunitaire grâce aux bioflavonoïdes qui le composent,
        Combat le diabète grâce à sa haute teneur en Vitamines C,
        Allié contre de nombreuses maladies, tel que des brulures d’estomac, calcul rénaux, cancers, cholestérol
        Et pour finir, cette boisson sera la boisson à préférer pour les femmes enceintes!
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
    <Footer />
  </div>
  );
}
