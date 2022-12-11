import React from "react";
import { PieChart, Pie, Cell, Legend } from 'recharts';

const COLORS = ['#0088FE', '#595959', '#FB8500'];


export default function Gauge({ title, data }) {
    return (
        <div style={styles.card}>
            <p style={styles.title}>{title}</p>
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
                <Legend iconType="circle" />
            </PieChart>
        </div>
    );
}


const styles = {
    card: {
        color: "#023047",
        margin: 5,
        padding:10,
        borderRadius:15,
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
        paddingBottom: 15,
        borderRadius: 15
    },
    title: {
        height: 0,
        textAlign: "center",
        color: "#212529",
        fontWeight: "bold",
    },
}