import React from 'react';
import Head from "next/head";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Breadcrumbs from 'nextjs-breadcrumbs';




export default function contact() {        
  return (
    <div className="main2">
      <Head>
        <title>Conctactez-nous</title>
        <meta name="google-site-verification" content="iDBitZ99_g4ELVANaUEpnh57Tum7BZhycjYf21Zxy-M" />
        <meta name="contact" content="contact team" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header menu="contact"/>
      <section 
          style = {{  background:"rgb(56,135,13",
          background:"linear-gradient(83deg, rgba(56,135,13,1) 0%, rgba(56,135,13,1) 50%, rgba(144,203,6,1) 100%, rgba(211,255,0,1) 100%)",
          width:"100%",        
          paddingTop: 125,
          paddingBottom: 50,
          display:"flex",
          flexDirection:"column",
          alignItems:"center",
          height:"100vh" }}>
          <form className="login animate__animated animate__fadeInUp">
          <h1 className="h1">Contactez nous</h1>
              <Breadcrumbs useDefaultStyle={false}
          containerClassName="breakLight" 
          rootLabel="Accueil" />
            <input type="text" placeholder="Nom" value=""/>
            <input type="email" placeholder="Email" value=""/>
            <textarea rows="10" placeholder="Décrire votre message" value=""/>
            <button className="action">Envoyer</button>
          </form>
      </section>
      <Footer />
    </div>
  );
}
