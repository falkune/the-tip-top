import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import arrow from "../image/topArrow.png";
import { users } from "../component/Data";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

export default function Users() {
  const [userz, setUserz] = useState("");

  const number = users.length;
  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "name", headerName: "Nom", width: 100, editable: true },
    {
      field: "email",
      headerName: "Email",
      type: "number",
      width: 200,
      editable: true,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 100,
      editable: true,
    },
    {
      field: "create",
      headerName: "crée le",
      type: "number",
      width: 110,
      editable: true,
    },
    ,
  ];

  useEffect(() => {
    getAllUser();
  }, []);

  const getAllUser = async () => {
    //fonction pour créer un ticket
    console.log("take session");
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    //  const api = `https://api.dev.dsp-archiwebo21-ct-df-an-cd.fr/user/${session}`;
    const api = `https://api.dev.dsp-archiwebo21-ct-df-an-cd.fr/user/`;
    console.log("tokens", token);
    await axios
      .get(api, config)
      .then((res) => {
        console.log(res.data);
        setSession(res.data);
      })
      .catch(console.log);
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
        {users.length > 0 ? (
          <DataGrid
            rows={users}
            columns={columns}
            pageSize={15}
            rowsPerPageOptions={[2]}
            checkboxSelection
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
          />
        ) : (
          <p> pas de users</p>
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
