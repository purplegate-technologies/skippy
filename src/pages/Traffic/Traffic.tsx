import React, { useEffect, useState } from 'react'
import BarChart from '../../components/charts/BarChart'
import StatusCards from '../../components/statusCard/StatusCards'
import { UserData } from '../../assets/data/data'
import Button from '../../components/button/Button';
// import DoughnutChart from '../../components/charts/DoughnutChart';
// import { AntPieChart } from '../../components/charts/AntPieChart';
import ThreeVdots from '../../assets/svg/ThreeVdots';
import { useGetTrafficStatsQuery } from '../../features/stats/statsApis';
import StatusCardIcon from '../../assets/svg/StatusCardIcon'
import { CircularProgressbar } from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css';



export const barChartData = [
  {
    type: "Success",
    value: 575,
  },
  {
    type: "Declined",
    value: 175,
  },
];

const Traffic = () => {
  const [iconState, setIconState] = useState<string>("")

  const { data } = useGetTrafficStatsQuery()
  // console.log(data?.data, "data data data")

  const [userData, setUserrData] = useState({
    labels: UserData.map((data) => data.day.toUpperCase()),
    datasets: [
      {
        label: "Ads Watched",
        data: UserData.map((data) => data.adsWatched),
        backgroundColor: "#2a71d0",
        borderColor: "#2a71d0",
        borderWidth: 2,
        borderRadius: 5,
      },
    ],
  })

  const [dataSet, setDataSet] = useState(userData)



  // const options = {
  //   responsive: true,
  //   interaction: {
  //     mode: 'index' as const,
  //     intersect: false,
  //   },
  //   stacked: false,
  //   plugins: {
  //     title: {
  //       display: true,
  //       text: 'Chart.js Line Chart - Multi Axis',
  //     },
  //   },
  //   scales: {
  //     y: {
  //       type: 'linear' as const,
  //       display: true,
  //       position: 'left' as const,
  //     },
  //     y1: {
  //       type: 'linear' as const,
  //       display: true,
  //       position: 'right' as const,
  //       grid: {
  //         drawOnChartArea: false,
  //       },
  //     },
  //   },
  // };

  //   useEffect(() => {
  //     if(data && data?.data) {
  //      const Internalmonths: string[] = [];
  //      const Externalmonths: string[] = [];
  //      const InternalMonthsValue: number[] = [];
  //      const ExternalMonthsValue: number[] = [];
  //      Object.entries(data?.data?.monthOfYearGraph?.internal).map(val => {
  //          Internalmonths.push(val[0]);
  //          //@ts-ignore
  //          InternalMonthsValue.push(val[1]);
  //      });
  //      Object.entries(data?.data?.monthOfYearGraph?.external).map(val => {
  //          Externalmonths.push(val[0]);
  //          //@ts-ignore
  //          ExternalMonthsValue.push(val[1]);
  //      });

  //      setDataSet({
  //          labels: Internalmonths.map(data => data.toUpperCase()),
  //          datasets: [
  //              {
  //                  label: "Internal Ads Watched",
  //                  data: InternalMonthsValue.map((data) => data),
  //                  backgroundColor: "#2a71d0",
  //                  borderColor: "#2a71d0",
  //                  borderWidth: 1,
  //                  borderRadius: 5,
  //              },
  //              {
  //                  label: "External Ads Watched",
  //                  data: ExternalMonthsValue.map((data) => data),
  //                  backgroundColor: "#A3B1FA",
  //                  borderColor: "#A3B1FA",
  //                  borderWidth: 1,
  //                  borderRadius: 5,
  //              }
  //          ]
  //      });

  //     }

  //  },[data]);

  return (
    <section className='mb-10'>
      {(data && data?.data) ?
        <div>
          <div className="row">
            {/* card one */}
            <div className="col-3">
              <div className="status-card"
                onMouseEnter={() => setIconState("store")}
                onMouseLeave={() => setIconState("")}>
                <div className="status-card__info">
                  <span>{("total Active users")?.toString().toUpperCase()}</span>
                  <h4>{(data?.data?.endDate?.totalActiveUsers)}</h4>
                  <div className="status-card__info__percent">
                    <span className='percentUp'>{"-% ↑"}</span>{" "}
                    <span>{"from -"}</span>
                  </div>
                </div>

                <div className="status-card__icon">
                  <StatusCardIcon hovering={iconState === "store"} />
                </div>
              </div>
            </div>
            {/* CARD TWO */}
            <div className="col-3">
              <div className="status-card"
                onMouseEnter={() => setIconState("store")}
                onMouseLeave={() => setIconState("")}>
                <div className="status-card__info">
                  <span>{("Completed streams")?.toString().toUpperCase()}</span>
                  <h4>{(data?.data?.endDate?.totalCompletedStreams)}</h4>
                  <div className="status-card__info__percent">
                    <span className='percentUp'>{"-% ↑"}</span>{" "}
                    <span>{"from -"}</span>
                  </div>
                </div>

                <div className="status-card__icon">
                  <StatusCardIcon hovering={iconState === "store"} />
                </div>
              </div>
            </div>
            {/* CARD Three */}
            <div className="col-3">
              <div className="status-card"
                onMouseEnter={() => setIconState("store")}
                onMouseLeave={() => setIconState("")}>
                <div className="status-card__info">
                  <span>{("Overall impressions")?.toString().toUpperCase()}</span>
                  <h4>{(data?.data?.endDate?.totalStreams)}</h4>
                  <div className="status-card__info__percent">
                    <span className='percentUp'>{"-% ↑"}</span>{" "}
                    <span>{"from -"}</span>
                  </div>
                </div>

                <div className="status-card__icon">
                  <StatusCardIcon hovering={iconState === "store"} />
                </div>
              </div>
            </div>
            {/* card four */}
            <div className="col-3">
              <div className="status-card"
                onMouseEnter={() => setIconState("store")}
                onMouseLeave={() => setIconState("")}>
                <div className="status-card__info">
                  <span>{("Overall Engagements")?.toString().toUpperCase()}</span>
                  <h4>{(data?.data?.endDate?.totalCompletedStreams)}</h4>
                  <div className="status-card__info__percent">
                    <span className='percentUp'>{"-% ↑"}</span>{" "}
                    <span>{"from -"}</span>
                  </div>
                </div>

                <div className="status-card__icon">
                  <StatusCardIcon hovering={iconState === "store"} />
                </div>
              </div>
            </div>
            {/* End of all card */}
          </div>
        </div>
        :
        <StatusCards />
      }

      <div className='traffic-flex'>

        <h1 className='my-6 mr-4 font-bold text-[#171837]'>Traffic  Statistics</h1>

        {/* card grid of three */}
        <div className=" mx-auto grid lg:grid-cols-3 gap-8 flex-">
          {/* card chart */}
          <div className="py-6 card">
            {/* <div className="grid md:grid-cols-2 gap-8"> */}
            <div className="min-w-[355]">
              <p className='text-sm my-3'>Overall impressions</p>
              <p className="text-[#171837] text-2xl">150,000</p>
              <div className="flex items-center gap-1">
                <span className='text-xs text-[#516CF5]'>12% ↑</span> <p className='text-black'>from 80,000</p>
              </div>

              <div className="flex items-center justify-between gap-8 mt-4">
                <div>
                  <div className='my-3'>
                    <div className='p-[2px] rounded-full w-5 bg-[#516CF5]'></div>
                    <p className='text-[#949AB1] text-xs my-1'>Internal Ads</p>
                    <p className='text-lg text-[#171837]'>75,000</p>
                  </div>
                  <div className='mt-2'>
                    <div className='p-[2px] rounded-full w-5  bg-[#A3B1FA]'></div>
                    <p className='text-[#949AB1] text-xs my-1'>Internal Ads</p>
                    <p className='text-lg text-[#171837]'>75,000</p>
                  </div>
                </div>

                {/* <DoughnutChart className='flex items-center justify-center' /> */}
                {/* <div className="h-36 flex items-start justify-center"> */}



                <CircularProgressbar value={100} text="70%" strokeWidth={10} className="w-[150px] h-[150px] mb-5 justify-self-center flex-1"
                  styles={{
                    path: {
                      transform: "rotate(180deg)",
                      transformOrigin: "center center",
                      strokeLinecap: "butt",
                      stroke: "#9E44F8"
                    },
                    trail: {
                      // strokeWidth: 0
                    },
                    text: {
                      fontSize: 22,
                      fontWeight: 800,
                      animation: "fadein 2s",
                      fill: "#9E44F8"
                    }
                  }}
                />

                {/* </div> */}
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
              <Button className="rounded-2xl text-center bg-[#516CF5]">+ 23,91%</Button>
            </div>
          </div>

          {/*End Donut chat Two  */}
          {/* card chart */}

          <div className="py-6 card">
            <div className="min-w-[355]">
              <p className='text-sm my-3'>Overall Engagements</p>
              <p className="text-[#171837] text-2xl">150,000</p>
              <div className="flex items-center gap-2">
                <span className='text-xs text-[#516CF5]'>12% ↑</span> <p className='text-black'>from 80,000</p>
              </div>

              <div className="flex items-center justify-between  gap-8 mt-4">
                <div>
                  <div className='my-3'>
                    <div className='p-[2px] rounded-full w-5 bg-[#516CF5]'></div>
                    <p className='text-[#949AB1] text-xs my-1'>Internal Ads</p>
                    <p className='text-lg text-[#171837]'>75,000</p>
                  </div>
                  <div className='mt-2'>
                    <div className='p-[2px] rounded-full w-5  bg-[#A3B1FA]'></div>
                    <p className='text-[#949AB1] text-xs my-1'>Internal Ads</p>
                    <p className='text-lg text-[#171837]'>75,000</p>
                  </div>
                </div>

                {/* <DoughnutChart className='flex items-center justify-center' /> */}
                <CircularProgressbar value={100} text="70%" strokeWidth={10} className="w-[150px] h-[150px] mb-5 justify-self-center flex-1"
                  styles={{
                    path: {
                      transform: "rotate(180deg)",
                      transformOrigin: "center center",
                      strokeLinecap: "butt",
                      stroke: "#347BF4"
                    },
                    trail: {
                      // strokeWidth: 0
                    },
                    text: {
                      fontSize: 22,
                      fontWeight: 800,
                      animation: "fadein 2s",
                      fill: "#347BF4"
                    }
                  }}
                />
              </div>
            </div>
          </div>
          {/* card end */}

        </div>
        {/* end of grid donuts */}

        <div className="grid md:grid-cols-2">
          <div className="card">
            <div className="flex items-center justify-between">
              <h6 className='text-[#171837] text-sm'>Active Daily Users</h6>
              <ThreeVdots />
            </div>
            <BarChart chartData={dataSet} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Traffic
