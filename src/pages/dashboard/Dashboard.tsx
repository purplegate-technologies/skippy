import './dashboard.css'
import LinearGradientChart from '../../components/charts/LinearGradientChart'
import { useState } from 'react'
import { UserData } from './data'
import StatusCards from '../../components/statusCard/StatusCards'
import BarChart from '../../components/charts/BarChart'

const Dashboard = () => {

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
        <div>

            {/* StatusCards */}
            <StatusCards />
            <h4 className='dashheade'>Ads  Statistics</h4>
            <div className='chartGrid'>
                <div>help</div>
                <div style={{ width: 800 }}>
                    <BarChart chartData={userData} />
                </div>
            </div>
            <div className='chartGrid'>
                <div>
                    <div style={{ width: 400 }}>
                        <h6 className='text-black'>Total advert Watch Trend</h6>
                    </div>
                    <LinearGradientChart chartData={userData} />
                </div>
                <div>
                    <div style={{ width: 400 }}>
                        <h6 className='text-black'>Total Payout Trend</h6>
                    </div>
                    <LinearGradientChart chartData={userData} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard