import React from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import tea1 from "../../image/tea1.png";
import tea2 from "../../image/tea2.png";
import tea3 from "../../image/tea3.png";
import tea4 from "../../image/tea4.png";
import tea5 from "../../image/tea5.png";
import gift from "../../image/gift.gif"
import Link from "next/link";
import "animate.css";
import Breadcrumbs from 'nextjs-breadcrumbs';


export default function lots() {

    const gifts = [
        {
          name: "Coffret 32 euros",
          src: tea2,
          descrition:"L’infusion au pamplemousse, produit détoxifiant, apporte de nombreux bienfaits pour la santé ",
          href:"/coffret32"
        },
        {
          name: "Coffret 69 euros",
          src: tea1,
          descrition:"Thé matcha pour maigrir ? En tout cas il est nécessaire de l’accompagner avec un régime alimentaire .",
          href:"/coffret69"
        },
        {
          name: "100g thé signature",
          src: tea3,
          descrition:"Nous vous proposons un coffret de thés à personnaliser. Cette boîte sera composé de 6 de nos thés en miniature.",
          href:"/thesignature"
        },
        {
          name: "Infuseur à thé",
          src: tea4,
          descrition:"L’infusion au pamplemousse, produit détoxifiant, apporte de nombreux bienfaits pour la santé",
          href:"/infuseur "
        },
        {
          name: "100g thé detox ",
          src: tea5,
          descrition:"Ce thé a de nombreuses vertus pour la santé et un goût très prononcé. Le thé Matcha est un thé vert japonais en poudre",
          href:"/thedetox"
        },
      ];
    


  return (
    <div className="main2">
      <Head>
        <title>Lots à gagner</title>
        <meta name="description" content="page des lots" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header menu="lots"/>
      <div style ={{paddingTop:100}}>   
        
         <h1 className="h1">Lots à gagner</h1>
           <Breadcrumbs useDefaultStyle={false}
          containerClassName="breakLight" 
          rootLabel="Accueil" />


      </div>
  
      <section style={{display:"flex",
      justifyContent:"center",
      flexDirection:"column",
      alignItems:"center"
     }}>
      <div  style={{ paddingTop:20,
      display:"flex",
      flexWrap:"wrap" }}>
        {gifts.map((g,i) => (
          <div key={i} className="lotsItems animate__animated  animate__backInUp" style= { i/2 == Math.round(i/2) ?stylez.dark :stylez.light }>
             <span style={{width:200,marginBottom:20,marginTop:20}}>
                 <Image src={g.src} alt={g.name}/>
             </span>
             <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                <h3>{g.name}</h3>
                <p>{g.descrition}</p>
                <Link href={`lots${g.href}`}>En savoir plus</Link>    
             </div> 
          </div>
            ))}
        </div>

        <div style={stylez.bigGame}>
          <h2 style={{fontSize:35,margin:5,textAlign:"center"}}>Un grand tirage au sort vous attend !</h2>
          <Image  height={250} width={250} src={gift} alt="gift" />
          <p>Serez-vous l'heureux vainqueur ?</p>
          <span style={{padding:"15px 25px",borderRadius:100,border:"solid 2px white"}}>
          <Link  href={{ pathname: '/lots/grandtirage'}}>
            En savoir plus
          </Link>
          </span>
        
        </div>
      </section>
      <Footer />
    </div>
  );
}
const stylez ={

    dark :{
      background:"linear-gradient(48deg, rgba(56,135,13,1) 0%, rgba(56,135,13,1) 28%, rgba(144,203,6,1) 100%, rgba(211,255,0,1) 100%)",
  
    },

    light:{
        background:"white",
        color :"#38870D"
    },

    bigGame:{
      display:"flex",
      borderRadius:10,
      margin:20,
      flexDirection:"column",
      alignItems:"center",
      width:"100%",
      justifyContent:"center",
      background:"linear-gradient(48deg, rgba(56,135,13,1) 0%, rgba(56,135,13,1) 28%, rgba(144,203,6,1) 100%, rgba(211,255,0,1) 100%)",
      color:"white",
      padding:"60px 25px" 
    }
}