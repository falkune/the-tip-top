import React, { useEffect, useRef, useState ,useContext} from "react";
import ApiContext from '../context/apiContext';
import Image from "next/image";
import styles from "../styles/Home.module.css";
import arrow from "../image/topArrow.png";
import { users } from "../component/Data";
import { DataGrid } from "@mui/x-data-grid";
// or
import { IconButton } from "@mui/material";
import axios from "axios";

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
  ]);

  const number = users.length;
  const columns = [];

  useEffect(() => {
    getAllUser();
  }, [idSession]);

  const getAllUser = async () => {
    //fonction pour récupérer tout les utilisateurs
    try {
        context.backend.auth.tickets.post('users-by-session',{idSession:idSession}).then((value) =>
      {console.log(value,"value");  
    } 
     )
    } catch (e) {
      console.log(e);
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
      <button style={stylez.export}>
        Exporter mail
        <span style={{ margin: 5, position: "absolute", right: 8, top: 4 }}>
          <Image src={arrow} width={13} height={20.8} alt="arrow" />
        </span>
      </button>
      <div style={stylez.gain}>
        {userz.length > 0 ? (
          <DataGrid
            getRowId={(row) => row._id}
            rows={userz}
            columns={columns}
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
    backgroundColor: "white",
    border: "solid 1px  #38870D",
    fontSize: 16,
    minHeight: 45,
    textAlign: "center",
    minWidth: 200,
    color: " #38870D",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
};
