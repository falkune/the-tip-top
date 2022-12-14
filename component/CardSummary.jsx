import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";


function CardSummary({ title, totalInscrit, totalDay }) {
  return (
    <Card style={styles.card}>
      <Typography style={styles.title}>{title}</Typography>
      <CardContent style={styles.box}>
        <div>
          <p style={styles.titre}>Total</p>
          <Typography style={styles.total}>{totalInscrit}</Typography>
        </div>

        <div>
          <p style={styles.titre}>Aujourd'hui</p>
          <Typography style={styles.today}>{totalDay}</Typography>
        </div>
      </CardContent>
    </Card>
  );
}

export { CardSummary };

const styles = {
  box: {
    display: 'flex',
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  card: {
    display: "flex",
    minWidth: 400,
    borderRadius:15,
    width: "62%",
    color: "#023047",
    flexDirection: "column",
    padding: "50px 20px",
    margin: "10px 5px" ,
    boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
  },
  title: {
    height: 10,
    fontWeight: "bold",
    textAlign: "center",
    color: "#003e1f",
  },
  total: {
    fontWeight: "bold",
    fontSize: "4em",
    textAlign: 'center',
    color: "#0b5d1e"
  },
  claimed: {
    fontSize: 15,
    textAlign: "center",
  },
  today: {
    fontSize: "4em",
    fontWeight: "bold",
    textAlign: 'center',
    color: "#b16f6f"
  },
  percentage: {
    fontSize: "1.4em",
    textAlign: "center",
    color: "#fb8500"
  },
  titre: {
    fontSize: "1.4em",
  }
}
