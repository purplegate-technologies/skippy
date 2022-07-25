import React, { useState } from 'react'
import BarChart from '../../components/charts/BarChart'
import StatusCards from '../../components/statusCard/StatusCards'
import { UserData } from '../dashboard/data'

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

  return (
    <div>
      <StatusCards />

      <div className='traffic-flex'>
                {/* <div>help</div> */}
                <div style={{ width: 500 }}>
                    <BarChart chartData={userData} />
                </div>
            </div>
    </div>
  )
}

export default Traffic