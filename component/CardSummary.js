import { Card, CardContent, Typography } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPercent } from '@fortawesome/free-solid-svg-icons';



function CardSummary({ title, totalTicket, claimbedTicket, notClaimbedTicket, percentage }) {
  return (
    <Card style={styles.card}>
      <Typography style={styles.title}>{title}</Typography>
      <CardContent style={styles.box}>
        <div>
          <p style={styles.titre}>Generate ticket</p>
          <Typography> <span style={styles.generate}>{476}</span> / {totalTicket}</Typography>
          <Typography style={styles.percentage}>{(476 * 100 / totalTicket).toFixed(2)} <FontAwesomeIcon icon={faPercent} /></Typography>
        </div>

        <div>
          <p style={styles.titre}>Claimed ticket</p>
          <Typography> <span style={styles.generate}>{claimbedTicket}</span> / {476}</Typography>
          <Typography style={styles.percentage}>{(claimbedTicket * 100 / 476).toFixed(2)} <FontAwesomeIcon icon={faPercent} /></Typography>
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
  },
  card: {
    display: "flex",
    minWidth: 400,
    width: "46%",
    color: "#023047",
    flexDirection: "column",
    padding: "70px 20px",
    margin: "10px 0" ,
    // height: 300
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "#003e1f",
  },
  total: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: 'center'
  },
  claimed: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  generate: {
    fontSize: "4em",
    fontWeight: "bold",
    textAlign: 'center',
    color: "#38870D"
  },
  percentage: {
    fontSize: "1.4em",
    fontWeight: "bold",
    textAlign: "center",
    color: "#fb8500"
  },
  titre: {
    fontSize: "1em",
    fontWeight: "bold",
  }
}
