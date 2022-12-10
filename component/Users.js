import React, { useEffect, useState ,useContext} from "react";
import ApiContext from '../context/apiContext';
import Image from "next/image";
import styles from "../styles/Home.module.css";
import arrow from "../image/topArrow.png";
import { DataGrid } from "@mui/x-data-grid";
import CsvDownloader from 'react-csv-downloader';
import dayjs from "dayjs";
import "dayjs/locale/fr" 
dayjs.locale('fr')

export default function Users({ idSession }) {
  const context = useContext(ApiContext)
  const [userz, setUserz] = useState([]);
  const [colDefs, setColDefs] = useState([
    { field: "fullName", headerName: "Nom", width: 250 },
    {
      field: "email",
      headerName: "Email",
      width: 300,
      editable: false,
    },
    {
      field: "birthday",
      headerName: "birthday",
      width: 250,
      editable: false,
    },
    {
      field: "userLocation",
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
    try {
        context.backend.auth.users.post('users-by-session',{idSession:idSession}).then((value) =>
      {   
      setUserz(value)
      console.log(value)
      value.forEach(el => {
        el.birthday = dayjs(el.updatedAt).format(" DD/MM/YYYY ")
        el.userLocation = el.userLocation.city
      }); 
      console.log(value)
    } 
     )
    } catch (e) {
       
    }
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        alignItems: "center",
      }}
    >
      <h1 className={styles.h1}>Utilisateurs</h1>
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
        {userz.length > 0 ? (
          <DataGrid
            getRowId={(row) => row._id}
            rows={userz}
            columns={colDefs}
            pageSize={15}
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
