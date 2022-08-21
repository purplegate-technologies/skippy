import './dashboard.css'
import LinearGradientChart from '../../components/charts/LinearGradientChart'
import { useState } from 'react'
import { UserData, datasetDash } from './data'
import StatusCards from '../../components/statusCard/StatusCards'
import BarChart from '../../components/charts/BarChart'
import SearchBar from '../../components/support/SearchBar'
import { useGetDashboardStatsQuery } from '../../features/stats/statsApis'
import ThreeVdots from '../../assets/svg/ThreeVdots'

const Dashboard = () => {
    const { data, isSuccess, isFetching, isLoading } = useGetDashboardStatsQuery()

    console.log(data, "useGetDashboardStatsQuery")


    // Object.keys(data).map((key) => {
    //     console.log(key, "key")
    //     console.log(data[key], "data[key]")
    // })

    const [userData, setUserrData] = useState({
        labels: datasetDash.map((data) => data.month.toUpperCase()),
        datasets: [
            {
                label: "Ads Watched",
                data: datasetDash.map((data) => data.adsWatched),
                backgroundColor: "#2a71d0",
                // backgroundColor: [
                //     "rgba(75,192,192,1)",
                //     "#ecf0f1",
                //     "#50AF95",
                //     "#f3ba2f",
                //     "#2a71d0",
                // ],
                borderColor: "#2a71d0",
                borderWidth: 1,
            },
            {
                label: "Ads Watched",
                data: datasetDash.map((data) => data.adsWatched),
                backgroundColor: "#A3B1FA",
                // backgroundColor: [
                //     "rgba(75,192,192,1)",
                //     "#ecf0f1",
                //     "#50AF95",
                //     "#f3ba2f",
                //     "#A3B1FA",
                // ],
                borderColor: "#A3B1FA",
                borderWidth: 1,
            },
        ],
    })
    return (
        <>
            <section className='mb-10'>
                <StatusCards />
                <h4 className='dashheade'>Ads  Statistics</h4>


                {/* <div className='row justify-center'> */}
                <div className='grid lg:grid-cols-3'>
                    {/* <div className="col-6"> */}
                    <div className="col-span-1">
                        {/* <div className='basis-1/2 mx-4'> */}
                        <div className='mx-4 flex flex-col justify-between'>
                            {/* <BarChart chartData={userData} /> */}
                            <div>
                                <div className="bg-[#516CF5]"></div>
                                <p className='text-[#949AB1 text-xs my-3'>Active Daily Players</p>
                                <h1 className="font-bold">980</h1>
                            </div>
                            <div>
                                <div className="bg-[#A3B1FA]"></div>
                                <p className='text-[#949AB1 text-xs my-3'>Total Internal Ad’s</p>
                                <h1 className="font-bold">980</h1>
                            </div>
                            <div>
                                <div className="bg-[#A3B1FA]"></div>
                                <p className='text-[#949AB1 text-xs my-3'>Total Internal Ad’s</p>
                                <h1 className="font-bold">980</h1>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        <div className='mx-4'>
                            <BarChart chartData={userData} />
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
