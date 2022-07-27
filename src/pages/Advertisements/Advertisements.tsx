import './advertisements.css'
import StatusCards from '../../components/statusCard/StatusCards'
import Table from '../../components/Table/Table'
import advertlist from "../../assets/jsonData/advert-list.json"
import LinearGradientChart from '../../components/charts/LinearGradientChart'
import { useState } from 'react'
import { UserData } from '../dashboard/data'
import SearchBar from '../../components/support/SearchBar'

const Advertisements = () => {


  const customerTableHead = [
    '',
    'name',
    'email',
    'phone',
    'total orders',
    'total spend',
    'location'
  ]

  const renderHead = (item: any, index: number) => <th key={index}>{item}</th>

  const renderBody = (item: any, index: number) => (
    <tr key={index}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.phone}</td>
      <td>{item.total_orders}</td>
      <td>{item.total_spend}</td>
      <td>{item.location}</td>
    </tr>
  )

  const [userData] = useState({
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
      {/* Support Search */}

      <SearchBar HeaderTitle='All Adverts' placeholder='Enter Brand/Ad Name' text='Create Advert' />

      {/* Charts */}
      <div className='row  my-5 items-center'>
        <div className='col-6 px-3'>
          <div style={{ }}>
            <h6 className='text-black'>Total advert Watch Trend</h6>
          </div>
          <LinearGradientChart chartData={userData} />
        </div>
        <div className='col-6 px-3'>
          <div style={{ }}>
            <h6 className='text-black'>Total Payout Trend</h6>
          </div>
          <LinearGradientChart chartData={userData} />
        </div>
      </div>

      {/* Table */}
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              <Table
                limit='10'
                headData={customerTableHead}
                renderHead={(item: any, index: number) => renderHead(item, index)}
                bodyData={advertlist}
                renderBody={(item: any, index: number) => renderBody(item, index)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Table End */}
    </div>
  )
}

export default Advertisements