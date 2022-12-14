import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Count from "../component/Countdown";
import ClipLoader from "react-spinners/ClockLoader";
import axios from "axios";
import dayjs from "dayjs";
import "dayjs/locale/fr";
import wheel from "../image/wheel.gif";
import Cookies from 'js-cookie';
import { isSessionFinished } from "../fonctions/utils";
import Breadcrumbs from 'nextjs-breadcrumbs';
import ResultGame from "../component/ResultGame";


export default function Jeux() {
  const [current, setCurrent] = useState("");
  const [isFinished, setIsFinished] = useState(isSessionFinished())


  useEffect(() => {
    getCurrent();
  }, []);

  const getCurrent = async () => {
    const api =
      "https://api.dev.dsp-archiwebo21-ct-df-an-cd.fr/Session/get-current-session";
    try {
      let currenSession = await axios.get(api);
      setCurrent(currenSession?.data);
      Cookies.set("current", currenSession?.data);

    } catch (e) {

    }
  };

  return (
    <div className="container">
      <Head>
        <title>Grand jeux tirage au sort </title>
        <meta name="thé tiptop" content="titop thé" />
        <meta name="google-site-verification" content="iDBitZ99_g4ELVANaUEpnh57Tum7BZhycjYf21Zxy-M" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header menu="jeux" />
      <section
        className="block"
        style={{ borderBottom: "solid 1px white" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            padding: 25,
            background: "linear-gradient(48deg, rgba(56,135,13,1) 0%, rgba(56,135,13,1) 28%, rgba(144,203,6,1) 100%, rgba(211,255,0,1) 100%)",

          }} >
          {
            isFinished ?
              <>
                <h1 style={{ color: "white", fontSize: 35 }}>Résultat du grand tirage au sort !</h1>
                <Breadcrumbs useDefaultStyle={false}
                  containerClassName="breakLight"
                  rootLabel="Accueil" />
              </> : <>
                <ClipLoader color={"white"} loading={true} size={100} />

                <h1 className="h1" style={{ color: "white" }}>
                  Grand jeux concour
                </h1>
                <Breadcrumbs useDefaultStyle={false}
                  containerClassName="breakLight"
                  rootLabel="Accueil" />

                <p style={{ fontSize: 20, color: "white" }}>
                  Le tirage au sort dans :
                </p>
                {current && <Count current={current} />}</>
          }

        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {isFinished ?


            <ResultGame /> :
            <>
              <div>
                <Image src={wheel} style={{ marginBottom: 50 }} alt="" />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  width: "100%",
                  maxWidth: 500,
                }}
              >
                <h2
                  className="h2"
                  style={{
                    fontSize: 30,
                    padding: 15,
                    paddingBottom: 0,
                    marginTop: 0,
                    marginBottom: 0,
                  }}
                >
                  Vous avez été sélectionné pour le grand tirage au sort
                </h2>
                <p style={{ fontSize: 22, color: "grey", padding: 20, margin: 0 }}>
                  Le{" "}
                  <strong style={{ color: " #38870D" }}>
                    {dayjs(current.endDate).locale("fr").format(" D MMMM YYYY")}
                  </strong>{" "}
                  un candidat sera sélectionné et bénéficiera de :{" "}
                </p>
                <p
                  className={"pulse"}
                  style={{ fontSize: 20, color: " #38870D", fontWeight: "bold" }}
                >
                  1 an de thé d'une valeur de 360 euros
                </p>
              </div>
            </>

          }

        </div>
      </section>

      <Footer />

    </div>
  );
}
