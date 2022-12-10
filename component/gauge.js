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
                <Legend iconType="circle" fontWeight="bold" />
            </PieChart>
        </div>
    );
}


const styles = {
    card: {
        color: "#023047",
    },
    title: {
        fontSize: 25,
        textAlign: "center",
        color: "#003e1f",
    },
}