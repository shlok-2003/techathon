import { getParams } from "@/api/put-params";
import { useEffect, useState } from "react";
import {
    LineChart,
    ResponsiveContainer,
    Legend,
    Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
} from "recharts";

export default function TransactionChart() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const userId = localStorage.getItem("token");

            if (userId === null) {
                return;
            }

            const SocialData = await getParams({ uid: userId }).then((res) =>
                res.success ? res.data : null,
            );
            const transformedData = SocialData?.map((item) => ({
                name: item.uid,
                Community_engagement: item.parameters.community_engagement,
                Merits: item.parameters.merits,
            }));

            setData(transformedData);
            console.log("SocialData", transformedData);
        };

        fetchData();
    }, []);

    return (
        <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
            <strong className="text-gray-700 font-medium">
                Impact Calculator
            </strong>
            <div className="mt-3 w-full flex-1 text-xs">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
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
                        <Line dataKey="Merits" fill="#0ea5e9" />
                        <Line dataKey="Community_engagement" fill="#ea580c" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
