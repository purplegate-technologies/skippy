import './dashboard.css'
import LinearGradientChart from '../../components/charts/LinearGradientChart'
import { useState } from 'react'
import { UserData } from './data'
import StatusCards from '../../components/statusCard/StatusCards'
import BarChart from '../../components/charts/BarChart'
import SearchBar from '../../components/support/SearchBar'

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
        <section>
            <StatusCards />
            <h4 className='dashheade'>Ads  Statistics</h4>
            <div className='row '>
                <div className="col-6">

                    <div style={{ width: 500 }}>
                        <BarChart chartData={userData} />
                    </div>
                </div>
                <div className="col-6">
                    <div style={{ width: 500 }}>
                        <BarChart chartData={userData} />
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-6 px-3'>
                    <div style={{  }}>
                        <h6 className='text-black'>Total advert Watch Trend</h6>
                    <LinearGradientChart chartData={userData} />
                    </div>
                </div>
                <div className='col-6 px-5'>
                    <div style={{  }}>
                        <h6 className='text-black'>Total Payout Trend</h6>
                    </div>
                    <LinearGradientChart chartData={userData} />
                </div>
            </div>
        </section>
    )
}

export default Dashboard