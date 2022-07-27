import { Doughnut } from 'react-chartjs-2';
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

const DoughnutChart = () => {


    const chartData = [20, 80];
    const showData = chartData[0] + "%";
    const data1 = {
        labels: ["Red", "Green"],
        datasets: [
            {
                data: chartData,
                backgroundColor: ["#B8D803", "#9E44F8"]
            }
        ],
        text: showData
    };
    // var originalDoughnutDraw = ChartJS.controllers.doughnut.prototype.draw;
    // ChartJS.helpers.extend(ChartJS.controllers.doughnut.prototype, {
    //   draw: function () {
    //     originalDoughnutDraw.apply(this, arguments);
    //     var chart = this.chart;
    //     var width = chart.chart.width,
    //       height = chart.chart.height,
    //       ctx = chart.chart.ctx;
    //     var fontSize = (height / 114).toFixed(2);
    //     ctx.font = fontSize + "em sans-serif";
    //     ctx.fillStyle = "#6D7278";
    //     ctx.textBaseline = "middle";
    //     var text = chart.config.data.text,
    //       textX = Math.round((width - ctx.measureText(text).width) / 2),
    //       textY = height / 2;
    //     ctx.fillText(text, textX, textY);
    //   }
    // });

    const options = {
        responsive: true,
        legend: {
            display: false,
            position: "bottom",
            labels: {
                fontSize: 18,
                fontColor: "#6D7278",
                fontFamily: "kanit light"
            }
        }
    };

    return (
        <div>
            <Doughnut data={data1} options={options} height={250} />
        </div>
    )
}

export default DoughnutChart