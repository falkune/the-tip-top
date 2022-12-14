import React, { useEffect, useState ,useContext} from "react";
import ApiContext from '../context/apiContext';
import Image from "next/image";
import arrow from "../image/topArrow.png";
import ClipLoader from "react-spinners/ClipLoader";
import { DataGrid,GridToolbar } from "@mui/x-data-grid";
import { refreshToken ,notifier } from "../fonctions/utils";
import {getuserBySession} from "../fonctions/users"
import {getHistoryClient} from '../fonctions/tickets'
import CsvDownloader from 'react-csv-downloader';
import dayjs from "dayjs";
import "dayjs/locale/fr" 
dayjs.locale('fr')

export default function Users({ idSession }) {
  const context = useContext(ApiContext)
  const [loading, setLoading] = useState(false);
  const [allUsers, setAllusers] = useState([]);
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



  useEffect(() => {
    getAllUser();
    console.log(allUsers,'userz')
  }, [idSession]);

  const getAllUser = async () => {
    //fonction pour récupérer tout les utilisateurs
    setLoading(true)
    let allUsers = await getuserBySession(context,idSession)
      if (allUsers.statusCode) {
        refreshToken(allUsers, context);
        console.error(allUsers);
        console.log("yes");
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
        console.log(e.id,"value cell")
        let histories = await getHistoryClient(context,e.id)
        if (histories.statusCode) {
          refreshToken(histories, context);
          console.error(histories);

          if (Array.isArray(histories.message)) {
            histories.message.forEach(element => {
              notifier(element, "error", "top-right", 5000);
            });
            setLoading(false)
          }   
        }else { 
          setLoading(false)
          histories?.forEach(el => {
            el.updatedAt = dayjs(el.updatedAt).format(" D MMMM YYYY ")
          })
          setHistory(histories)
        }
  

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
