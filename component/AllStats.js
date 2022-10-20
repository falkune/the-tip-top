import React from "react";
import StatsLots from "./StatsLots";
import StatInscription from "./StatInscription";
import LoStats from "./LotStats";

const AllStats = ({ lots, session }) => {
  return (
    <div style={styles.stat}>
      <StatInscription
        data={[
          14, 9, 7, 13, 11, 6, 18, 11, 3, 12, 18, 58, 25, 58, 47, 12, 15, 18,
          16, 25, 36, 41, 62,
        ]}
        session={session}
      />
      <StatsLots llots={lots} />
      <LoStats data={[25, 9, 7, 13]} />
    </div>
  );
};

export default AllStats;

const styles = {
  stat: {
    backgroundColor: "#F1F1F1",
    padding: 25,
  },
};
