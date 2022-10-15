import { useRef } from 'react';
import { Line, getElementAtEvent } from 'react-chartjs-2';
import {
    Chart as ChartJS, CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


export const options = {
    responsive: true,
    interaction: {
        mode: 'index' as const,
        intersect: false,
    },
    stacked: false,
    plugins: {
        title: {
            display: true,
            text: 'Chart.js Line Chart - Multi Axis',
        },
    },
    scales: {
        y: {
            type: 'linear' as const,
            display: true,
            position: 'left' as const,
        },
        y1: {
            type: 'linear' as const,
            display: true,
            position: 'right' as const,
            grid: {
                drawOnChartArea: false,
            },
        },
    },
};

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 'July'];


const data = {
    labels,
    datasets: [
        {
            label: "First dataset",
            data: [33, 53, 85, 41, 44, 65],
            fill: true,
            backgroundColor: "#742774",
            borderColor: "rgba(75,192,192,1)"
        },
        {
            label: "Second dataset",
            data: [33, 25, 35, 51, 54, 76],
            fill: false,
            borderColor: "#742774"
        }
    ]
};



const LinearGradientChart = ({ chartData, backgroundColor }: any) => {
    const chartRef = useRef<any>();
    const onClick = (event: Event  | any) => {
      console.log(getElementAtEvent(chartRef.current, event));
    }
    return (
        <div>
            <Line ref={chartRef} data={chartData} options={options} onClick={onClick} datasetIdKey="id" />
        </div>
    )
}

export default LinearGradientChart
