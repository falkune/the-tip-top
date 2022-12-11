import { Card, CardContent, Typography } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPercent } from '@fortawesome/free-solid-svg-icons';

function OneLot({ title, totalTicket, limitTicket, claimbedTicket, claimbedTicketPercentage, numberOfTicketsPercentage}) {
  return (
    <Card style={styles.card}>
      <Typography style={styles.title}>{title}</Typography>
      <CardContent style={styles.box}>
        <div>
          <p style={styles.titre}>Generate</p>
          <Typography> <span style={styles.generate}>{totalTicket}</span> / {limitTicket}</Typography>
          {/* <Typography style={styles.percentage}>{numberOfTicketsPercentage} <FontAwesomeIcon icon={faPercent}/></Typography> */}
        </div>

        <div>
          <p style={styles.titre}>Claimed</p>
          <Typography> <span style={styles.generate}>{claimbedTicket}</span> / {totalTicket}</Typography>
          {/* <Typography style={styles.percentage}>{claimbedTicketPercentage} <FontAwesomeIcon icon={faPercent} /></Typography> */}
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
    fontSize: '1.2em',
    fontWeight: "bold",
    textAlign: "center",
    color: "#003e1f",
  },
  generate: {
    fontSize: "2.5em",
    fontWeight: "bold",
    textAlign: 'center',
    color: "#38870D"
  },
  percentage: {
    fontSize: "1.3em",
    fontWeight: "bold",
    color: "#fb8500"
  },
  titre: {
    fontSize: "1em",
    fontWeight: "bold",
    color: "#003e1f"
  }
}
