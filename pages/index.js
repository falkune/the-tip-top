import React, { useEffect, useState ,useCallback } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import teab from "../image/TeaBingo.png"
import Header from "../component/Header";
import Footer from "../component/Footer";
import { useRouter } from "next/router";
import "animate.css";
import axios from "axios";
import Link from "next/link";
import dayjs from "dayjs"
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import Cookies from 'js-cookie';


export default function Home() {
  const [current, setCurrent] = useState("");
  const router = useRouter();


  const particlesInit = useCallback(async engine => {
     
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container)
  }, []);

  useEffect(() => {
    getCurrent()
  }, []);

  const getCurrent = async () => {
    //fonction pour créer un ticket
    const api =
      "https://api.dev.dsp-archiwebo21-ct-df-an-cd.fr/Session/get-current-session";
    try {
      let currenSession = await axios.get(api);
      setCurrent(currenSession.data);
      Cookies.set("current", currenSession.data);
       
      setCurrent(currenSession.data[0])
    } catch (e) {
       
    }
  };
  const goResult = () => {
      router.push({
        pathname: `connexion`,
      });
  };



  return (
    <div className={styles.main}>
      <Head>
        <title>TeaBingo - Jeux concours</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/fav.png" />
        <link rel="stylesheet" href="https://use.typekit.net/zdg4oks.css"></link>
      </Head>
      <Header/>
      <section
        className={styles.homdiv}
        style={{ paddingTop: 50, paddingBottom: 50 }} >   
        {current && <h3 style={{color:"white",margin:5,
        fontSize:"1.4em",
        border:"solid 2px",
        borderRadius:100,
        padding:15,
        paddingLeft:35,
        paddingRight:35}}>
        Du {dayjs(current.startDate).format('DD MMMM YYYY')} au  {dayjs(current.endDate).format('DD MMMM YYYY')}</h3> }
      
        <span style={{minWidth:160,width:"12%",marginTop:20}}>
          <Image className="animate__animated  animate__backInUp" src={teab}/>
          <Link href="/regle">
            <p style={{textDecoration:"underline",color:"white",margin:2,lineHeight:1.5}}> Voir les règles de participation</p> 
          </Link>
        </span>
        <span className="animate__animated animate__heartBeat animate__infinite	infinite">
        <h1 className={styles.h1}>Jeu concours </h1></span>

          <h2>Tenter de gagner l'un de nos nombreux lots <br></br>
          Des infuseurs ou coffrets spéciaux !</h2>
        <button type="button" onClick={() => goResult()} className={"homebutton animate__animated animate__pulse animate__infinite	infinite"}
          style={{marginBottom:20,marginTop:20,
            boxShadow: "0px 0px 0px 5px rgba(255,255,255,0.34)"}} >
            Participer
        </button> 
        <h3  className='floating' style={{color:"white",margin:5}}> ou </h3>
        <Link href="/lots">
          <button type="button"  className={"homebutton animate__animated animate__pulse animate__infinite	infinite"}
            style={{marginBottom:20,marginTop:20, boxShadow: "0px 0px 0px 5px rgba(255,255,255,0.34)"}}>
              Voir les lots à gagner
          </button> 
        </Link>

      </section>
      <Particles init={particlesInit} loaded={particlesLoaded}
          id="tsparticles"
          options={
            {"fullScreen": {
              "zIndex": 1
            },
            "emitters": [
              {
                "position": {
                  "x": 0,
                  "y": 50
                },
                "rate": {
                  "quantity": 10,
                  "delay": 0.8
                },
                "particles": {
                  "move": {
                    "direction": "right",
                    "outModes": {
                      "top": "none",
                      "left": "none",
                      "default": "destroy"
                    }
                  }
                }
              },
              {
                "position": {
                  "x": 100,
                  "y": 50
                },
                "rate": {
                  "quantity": 10,
                  "delay": 0.8
                },
                "particles": {
                  "move": {
                    "direction": "left",
                    "outModes": {
                      "top": "none",
                      "right": "none",
                      "default": "destroy"
                    }
                  }
                }
              }
            ],
            "particles": {
              "color": {
                "value": [
                  "#ffffff",
                  "#7EB906",
                  "#A1E811",
                  "#FFAC07"
                ]
              },
              "move": {
                "decay": 0.05,
                "direction": "top",
                "enable": true,
                "gravity": {
                  "enable": true
                },
                "outModes": {
                  "top": "none",
                  "default": "destroy"
                },
                "speed": {
                  "min": 10,
                  "max": 50
                }
              },
              "number": {
                "value": 0
              },
              "opacity": {
                "value": 1
              },
              "rotate": {
                "value": {
                  "min": 0,
                  "max": 360
                },
                "direction": "random",
                "animation": {
                  "enable": true,
                  "speed": 300
                }
              },
              "tilt": {
                "direction": "random",
                "enable": true,
                "value": {
                  "min": 0,
                  "max": 360
                },
                "animation": {
                  "enable": true,
                  "speed": 300
                }
              },
              "size": {
                "value": {
                  "min": 0,
                  "max": 5
                },
                "animation": {
                  "enable": true,
                  "startValue": "min",
                  "count": 1,
                  "speed": 150,
                  "sync": true
                }
              },
              "roll": {
                "darken": {
                  "enable": true,
                  "value": 25
                },
                "enable": true,
                "speed": {
                  "min": 5,
                  "max": 15
                }
              },
              "wobble": {
                "distance": 30,
                "enable": true,
                "speed": {
                  "min":0,
                  "max":50
                }
              },
              "shape": {
                "type": "circle",
                "options": { confetti: {
                  type: ["circle", "square"]
                }}
              }
            }}} />
      <Footer />
    </div>
  );
}
