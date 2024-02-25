import { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

import { toast } from "react-hot-toast";
import { getParams } from "@/api/put-params";

export default function RadarChart() {
    const [series, setSeries] = useState();
    const [parameters, setParameters] = useState();

    useEffect(() => {
        async function fetchData() {
            const userId = localStorage.getItem("token");

            if (!userId) {
                toast.error("User not found");
                return;
            }

            const data = { uid: userId };
            const response = await getParams(data);
            console.log("response", response.data);

            if (response.success === false) {
                toast.error(response.message, {
                    position: "bottom-right",
                });
                return;
            }

            setParameters(response.data.parameters);
        }

        fetchData();
    }, []);

    useEffect(() => {
        if (parameters) {
            // Extract parameters from MongoDB response and set series state accordingly
            const { merits, community_engagement, innovation } = parameters;
            setSeries([
                { name: "Series 1", data: merits },
                { name: "Series 2", data: community_engagement },
                { name: "Series 3", data: innovation },
            ]);
        }
    }, [parameters]);

    const options = {
        chart: {
            height: 350,
            type: "radar",
            dropShadow: {
                enabled: true,
                blur: 1,
                left: 1,
                top: 1,
            },
        },
        title: {
            text: "Radar Chart - Multi Series",
        },
        stroke: {
            width: 2,
        },
        fill: {
            opacity: 0.1,
        },
        markers: {
            size: 0,
        },
        xaxis: {
            categories: ["2011", "2012", "2013", "2014", "2015", "2016"],
        },
    };

    return (
        <div>
            <div id="chart" className="w-full">
                <ReactApexChart
                    options={options}
                    series={series}
                    type="radar"
                    height={350}
                />
            </div>
            <div id="html-dist"></div>
        </div>
    );
}
