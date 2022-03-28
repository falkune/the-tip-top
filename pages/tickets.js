<<<<<<< HEAD
import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Ticket from "../component/Ticket";
import { billets } from "../component/Data";
import ButtonGrid from "../component/ButtonGrid";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles//ag-grid.css";
import "ag-grid-community/styles//ag-theme-alpine.css";
import axios from "axios";

export default function Tickets() {
  const [colDefs, setColDefs] = useState([
    {
      field: "number",
      minWidth: 150,
    },
    {
      field: "jeux concours",
      minWidth: 150,
    },
    {
      field: "go",
      minWidth: 200,
      cellRenderer: ButtonGrid,
    },
  ]);

  useEffect(() => {
    getAllSessions();
  }, []);

  const getAllSessions = async () => {
    //fonction pour créer un ticket
    const token = localStorage.getItem("token");
    console.log("tokens", token);

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const api = "https://api.dev.dsp-archiwebo21-ct-df-an-cd.fr/session";
    console.log("config", config);

    try {
      let Allsessions = await axios.get(api, config);
      setSessions(Allsessions.data);
      console.log(sessions);
      setIdSession(Allsessions.data[0]._id);
      console.log("idsession", idSession);
    } catch (e) {
      console.log(e);
    }
  };
  const number = billets.length;
  console.log(billets);
=======
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../component/Header'
import Footer from "../component/Footer"
import Ticket from "../component/Ticket"

export default function Tickets() {
<<<<<<< HEAD
>>>>>>> 82befde (first page)
=======

  const number = 4  

>>>>>>> ddce213 (add ticket page)
  return (
    <div className={styles.container}>
      <Head>
        <title>TeaBingo - Jeux concours</title>
        <meta name="description" content="Generated by create next app" />
<<<<<<< HEAD
        <link rel="icon" href="/fav.png" />
      </Head>
      <Header />
      <h1 className={styles.h1}>Mes tickets</h1>
      <p style={{ fontSize: 18, color: "grey" }}>
        Vous avez <strong style={{ color: "#41D8C2" }}>{number} </strong>
        {`tickets gagnants`}
      </p>
      <div style={stylez.gain}>
        <div
          className="ag-theme-alpine"
          style={{ height: "400px", width: "800px" }}
        >
          <AgGridReact
            pagination={true}
            rowData={billets}
            columnDefs={colDefs}
          ></AgGridReact>
        </div>
        {/* {billets.length > 0 ? (
          <DataGrid
            rows={billets}
            getRowId={(row) => row.email}
            columns={columns}
            pageSize={15}
            style={{ width: "100%" }}
            rowsPerPageOptions={[15]}
            checkboxSelection
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
          />
        ) : (
          <p> pas de tickets</p>
        )} */}
      </div>
      <Footer />
    </div>
  );
}

const stylez = {
  gain: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100vw",
    minHeight: "100vh",
  },
};
=======
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <h1 className={styles.h1}>Mes tickets</h1>
      <p>{`Vous avez ${number} tickets gagnants`}</p>
        <div style={stylez.gain}>
              <Ticket />
              <Ticket />
        </div>
      <Footer/>
    </div>
  )
}
<<<<<<< HEAD
>>>>>>> 82befde (first page)
=======

 const stylez = {

  gain : {

    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    width:"90%",
    maxWidth:360,
    minHeight:"100vh"




  }







}
>>>>>>> ddce213 (add ticket page)
