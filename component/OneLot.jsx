import { Card, CardContent, Typography } from "@material-ui/core";

function OneLot({ title, totalTicket, limitTicket, claimbedTicket}) {
  return (
    <Card style={styles.card}>
      <Typography style={styles.title}>{title}</Typography>
      <CardContent style={styles.box}>
        <div>
          <p style={styles.titre}>Tickets générés</p>
          <Typography > <span style={styles.generate}>{totalTicket}</span> / {limitTicket}</Typography>
        </div>

        <div>
          <p style={styles.titre}>Tickets assignés</p>
          <Typography> <span style={styles.generate}>{claimbedTicket}</span> / {totalTicket}</Typography>
        </div>
      </CardContent>
    </Card>
  );
}

export default OneLot;

const styles = {
  box: {
    display: 'flex',
    justifyContent: "space-between",
  },
  card: {
    display: "flex",
    minWidth: 200,
    width: 320,
    flexDirection: "column",
    padding: 25,
    borderRadius:15,
    margin: 5
  },
  title: {
    height: 10,
    fontWeight: "bold",
    textAlign: "center",
    color: "#212529",
  },
  generate: {
    fontSize: "2.5em",
    fontWeight: "bold",
    textAlign: 'center',
    color: "#f15152"
  },
  percentage: {
    fontSize: "1.3em",
    fontWeight: "bold",
    color: "#fb8500"
  },
  titre: {
    fontSize: "0.7em",
    color: "#212529"
  }
}
