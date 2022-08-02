import React, { useState } from 'react'
import BarChart from '../../components/charts/BarChart'
import StatusCards from '../../components/statusCard/StatusCards'
import { UserData } from '../dashboard/data'
import DoughnutChart from '../../components/charts/DoughnutChart';
import Button from '../../components/button/Button';


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
    <section className='mb-10'>
      <StatusCards />

      <div className='traffic-flex'>

        <h1 className='my-6 mr-4 font-bold text-[#171837]'>Traffic  Statistics</h1>

        {/* card grid of three */}
        <div className=" mx-auto grid md:grid-cols-3 gap-8 flex-">
          {/* card chart */}
          <div className="py-6 card">
            {/* <div className="grid md:grid-cols-2 gap-8"> */}
            <div className="min-w-[355]">
              <p className='text-sm my-3'>Overall impressions</p>
              <p className="text-[#171837] text-2xl">150,000</p>
              <div className="flex items-center gap-1">
                <span className='text-xs text-[#516CF5]'>12% ↑</span> <p className='text-black'>from 80,000</p>
              </div>

              <div className="flex items-center justify-between gap-8">
                <div>
                  <div className=''>
                    <div className='p-1 rounded w-1'></div>
                    <p className='text-[#949AB1] text-xs my-1'>Internal Ads</p>
                    <p className='text-lg text-[#171837]'>75,000</p>
                  </div>
                  <div className=''>
                    <div className='p-1 rounded w-3 bg-[]'></div>
                    <p className='text-[#949AB1] text-xs my-1'>Internal Ads</p>
                    <p className='text-lg text-[#171837]'>75,000</p>
                  </div>
                </div>

                <DoughnutChart className='flex items-center justify-center' />
              </div>

            </div>
          </div>
          {/* card end */}

          {/* Middel */}
          {/*End Middel */}

          {/* Donut chat Two  */}
          <div className="py-6 card">
            <p className='text-sm my-3'>Overall Streams</p>
            {/* <div className="flex flex-col justify-between items-center"> */}
            <div className="flex flex-col justify-between items-center">
              <p className="text-[#171837] text-center text-[34px] mb-5">183,927</p>

              <div className="flex items-center justify-between w-3/4 mb-10">
                <div className='flex flex-col items-center'>
                  <span className="text-[#949AB1] text-xs my-1">Last Month</span>
                  <p className="text-[#171837] text-2xl">120,124</p>
                </div>
                |
                <div className='flex flex-col items-center'>
                  <span className="text-[#949AB1] text-xs my-1">Last Month</span>
                  <p className="text-[#171837] text-2xl">120,124</p>
                </div>
              </div>
              <Button className="rounded-2xl text-center">+ 23,91%</Button>
            </div>
          </div>

          {/*End Donut chat Two  */}
          {/* card chart */}

          <div className="py-6 card">
            {/* <div className="grid md:grid-cols-2 gap-8"> */}
            <div className="min-w-[355]">
              <p className='text-sm my-3'>Overall Engagements</p>
              <p className="text-[#171837] text-2xl">150,000</p>
              <div className="flex items-center gap-2">
                <span className='text-xs text-[#516CF5]'>12% ↑</span> <p className='text-black'>from 80,000</p>
              </div>

              <div className="flex items-center justify-between gap-8">
                <div>
                  <div className=''>
                    <div className='p-1 rounded w-1'></div>
                    <p className='text-[#949AB1] text-xs my-1'>Internal Ads</p>
                    <p className='text-lg text-[#171837]'>75,000</p>
                  </div>
                  <div className=''>
                    <div className='p-1 rounded w-3 bg-[]'></div>
                    <p className='text-[#949AB1] text-xs my-1'>Internal Ads</p>
                    <p className='text-lg text-[#171837]'>75,000</p>
                  </div>
                </div>

                <DoughnutChart className='flex items-center justify-center' />
              </div>
            </div>
          </div>
          {/* card end */}

        </div>
        {/* end of grid donuts */}

        <div className="grid grid-cols-1 gap-8">
          <div className="basis-full mx-4">
            <BarChart chartData={userData} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Traffic
