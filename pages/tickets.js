/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from "react";
import ApiContext from '../context/apiContext';
import Cookies from "js-cookie";
import Head from "next/head";
import Header from "../component/Header";
import Footer from "../component/Footer";
import ButtonGrid from "../component/ButtonGrid";
import DeliveredInfos from "../component/DeliveredInfos"
import ClipLoader from "react-spinners/ClipLoader";
import { DataGrid } from "@mui/x-data-grid";
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
  const [alltickets, setAlltickets] = useState([]);
  const [width, setWidth] = useState(0);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [colDefs] = useState([
    { field: "ticketNumber",
     headerName: "Numéro de ticket",
     headerClassName: 'super-app-theme--header',
     width: 150 }, 
     {
      field: "updatedAt",
      headerName: "Date de participation",
      headerClassName: 'super-app-theme--header',

      width: 250,
      editable: false,
    },
    {
      field: "Print",
      headerName: "Lot",
      headerClassName: 'super-app-theme--header',
      width: 250 ,
      renderCell: (cellValues) => {
        return (
          <ButtonGrid value={cellValues}/>
        );
      },
    },
    {
      field: "Delivred",
      headerClassName: 'super-app-theme--header',
      width: 250 ,
      renderCell: (cellValues) => {
        return (
         <DeliveredInfos value={cellValues}/>
        );
      }
    },
   
  ]);


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
    setLoading(true)
    try {
      context.backend.auth.tickets.post('tickets-by-client',
      {idClient:Cookies.get("idClient")}).then((value) =>
      { if(value === undefined){
        value = []
        setAlltickets(value)
        setLoading(false)  
      } else {
         value?.forEach(el => {
          el.updatedAt = dayjs(el.updatedAt).format(" D MMMM YYYY ")
        }); 
        setAlltickets(value)
        setLoading(false)
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
          <title>Historique de mes gains</title>
          <meta name="description" content="page historique des gains" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header menu="tickets"/>
        <div style={stylez.gain}>
        <h1 className="h1" style={{color:"white"}}>Mes tickets</h1>
          <Breadcrumbs useDefaultStyle={false}
          containerClassName="breakLight" 
          rootLabel="Accueil" />

        <p style={{ fontSize: 18, color: "white" }}>
          Vous avez{" "}
          <strong style={{ color: " yellow" }}>{number} </strong>
          {`tickets gagnants`}
        </p>
          <div
          className="animate__animated animate__fadeInUp"
            style={{
              height: "800px",
              background:'white',
              display:"flex",
              justifyContent:"center",
              padding:10,
              borderRadius:15,
              alignItems:"center",
              width: width < 650 ? "90%" : 800,
            }}
          >
          { !loading ? <DataGrid
          getRowId={(row) => row._id}
          rows={alltickets}
          columns={colDefs}
          pageSize={15}
          sx={{
            textAlign:"center",
            width: '100%',
            '& .super-app-theme--header': {
              backgroundColor: '#ddeddd',
              color:"#38870d",
            },  border: 0,
            '& .MuiDataGrid-cell:hover': {
              color: 'green',
            },
            '& .css-1knaqv7-MuiButtonBase-root-MuiButton-root':{
              color:"#38870D"
            }
          }}
          rowsPerPageOptions={[2]}
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}/>
          : <ClipLoader color={" #38870D"} loading={true} size={100} />

          }
       
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
    background:" linear-gradient(83deg, rgba(56,135,13,1) 0%, rgba(56,135,13,1) 50%, rgba(144,203,6,1) 100%, rgba(211,255,0,1) 100%)",
    flexDirection: "column",
    paddingTop:100,
    paddingBottom:50,
    alignItems: "center",
    width: "100vw",
    minHeight: "100vh",
  },
};