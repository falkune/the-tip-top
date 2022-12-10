import { Card, CardContent, Typography } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPercent } from '@fortawesome/free-solid-svg-icons';


function CardSummary({ title, totalTicket, asignTicket, claimbedTicket, percentage, percentageGenerate }) {
  return (
    <Card style={styles.card}>
      <Typography style={styles.title}>{title}</Typography>
      <CardContent style={styles.box}>
        <div>
          <p style={styles.titre}>Generate ticket</p>
          <Typography> <span style={styles.generate}>{asignTicket}</span> / {totalTicket}</Typography>
          {/* <Typography style={styles.percentage}>{percentage} <FontAwesomeIcon icon={faPercent} /></Typography> */}
        </div>

        <div>
          <p style={styles.titre}>Claimed ticket</p>
          <Typography> <span style={styles.generate}>{claimbedTicket}</span> / {asignTicket}</Typography>
          {/* <Typography style={styles.percentage}>{percentageGenerate} <FontAwesomeIcon icon={faPercent} /></Typography> */}
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
    width: "100%",
    color: "#023047",
    flexDirection: "column",
    padding: "40px 20px",
    margin: "10px 0" ,
  },
  title: {
    fontSize: 25,
    textAlign: "center",
    color: "#003e1f",
  },
  total: {
    fontSize: 15,
    textAlign: 'center'
  },
  claimed: {
    fontSize: 30,
    textAlign: "center",
  },
  generate: {
    fontSize: "4em",
    textAlign: 'center',
    color: "#38870D"
  },
  percentage: {
    fontSize: "1.4em",
    textAlign: "center",
    color: "#fb8500"
  },
  titre: {
    fontSize: "1em",
  }
}
