import { PieChart, Pie, Cell, Legend } from "recharts";

const COLORS = ["#06d6a0", "#ff7d00"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx}
      dominantBaseline="end"
    >
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  );
};

export default function OneLot({title, claimbedTicket, notClaimbedTicket}) {
  const data = [
    { name: "Tickets Validés", value: claimbedTicket },
    { name: "Tickets Non Validés", value: notClaimbedTicket },
  ]
  return (
    <div style={styles.lot}>
      <p style={styles.h2}>{title}</p>
      <PieChart width={300} height={300} >
      <Pie
        data={data}
        cx={150}
        cy={150}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend layout="vertical" verticalAlign="top" align="center" />
    </PieChart>
    </div>
    
  );
}


const styles = {
  lot:{
    display:"flex",
    maxWidth: 250,
    flexDirection:"column",
    justifyContent:"center",
    alignItems: "center",
    margin: 10,
    borderRadius:8,
    padding:15,
    color:"white"
  },
  h2:{
    fontSize:20,
    opacity:0.8,
    margin:3,
    color:"#000000"
  },
  legend:{
    margin: 70,
  }
}