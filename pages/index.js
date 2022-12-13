/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState ,useCallback,useContext } from "react";
import Head from "next/head";
import Image from "next/image";
import teab from "../image/TeaBingo.png"
import show from "../image/show.gif"
import Header from "../component/Header";
import Footer from "../component/Footer";
import { useRouter } from "next/router";
import "animate.css";
import Link from "next/link";
import dayjs from "dayjs"
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import Cookies from 'js-cookie';
import ApiContext from '../context/apiContext';


export default function Home() {
  const [current, setCurrent] = useState("");
  const router = useRouter();
  const context = useContext(ApiContext)


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
    let sessions = context.backend.api.sessions.get('get-current-session', {
      Accept: "Application/json",
      "Content-Type": "application/json",
    })
    sessions.then((response) => {
      if(response.statusCode){
        console.log("vrai", response)
      }else{
        setCurrent(response[0]._id);
        console.log("good", response)
        Cookies.set('currentStart',response[0].startDate)
        Cookies.set('currentEnd',response[0].endDate)
      }
    })
  };

  const goResult = () => {
      router.push({
        pathname: `connexion`,
      });
  };



  return (
    <div className="main">
      <Head>
        <title>TeaBingo - Jeux concours</title>
        <meta name="google-site-verification" content="iDBitZ99_g4ELVANaUEpnh57Tum7BZhycjYf21Zxy-M" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/zdg4oks.css"></link>
      </Head>
      <Header/>
      <section
        className="homdiv"
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
          <Image className="animate__animated  animate__backInUp" src={teab} alt="teaBingo title"/>
        </span>

          <div style =
          {{display:"flex",
          flexDirection:"column",
          alignItems:"center",
          width:"100%",
          maxWidth:250,
          padding:10,
          paddingTop:20,
          borderRadius:20}} >
                    <Link href="/regle" passHref>
                    <p style={{color:"white", textDecoration:"underline",fontWeight:"bold", margin:2}}> Voir les règles<br></br> de participation</p> 
                    </Link>
             <span>
                   <Image src={show} height={50} width={50} alt="show finger"/>
              </span> 
          </div>

        <span className="animate__animated animate__heartBeat animate__infinite	infinite">
        <h1 className="h1">Jeu concours</h1></span>

          <h2>Tenter de gagner l'un de nos nombreux lots <br></br>
          Des infuseurs ou coffrets spéciaux !</h2>
        <button type="button" onClick={() => goResult()} className={"homebutton animate__animated animate__pulse animate__infinite	infinite"}
          style={{marginBottom:20,marginTop:20,
            boxShadow: "0px 0px 0px 5px rgba(255,255,255,0.34)"}} >
            Participer
        </button> 
        <h3  className='floating' style={{color:"white",margin:5}}> ou </h3>
        <Link href="/lots"  passHref >
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
