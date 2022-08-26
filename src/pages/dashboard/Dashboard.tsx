/* eslint-disable no-labels */
import './dashboard.css'
import LinearGradientChart from '../../components/charts/LinearGradientChart'
import { useEffect, useState } from 'react'
import { UserData, datasetDash } from './data'
import StatusCards from '../../components/statusCard/StatusCards'
import BarChart from '../../components/charts/BarChart'
import SearchBar from '../../components/support/SearchBar'
import { useGetDashboardStatsQuery } from '../../features/stats/statsApis'
import ThreeVdots from '../../assets/svg/ThreeVdots'

const Dashboard = () => {
    const [dataSet, setDataSet] = useState({})
    const { data } = useGetDashboardStatsQuery()


    useEffect(() => {
       if(data && data?.data) {
        const Internalmonths: string[] = [];
        const Externalmonths: string[] = [];
        const InternalMonthsValue: number[] = [];
        const ExternalMonthsValue: number[] = [];
        Object.entries(data?.data?.monthOfYearGraph?.internal).map(val => {
            Internalmonths.push(val[0]);
            //@ts-ignore
            InternalMonthsValue.push(val[1]);
        });
        Object.entries(data?.data?.monthOfYearGraph?.external).map(val => {
            Externalmonths.push(val[0]);
            //@ts-ignore
            ExternalMonthsValue.push(val[1]);
        });

        setDataSet({
            labels: Internalmonths.map(data => data.toUpperCase()),
            datasets: [
                {
                    label: "Internal Ads Watched",
                    data: InternalMonthsValue.map((data) => data),
                    backgroundColor: "#2a71d0",
                    borderColor: "#2a71d0",
                    borderWidth: 1,
                    borderRadius: 5,
                },
                {
                    label: "External Ads Watched",
                    data: ExternalMonthsValue.map((data) => data),
                    backgroundColor: "#2a71d0",
                    borderColor: "#2a71d0",
                    borderWidth: 1,
                    borderRadius: 5,
                }
            ]
        });

        console.log(dataSet, 'dataset')
       }

    },[data]);

    // Object.keys(data).map((key) => {
    //     console.log(key, "key")
    //     console.log(data[key], "data[key]")
    // })

    const [userData, setUserrData] = useState({
        // labels: Object.values(data?.data).map((data) => data.month.toUpperCase()),
        labels: datasetDash.map((data) => data.month.toUpperCase()),
        datasets: [
            {
                label: "internal Ads Watched",
                // data: datasetDash.map((data) => data.adsWatched),
                backgroundColor: "#2a71d0",
                borderColor: "#2a71d0",
                borderWidth: 1,
                borderRadius: 5,
            },
            {
                label: "Ads Watched",
                data: datasetDash.map((data) => data.adsWatched),
                backgroundColor: "#A3B1FA",
                borderColor: "#A3B1FA",
                borderWidth: 1,
                borderRadius: 5,
            },
        ],
    })
    return (
        <>
            {/* {Object.values(data).map((item: any, index) => {
                <div key={index}>
                    HELP
                    <span>
                        {item}
                    </span>
                </div>
            })} */}

            <section className='mb-10'>
                <StatusCards />
                <h4 className='dashheade'>Ads  Statistics</h4>

                {/* <div className='row justify-center'> */}
                <div className='grid lg:grid-cols-3'>
                    {/* <div className="col-6"> */}
                    <div className="col-span-1  self-center">
                        {/* <div className='basis-1/2 mx-4'> */}
                        <div className='mx-4 flex flex-col justify-between'>
                            {/* <BarChart chartData={userData} /> */}
                            <div>
                                <p className='text-[#949AB1 text-xs'>Active Daily Players</p>
                                <h1 className="font-bold">980</h1>
                            </div>
                            <div className="my-3">
                                <div className="bg-[#516CF5] w-5 h-2 my-2 rounded-full">
                                    <div className="h-2"></div>
                                </div>
                                <p className='text-[#949AB1 text-xs'>Total Internal Ad’s</p>
                                <h1 className="font-bold">800</h1>
                            </div>
                            <div className="my-3">
                                <div className="bg-[#A3B1FA] w-5 h-2 my-2 rounded-full">
                                    <div className="h-2"></div>
                                </div>
                                <p className='text-[#949AB1 text-xs'>Total Internal Ad’s</p>
                                <h1 className="font-bold">980</h1>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        <div className='mx-4'>
                            <BarChart chartData={dataSet} />
                        </div>
                    </div>
                </div>
                <div className='row justify-center my-10 gap-x-3'>
                    <div className='col-6 card'>
                        <div className='basis-1/2'>
                            <div className="flex items-center justify-between">
                                <h6 className='text-[#171837] text-sm'>Total advert Watch Trend</h6>
                                <ThreeVdots />
                            </div>
                            <LinearGradientChart chartData={userData}
                            // {...{ backgroundColor }}
                            />
                        </div>
                    </div>
                    <div className='col-6 card'>
                        <div className='basis-1/2'>
                            <div className="flex items-center justify-between">
                                <h6 className='text-[#171837] text-sm'>Total Payout Trend</h6>
                                <ThreeVdots />
                            </div>
                            <LinearGradientChart chartData={userData} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Dashboard


// creating ssh key
// ssh-keygen -t ed25519 -C fitzgeraldkachi@gmail.com
// eval "$(ssh-agent -s)""

// to check if the file exist
// ssh-add ~/.ssh/config
