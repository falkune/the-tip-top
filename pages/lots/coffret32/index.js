import React from "react";
import Head from "next/head";
import Image from "next/image";
import tea2 from "../../../image/tea2.png";
import Header from "../../../component/Header";
import Footer from "../../../component/Footer";
import Link from "next/link";
import Breadcrumbs from 'nextjs-breadcrumbs';



export default function coffret32() {


  return (
    <div className="main2">
      <Head>
        <title>Darjeeling – Thé noir bio</title>
        <meta name="Darjeeling – Thé noir bio" content="Generated by create next app" />
        <meta name="google-site-verification" content="iDBitZ99_g4ELVANaUEpnh57Tum7BZhycjYf21Zxy-M" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <section style={{ 
         paddingTop: 125,
         paddingBottom:50,
         minHeight:"100vh",
         display:"flex",
         flexDirection:"column",
         justifyContent:"flex-start",
         alignItems:"center",
         background:" rgb(221, 237, 221)",
         width:"100%" }}>
        <div 
        style={{display:"flex",alignItems:"center",flexWrap:"wrap",  alignItems:"start",}}>
          <div 
          className="animate__animated animate__bounceInLeft"
          style={{backgroundColor:"white",borderRadius:10,margin:20}}>
               <Image src={tea2} alt="coffret tea" />
          </div>

          <div 
          className="animate__animated animate__bounceInRight"
          style={{
          display:"flex",
          padding:15,
          margin:20,
          backgroundColor:"white",
          flexDirection:"column",
          alignItems:"center",
          borderRadius:10 }}>
                          <Breadcrumbs useDefaultStyle={false}
          containerClassName="breakLight" 
          rootLabel="Accueil" />

 
                  <h1 style={{margin:8}}>Coffret 32 euros</h1>
                  <h2 style={{textAlign:"left",margin:8}}>Darjeeling – Thé noir bio </h2>
          <p style={{padding:10,color:"#8E8E8E", maxWidth:500, lineHeight:1.8, paddingRight:25}} > 
          Description : Ceci est un lot de notre <span style={{color:"grey",fontWeight:"bold"}} ><Link href="/lots"> Jeu concour </Link></span> <br></br>
          Le thé noir est la boisson la plus bue dans le monde. Il offre également une variété de bienfaits pour la santé car il contient des antioxydants et des composés qui peuvent aider à réduire l’inflammation dans le corps, mais pas que. Pour en découvrir tous les bienfaits, direction le blog ici !
          Thé Tip Top vous présente ce thé noir venu tout droit d’Inde, cultivé dans la région montagneuse de Darjeeling depuis plusieurs décennies.
          Thé noir de luxe, il est issu de l’agriculture biologique et sera votre allié préféré pour les petit-déjeuner et pour commencer votre journée !
          Ce thé est disponible en sachet, pour vous suivre partout. N’attendez plus !          </p>
          <section className="childLot">
            <strong style={{color:"grey",marginBottom:10}}>Voir les autres lots</strong>
            <Link href={{ pathname: '/lots/coffret69'}}>Coffret 69 euros</Link>
            <Link  href={{ pathname:'/lots/thesignature'}}>100g thé signature</Link>
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
