import { useState } from 'react';
import { PieChart, Pie, Cell, Legend } from "recharts";

const COLORS = ["#2a9d8f", "#e63946"];

export default function Gaugecart({ claimed, notClaimed }){
    const [data, setData] = useState([
        { name: "nombre de ticket assignés", value: claimed }, 
        { name: "nombre de ticket non assignés", value: notClaimed }])

    return (
        <div style={styles.lot}>
            <PieChart width={300} height={300}>
                <Pie
                    data={data}
                    cx={150}
                    cy={150}
                    label
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
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
    }
}
