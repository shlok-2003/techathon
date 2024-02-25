import { getParams } from "@/api/put-params";
import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const RADIAN = Math.PI / 180;
const COLORS = ["#00C49F", "#FFBB28", "#FF8042", "#0088FE", "#FF8042"];

// es-lint-ignore
const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
}: {
    cx: number;
    cy: number;
    midAngle: number;
    innerRadius: number;
    outerRadius: number;
    percent: number;
}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? "start" : "end"}
            dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

export default function BuyerProfilePieChart() {

    const [show, setShow] = useState();

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
                efforts_taken: item.parameters.efforts_taken,
                environmental_impact: item.parameters.environmental_impact,
                innovation: item.parameters.innovation,
            }));

            const totals = transformedData?.reduce(
                (acc, item) => {
                    acc.merits += parseInt(item.Merits);
                    acc.efforts_taken += parseInt(item.efforts_taken);
                    acc.environmental_impact += parseInt(
                        item.environmental_impact,
                    );
                    acc.community_engagement += parseInt(
                        item.Community_engagement,
                    );
                    acc.innovation += parseInt(item.innovation);
                    return acc;
                },
                {
                    merits: 0,
                    efforts_taken: 0,
                    environmental_impact: 0,
                    community_engagement: 0,
                    innovation: 0,
                },
            );

            const transformedShowData = Object.keys(totals).map((key) => ({
                name: key,
                value: totals[key],
            }));

            setShow(transformedShowData);
        };

        fetchData();
    });

    return (
        <div className="w-[20rem] h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col">
            <strong className="text-gray-700 font-medium">
                User Profile Holistic Development
            </strong>
            <div className="mt-3 w-full flex-1 text-xs">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={400} height={300}>
                        <Pie
                            data={show}
                            cx="50%"
                            cy="45%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={105}
                            fill="#8884d8"
                            dataKey="value">
                            {show?.map((_, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS[index % COLORS.length]}
                                />
                            ))}
                        </Pie>
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
