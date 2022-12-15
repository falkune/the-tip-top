import React, { useEffect, useState ,useContext} from "react";
import ApiContext from '../context/apiContext';
import Modal from "@mui/material/Modal";
import Image from "next/image";
import arrow from "../image/topArrow.png";
import ClipLoader from "react-spinners/ClipLoader";
import { DataGrid,GridToolbar } from "@mui/x-data-grid";
import { refreshToken ,notifier } from "../fonctions/utils";
import DeliveredInfos from "../component/DeliveredInfos"
import {getuserBySession} from "../fonctions/users"
import {getHistoryClient} from '../fonctions/tickets'
import CsvDownloader from 'react-csv-downloader';
import dayjs from "dayjs";
import "dayjs/locale/fr" 
dayjs.locale('fr')

export default function Users({ idSession }) {
  const context = useContext(ApiContext)
  const [loading, setLoading] = useState(false);
  const [load, setload] = useState(false)
  const [allUsers, setAllusers] = useState([]);
  const [open, setOpen] = useState(false)
  const [history,setHistory] = useState([])
  const [colDefs] = useState([
    {
      field: "Print",
      headerClassName: 'super-app-theme--header',
      width: 250 ,
      renderCell: (cellValues) => {
        return (
          <button
            style={{
              border:"none",
              color:"white",
              background:"#38870D",
              margin:5,
              borderRadius:5,
              padding:"10px 15px"
            }}
            onClick={() =>getClientHistory(cellValues)}>
           Voir l'historique
          </button>
        );
      }
    },
    { field: "fullName",
     headerName: "Nom",
     headerClassName: 'super-app-theme--header',
     width: 250 },
    {
      field: "email",
      headerName: "Email",
      headerClassName: 'super-app-theme--header',

      width: 300,
      editable: false,
    },
    {
      field: "birthday",
      headerName: "birthday",
      headerClassName: 'super-app-theme--header',

      width: 250,
      editable: false,
    },
    {
      field: "userLocation",
      headerClassName: 'super-app-theme--header',
      headerName: "location",
      width: 250,
      editable: false,
    },
   
  ]);
  const [columnsDefs] = useState([
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


  useEffect(() => {
    getAllUser();
  }, [idSession]);

  const getAllUser = async () => {
    //fonction pour récupérer tout les utilisateurs
    setLoading(true)
    let allUsers = await getuserBySession(context,idSession)
      if (allUsers.statusCode) {
        refreshToken(allUsers, context);
        console.error(allUsers);
        if (Array.isArray(allUsers.message)) {
          allUsers.message.forEach(element => {
            notifier(element, "error", "top-right", 5000);
          });
          setLoading(false)
        }   
      }else { 
        setLoading(false)
        allUsers?.forEach(el => {
          el.allUsers = dayjs(el.birthday).format(" D MMMM YYYY ")
          el.userLocation = el.userLocation?.city }); 
        setAllusers(allUsers)
      }
  };


  const getClientHistory =  async (e) =>{
        setload(true)
        setOpen(true)
        let histories = await getHistoryClient(context,e.id)
        if (histories.statusCode) {
          refreshToken(histories, context);
          console.error(histories);
          if (Array.isArray(histories.message)) {
            histories.message.forEach(element => {
              notifier(element, "error", "top-right", 5000);
            });
            setLoading(false)
            setOpen(false)
          }   
        }else { 
          setLoading(false)
          histories?.forEach(el => {
            el.updatedAt = dayjs(el.updatedAt).format(" D MMMM YYYY ")
          })
          setHistory(histories)
          console.log(histories,"historie")
        }
  

  }

  const handleClose = () =>  {
    setOpen(false)
  }

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        borderRadius:15,
        alignItems: "center",
      }}
    >
      <h1 className="h1">Utilisateurs</h1>
    { !loading && <p style={{ fontSize: 18, color: "grey" }}>
        <strong style={{ color: " #38870D" }}>Totale: {allUsers.length} </strong>
        {`Utilisateur`}
      </p> }

          <CsvDownloader
           filename="myemail"
           extension=".csv"
           separator=";"
            datas={allUsers}>
                  <button style={stylez.export}>
                  Exporter 
                  <span style={{ margin: 5, position: "absolute", right: 15, top: 9 }}>
                    <Image src={arrow} width={18} height={18} alt="arrow" />
                  </span>
                </button>
          </CsvDownloader>
    
      <div style={stylez.gain}>
        {allUsers.length > 0 && !loading && 
          <DataGrid
            getRowId={(row) => row._id}
            rows={allUsers}
            columns={colDefs}
            components={{ Toolbar: GridToolbar }}
            pageSize={5}
            sx={{
              textAlign:"center",
              width: '100%',
              '& .super-app-theme--header': {
                backgroundColor: '#ddeddd',
                color:"#38870d",
                border:"solid 2px #ddeddd"
              },  border: 2,
              borderColor:'#ddeddd',
              '& .MuiDataGrid-cell:hover': {
                color: 'green',
              },
              '& .css-1knaqv7-MuiButtonBase-root-MuiButton-root':{
                color:"#38870D"
              }
            }}
            rowsPerPageOptions={[2]}
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
          /> }
          {!loading && allUsers <= 0  && <p>":c"</p>}
                 { loading && <ClipLoader color={" #38870D"} loading={true} size={100} />} 
      </div>
      <Modal
        open={open}
        style={{ border: "none" }}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 15,
            fontSize: 18,
            background:"red",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 360,
            height:600,
            border: "none",
            borderRadius: 8,
            backgroundColor: "white",
            boxShadow: 24,
            textAlign: "center" }} >
              <button onClick={handleClose} 
              style={{position:"absolute",
              color:"white",
              background:"green",
              padding:10,
              borderRadius:10,
              border:"none",
              top:5,
              right:5,
              zIndex:999999999999999}}>Fermer
              </button>
          {!load ? <DataGrid
            getRowId={(row) => row._id}
            rows={history}
            columns={columnsDefs}
            pageSize={15}
            sx={{
              textAlign:"center",
              width: '100%',
              '& .super-app-theme--header': {
                backgroundColor: '#ddeddd',
                color:"#38870d",
                border:"solid 2px #ddeddd"
              },  border: 2,
              borderColor:'#ddeddd',
              '& .MuiDataGrid-cell:hover': {
                color: 'green',
              },
              '& .css-1rtnrqa':{
                color:"#38870D"
              }
            }}
            rowsPerPageOptions={[2]}
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}/> :
            <ClipLoader color={" #38870D"} loading={true} size={100} />
            
            }
              

        </div>
      </Modal>
    </div>
  );
}

const stylez = {
  gain: {
    width: "90%",
    height: "100vh",
    display:"flex",
    justifyContent:"center",
    padding: 15,
  },

  export: {
    margin: 10,
    marginBottom: 15,
    padding: 8,
    backgroundColor: "#38870D",
    fontSize: 16,
    minHeight: 50,
    textAlign: "center",
    minWidth: 200,
    color: "white",
    border:"none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
};
