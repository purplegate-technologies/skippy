import './dashboard.css'
import LinearGradientChart from '../../components/charts/LinearGradientChart'
import { useState } from 'react'
import { UserData } from './data'
import StatusCards from '../../components/statusCard/StatusCards'
import BarChart from '../../components/charts/BarChart'
import SearchBar from '../../components/support/SearchBar'
import { useGetDashboardStatsQuery } from '../../features/stats/statsApis'

const Dashboard = () => {
    const { data, isSuccess, isFetching, isLoading } = useGetDashboardStatsQuery()

    console.log(data, "useGetDashboardStatsQuery")

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
            <div className='row justify-center'>
                <div className='col-6'>
                    <div className='basis-1/2 mx-4'>
                        <h6 className='text-black'>Total advert Watch Trend</h6>
                        <LinearGradientChart chartData={userData} />
                    </div>
                </div>
                <div className='col-6'>
                    <div className='basis-1/2 mx-4'>
                        <h6 className='text-black'>Total Payout Trend</h6>
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
