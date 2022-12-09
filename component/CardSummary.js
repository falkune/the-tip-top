import { Card, CardContent, Typography } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark, faPercent, faMaximize } from '@fortawesome/free-solid-svg-icons';



function CardSummary({ title, totalTicket, claimbedTicket, notClaimbedTicket,percentage }) {
  // return (
  //   <Card style={styles.card}>
  //     <Typography style={styles.title}>{title}</Typography>
  //     <CardContent style={styles.box}>
  //       <Typography style={styles.total}><FontAwesomeIcon icon={faMaximize} color="green"/> {totalTicket}</Typography>
  //       <Typography style={styles.claimed}><FontAwesomeIcon icon={faCheck} color="green"/>  {claimbedTicket}</Typography>
  //       <Typography style={styles.notclaimbed}> <FontAwesomeIcon icon={faXmark} color="red"/>  {notClaimbedTicket}</Typography>
  //       <Typography style={styles.percentage}><FontAwesomeIcon icon={faPercent} color="orange"/>  {percentage.toFixed(2)} </Typography>
  //     </CardContent>
  //   </Card>
  // );

  return (
    <Card style={styles.card}>
      <Typography style={styles.title}>{title}</Typography>
      <CardContent style={styles.box}>
        <div>
          <>
            <h4>Total ticket</h4>
            <Typography style={styles.total}>{totalTicket}</Typography>
          </>
          <>
            <h4>Claimed</h4>
            <Typography style={styles.claimed}>{claimbedTicket}</Typography>
          </>
        </div>
        <div>
          <>
            <h4>Generate ticket</h4>
            <Typography style={styles.notclaimbed}>{123}</Typography>
            <Typography style={styles.notCperc}>{123 * 100 / totalTicket} %</Typography>
          </>
          <>
            <h4>Not Claimed</h4>
            <Typography style={styles.percentage}> {notClaimbedTicket} </Typography>
          </>
        </div>
      </CardContent>
    </Card>
  );
}

export { CardSummary };

const styles = {
  box:{
    display : 'flex',
    justifyContent: "space-between",
  },
  card:{
    display: "flex",
    width: 350,
    height: 350,
    color : "#023047",
    flexDirection: "column",
    margin: 2
  },
  title:{
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "#003e1f",
  },
  total:{
    fontSize: 30,
    fontWeight: "bold",
    textAlign: 'center'
  },
  claimed:{
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  notclaimbed:{ 
    fontSize: 30,
    fontWeight: "bold",
    textAlign: 'center'
  },
  percentage:{
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  notCperc:{
    ontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  }
}

// const styles = {
//   box:{
//     display : 'flex',
//     justifyContent: "space-between",
//   },
//   card:{
//     display: "flex",
//     width: 300,
//     height: 100,
//     color : "#023047",
//     flexDirection: "column",
//     margin: 2
//   },
//   title:{
//     fontSize: 25,
//     fontWeight: "bold",
//     textAlign: "center",
//     color: "#003e1f",
//   },
//   total:{
//     fontSize: 15,
//     fontWeight: "bold",
//   },
//   claimed:{
//     fontSize: 15,
//     fontWeight: "bold",
//   },
//   notclaimbed:{ 
//     fontSize: 15,
//     fontWeight: "bold",
//   },
//   percentage:{
//     fontSize: 15,
//     fontWeight: "bold",
//   }
// }