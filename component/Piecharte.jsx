import React from "react";
import { PieChart, Pie, Cell, Legend } from 'recharts';


const COLORS = ['#197278', '#0091ad', '#c8553d'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

export default function PieGraph({ title, data }) {

    return (
        <div style={styles.card} width="50%" height="100%">
            <p style={styles.title}>{title}</p>
            <PieChart width={300} height={300}>
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
                <Legend iconType="circle" />
            </PieChart>
        </div>
    );

}

const styles = {
    card: {
        width: 340,
        margin: 5,
        padding:10,
        borderRadius:15,
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
        paddingBottom: 15,
    },
    title: {
        height: 0,
        textAlign: "center",
        color: "#212529",
        fontWeight: "bold",
    },
}