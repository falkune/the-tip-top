import React, { useEffect, useState ,useContext} from "react";
import ApiContext from '../context/apiContext';
import Image from "next/image";
import arrow from "../image/topArrow.png";
import { DataGrid,GridToolbar } from "@mui/x-data-grid";
import {users} from "../component/Data";
import { refreshToken ,notifier } from "../fonctions/utils";
import {getuserBySession} from "../fonctions/users"
import CsvDownloader from 'react-csv-downloader';
import dayjs from "dayjs";
import "dayjs/locale/fr" 
dayjs.locale('fr')

export default function Users({ idSession }) {
  const context = useContext(ApiContext)
  const [userz, setUserz] = useState([]);
  const [colDefs, setColDefs] = useState([
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

  const number = userz.length;

  useEffect(() => {
    getAllUser();
  }, [idSession]);

  const getAllUser = async () => {
    //fonction pour récupérer tout les utilisateurs
    let allUsers = await getuserBySession(context,idSession)
      if (allUsers.statusCode) {
        refreshToken(allUsers, context);
        if (Array.isArray(allUsers.message)) {
          allUsers.message.forEach(element => {
            notifier(element, "error", "top-right", 5000);
          });
        } else {
          console.error(allUsers);
          console.log(allUsers,"yes");
          notifier(allUsers.message);
          setUserz(allUsers)
        }
      }
    // try {
    //     context.backend.auth.users.post('users-by-session',{idSession:idSession}).then((value) =>
    //   { setUserz(value)
    //     value.forEach(el => {
    //     el.birthday = dayjs(el.updatedAt).format(" DD/MM/YYYY ")
    //     el.userLocation = el.userLocation.city
    //   }); 
    // })
    // } catch (e) {

       
    // }
  };

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
      <p style={{ fontSize: 18, color: "grey" }}>
        <strong style={{ color: " #38870D" }}>{number} </strong>
        {`Utilisateur`}
      </p>

          <CsvDownloader
           filename="myemail"
           extension=".csv"
           separator=";"
            datas={userz}>
                  <button style={stylez.export}>
                  Exporter 
                  <span style={{ margin: 5, position: "absolute", right: 15, top: 9 }}>
                    <Image src={arrow} width={18} height={18} alt="arrow" />
                  </span>
                </button>
          </CsvDownloader>
    
      <div style={stylez.gain}>
        {users.length > 0 ? (
          <DataGrid
            getRowId={(row) => row._id}
            rows={users}
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
          />
        ) : (
          <p> Pas de clients :'c </p>
        )}
      </div>
    </div>
  );
}

const stylez = {
  gain: {
    width: "90%",
    height: "100vh",
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
