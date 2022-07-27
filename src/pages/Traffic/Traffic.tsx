import React, { useState } from 'react'
import BarChart from '../../components/charts/BarChart'
import StatusCards from '../../components/statusCard/StatusCards'
import { UserData } from '../dashboard/data'
import DoughnutChart from '../../components/charts/DoughnutChart';


const Traffic = () => {

  const [userData, setUserrData] = useState({
    labels: UserData.map((data) => data.day.toUpperCase()),
    datasets: [
      {
        label: "Ads Watched",
        data: UserData.map((data) => data.adsWatched),
        backgroundColor: "#2a71d0",
        // backgroundColor: [
        //     "rgba(75,192,192,1)",
        //     "#ecf0f1",
        //     "#50AF95",
        //     "#f3ba2f",
        //     "#2a71d0",
        // ],
        borderColor: "#2a71d0",
        borderWidth: 2,
      },
    ],
  })

  
 const options = {
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

  return (
    <div>
      <StatusCards />

      <div className='traffic-flex'>       

          <h1 className='my-6 mr-4 font-bold'>Traffic  Statistics</h1>

          {/* card chart */}
          <div className="w-full py-6 bg-white">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">

              <div className="w-full shadow-xl  p-4 my-4 rounded-lg hover:scale(105)">
                <p>Overall impressions</p>
                <p>150,000</p>
                <div> <span>12% ↑</span> <p>from 80,000</p> </div>

                  <div>
                    <p>Internal Ads</p>
                    <p>75,000</p>
                  </div>
                <div className="flex items-center justify-between gap-8">
                  <div>
                    <p>Internal Ads</p>
                    <p>75,000</p>
                  </div>
                  <div>Donut
                    <DoughnutChart />
                  </div>
                </div>

              </div>
              {/* donut 1 */}

            </div>
          </div>
          {/* end of grid donuts */}
          {/* card chart */}
          <div className="w-full py-6 bg-white">
            <div className="max-w-[1240px] grid md:grid-cols-2 gap-8">  

              <div className="w-full shadow-xl  p-4 my-4 rounded-lg hover:scale(105)">
                <p>Overall impressions</p>
                <p>150,000</p>
                <div> <span>12% ↑</span> <p>from 80,000</p> </div>

                  <div>
                    <p>Internal Ads</p>
                    <p>75,000</p>
                  </div>
                <div className="flex items-center justify-between gap-8">
                  <div>
                    <p>Internal Ads</p>
                    <p>75,000</p>
                  </div>
                  <div>Donut
                    <DoughnutChart />
                  </div>
                </div>

              </div>
              {/* donut 1 */}

            </div>
          </div>
          {/* end of grid donuts */}

           {/* <div>help</div> */}
        <div style={{ width: 500 }}>
          <BarChart chartData={userData} />
        </div>
      </div>
    </div>
  )
}

export default Traffic