import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const data: {
    name: string;
    Likes: number;
    Merits: number;
}[] = [
    {
        name: "Jan",
        Likes: 4000,
        Merits: 2400,
    },
    {
        name: "Feb",
        Likes: 3000,
        Merits: 1398,
    },
    {
        name: "Mar",
        Likes: 2000,
        Merits: 9800,
    },
    {
        name: "Apr",
        Likes: 2780,
        Merits: 3908,
    },
    {
        name: "May",
        Likes: 1890,
        Merits: 4800,
    },
    {
        name: "Jun",
        Likes: 2390,
        Merits: 3800,
    },
    {
        name: "July",
        Likes: 3490,
        Merits: 4300,
    },
    {
        name: "Aug",
        Likes: 2000,
        Merits: 9800,
    },
    {
        name: "Sep",
        Likes: 2780,
        Merits: 3908,
    },
    {
        name: "Oct",
        Likes: 1890,
        Merits: 4800,
    },
    {
        name: "Nov",
        Likes: 2390,
        Merits: 3800,
    },
    {
        name: "Dec",
        Likes: 3490,
        Merits: 4300,
    },
];

export default function TransactionChart() {
    return (
        <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
            <strong className="text-gray-700 font-medium">Transactions</strong>
            <div className="mt-3 w-full flex-1 text-xs">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 20,
                            right: 10,
                            left: -10,
                            bottom: 0,
                        }}>
                        <CartesianGrid
                            strokeDasharray="3 3 0 0"
                            vertical={false}
                        />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Merits" fill="#0ea5e9" />
                        <Bar dataKey="Likes" fill="#ea580c" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
