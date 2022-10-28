import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import arrow from "../image/topArrow.png";
import { users } from "../component/Data";
import { DataGrid } from "@mui/x-data-grid";
// or
import { IconButton } from "@mui/material";
import axios from "axios";

export default function Users({ idSession }) {
  const [userz, setUserz] = useState([]);
  const [colDefs, setColDefs] = useState([
<<<<<<< HEAD
      { field: "fullName", headerName: "Nom", width: 250 },
=======
    { field: "fullName", headerName: "Nom", width: 250 },
>>>>>>> a584e821a7aee8a69ef870781d3a7bb3e50d105c
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

<<<<<<< HEAD

  const number = users.length;
  const columns = [
  
  ];
=======
  const number = users.length;
  const columns = [];
>>>>>>> a584e821a7aee8a69ef870781d3a7bb3e50d105c

  useEffect(() => {
    getAllUser();
  }, [idSession]);

  const getAllUser = async () => {
    //fonction pour récupérer tout les utilisateurs
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const body = {
      idSession: idSession,
    };

    const api =
      "https://api.dev.dsp-archiwebo21-ct-df-an-cd.fr/user/users-by-session";
    console.log("token", token);
    try {
<<<<<<< HEAD
      let allusers = await axios.get(api, body, config);
=======
      let allusers = await axios.post(api, body, config);
>>>>>>> a584e821a7aee8a69ef870781d3a7bb3e50d105c
      console.log("alluser", allusers);
      console.log("allusers", allusers.data);
      setUserz(allusers.data);
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
        <strong style={{ color: "#41D8C2" }}>{number} </strong>
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
<<<<<<< HEAD
            columns={columns}
=======
            columns={colDefs}
>>>>>>> a584e821a7aee8a69ef870781d3a7bb3e50d105c
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
    width: 700,
    height: 1000,
    padding: 15,
  },

  export: {
    margin: 10,
    marginBottom: 15,
    padding: 8,
    backgroundColor: "white",
    border: "solid 1px #41D8C2",
    fontSize: 16,
    minHeight: 45,
    textAlign: "center",
    minWidth: 200,
    color: "#41D8C2",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
};
