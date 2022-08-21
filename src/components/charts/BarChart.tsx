import { useRef } from 'react';
import { getElementAtEvent, Bar, } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    registerables
} from 'chart.js';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ...registerables
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


const BarChart = ({ chartData, }: any) => {

    const chartRef = useRef<any>();
    const onClick = (event: Event | any) => {
        console.log(getElementAtEvent(chartRef.current, event));
    }

    return (
        <div>
            <Bar ref={chartRef} data={chartData} options={options} onClick={onClick} datasetIdKey="id" />
        </div>
    )
}

export default BarChart
