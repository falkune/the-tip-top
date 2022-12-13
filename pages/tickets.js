/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from "react";
import ApiContext from '../context/apiContext';
import Cookies from "js-cookie";
import Head from "next/head";
;
import Header from "../component/Header";
import Footer from "../component/Footer";
import ButtonGrid from "../component/ButtonGrid";
import DeliveredInfos from "../component/DeliveredInfos"
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles//ag-grid.css";
import "ag-grid-community/styles//ag-theme-alpine.css";
import "animate.css";
import { notifier } from "../fonctions/utils";
import { useRouter } from "next/router";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import dayjs from "dayjs";
import "dayjs/locale/fr" 
dayjs.locale('fr')
import Breadcrumbs from 'nextjs-breadcrumbs';


export default function Tickets() {
  const context = useContext(ApiContext)
  const [lot,setLot] = useState("")
  const [alltickets, setAlltickets] = useState([]);
  const [width, setWidth] = useState(0);
  const router = useRouter();
  const [colDefs, setColDefs] = useState([
    {
      field: "ticketNumber",
      minWidth: 150,
    },
    {
      field: "updatedAt",
      minWidth: 150,
    },
    {
      field: "Lots délivré",
      cellRenderer: DeliveredInfos,
      minWidth: 150,
    },
     {
      field: "go",
      minWidth: 200,
      cellRenderer: ButtonGrid,
    },
 
  ]);




  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const updateDimensions = () => {
    setWidth(window.innerWidth);
    localStorage.setItem("width", width);
  };
  useEffect(() => {
    if(Cookies.get('role') == undefined || Cookies.get('role') != 'client') {
      notifier("vous n'avez pas acces a cette page !")
      router.push("/connexion");
    }
    getAllTickets();
  }, []);


  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [width]);

  

  const getAllTickets = async () => {
    //fonction pour créer un ticket
    console.log('hot tickets')
    try {
      context.backend.auth.tickets.post('tickets-by-client',
      {idClient:Cookies.get("idClient")}).then((value) =>
      { if(value === undefined){
        value?.forEach(el => {
          el.updatedAt = dayjs(el.updatedAt).format(" D MMMM YYYY ")
        }); 
        setAlltickets(value)
      } else {
         value = []
         setAlltickets(value)
      }   
    }
     )
    } catch (e) {
       
    }
  };


  const number = alltickets.length;
  if(Cookies.get('role') && Cookies.get('role') == 'client'){
    return (
      <div className="container">
        <Head>
          <title>TeaBingo - Jeux concours</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header menu="tickets"/>
        <div style={stylez.gain}>
        <h1 className="h1">Mes tickets</h1>
        <Breadcrumbs useDefaultStyle={true}  style={{color:"white"}} rootLabel="Home" />

        <p style={{ fontSize: 18, color: "grey" }}>
          Vous avez{" "}
          <strong style={{ color: " #38870D" }}>{number} </strong>
          {`tickets gagnants`}
        </p>
          <div
            className="ag-theme-alpine"
            style={{
              height: "800px",
              width: width < 650 ? "90%" : 800,
            }}
          >
            <AgGridReact
              pagination={true}
              rowData={alltickets}
              columnDefs={colDefs}
            ></AgGridReact>
          </div>
        </div>
        <Footer />
      </div>
    );
  }else{
    return(
      <Box sx={{ width: '100%' }}>
        <LinearProgress />
      </Box>
    )
  }
}

const stylez = {
  gain: {
    display: "flex",
    flexDirection: "column",
    paddingTop:100,
    paddingBottom:50,
    alignItems: "center",
    width: "100vw",
    minHeight: "100vh",
  },
};