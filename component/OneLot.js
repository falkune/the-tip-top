import { Card, CardContent, Typography } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPercent } from '@fortawesome/free-solid-svg-icons';

function OneLot({ title, totalTicket, limitTicket, claimbedTicket, claimbedTicketPercentage}) {
  return (
    <Card style={styles.card}>
      <Typography style={styles.title}>{title}</Typography>
      <CardContent style={styles.box}>
        <div>
          <p style={styles.titre}>Generate</p>
          <Typography> <span style={styles.generate}>{totalTicket}</span> / {limitTicket}</Typography>
          <Typography style={styles.percentage}>{(totalTicket * 100 / limitTicket).toFixed(2)} <FontAwesomeIcon icon={faPercent}/></Typography>
        </div>

        <div>
          <p style={styles.titre}>Claimed</p>
          <Typography> <span style={styles.generate}>{claimbedTicket}</span> / {totalTicket}</Typography>
          <Typography style={styles.percentage}>{claimbedTicketPercentage} <FontAwesomeIcon icon={faPercent} /></Typography>
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
    width: 300,
    height: 250,
    flexDirection: "column",
    padding: "35px 25px",
    marginTop: 20
  },
  title: {
    fontSize: '1.2em',
    fontWeight: "bold",
    textAlign: "center",
    color: "#003e1f",
  },
  generate: {
    fontSize: "2em",
    fontWeight: "bold",
    textAlign: 'center',
    color: "#38870D"
  },
  percentage: {
    fontSize: "1em",
    fontWeight: "bold",
    textAlign: "center",
    color: "#fb8500"
  },
  titre: {
    fontSize: "1em",
    fontWeight: "bold",
    color: "#003e1f"
  }
}
