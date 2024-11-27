import { Pie } from "react-chartjs-2";
import { Chart as ChartJS,Tooltip, Legend, ArcElement, 
 } from "chart.js";
import {PieChartData } from "./FakeData";


ChartJS.register(
    Tooltip, Legend, ArcElement
);

export const PieChart = () => {
    const option = {
        responsive: true,
        plugins: {
            legend:{ display:false,
                position: "right",
            },
            title: {
                display:false,
                text: "Nifesimi Chart",
            }
        },
    };
 return (
    <div style={{width:"256px", height:"256px", flexShrink:0,}}>
    <Pie options={option} data={PieChartData }  />
    </div>
 )
}
