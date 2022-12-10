import { Card, CardContent, Typography } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPercent } from '@fortawesome/free-solid-svg-icons';



function CardSummary({ title, totalTicket, asignTicket, claimbedTicket, percentage }) {
  return (
    <Card style={styles.card}>
      <Typography style={styles.title}>{title}</Typography>
      <CardContent style={styles.box}>
        <div>
          <p style={styles.titre}>Generate ticket</p>
          <Typography> <span style={styles.generate}>{asignTicket}</span> / {totalTicket}</Typography>
          <Typography style={styles.percentage}>{(asignTicket * 100 / totalTicket).toFixed(2)} <FontAwesomeIcon icon={faPercent} /></Typography>
        </div>

        <div>
          <p style={styles.titre}>Claimed ticket</p>
          <Typography> <span style={styles.generate}>{claimbedTicket}</span> / {asignTicket}</Typography>
          <Typography style={styles.percentage}>{percentage} <FontAwesomeIcon icon={faPercent} /></Typography>
        </div>
      </CardContent>
    </Card>
  );
  // return (
  //   <Card style={styles.card}>
  //     <Typography style={styles.title}>{title}</Typography>
  //     <CardContent style={styles.box}>
  //       <div style={styles.bloc}>
  //         <p style={styles.titre}>Generate ticket</p>
  //         <Typography> <span style={styles.generate}>{476}</span> / {totalTicket}</Typography>
  //         <Typography style={styles.percentage}>{(476 * 100 / totalTicket).toFixed(2)} <FontAwesomeIcon icon={faPercent} /></Typography>
  //       </div>

  //       <div style={styles.bloc}>
  //         <p style={styles.titre}>Claimed ticket</p>
  //         <Typography> <span style={styles.generate}>{claimbedTicket}</span> / {476}</Typography>
  //         <Typography style={styles.percentage}>{(claimbedTicket * 100 / 476).toFixed(2)} <FontAwesomeIcon icon={faPercent} /></Typography>
  //       </div>
  //     </CardContent>
  //   </Card>
  // );
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
    // height: 270,
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
