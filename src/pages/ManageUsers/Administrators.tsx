import React from 'react'
import CreateAdsPlus from '../../assets/svg/CreateAdsPlus'
import SearchBar from '../../components/support/SearchBar'
import Table from '../../components/Table/Table'
import { useNavigate, Link } from 'react-router-dom'
import advertlist from "../../assets/jsonData/advert-list.json"


const customerTableHead = [
    'App (ID)',
    'User TYPE',
    'Registration  Date',
    'Last Active time',
    'Status',
    'Action',
    // 'location'
  ]

  const renderHead = (item: any, index: number) => <th key={index}>{item}</th>

  const renderBody = (item: any, index: number) => (
    <tr key={index}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.phone}</td>
      <td>{item.total_orders}</td>
      {/* <td>{item.total_spend}</td> */}
      <td><Link to="/user-details" className='underline text-blue-600'>{item.location}</Link></td>
    </tr>
  )

const Administrators = () => {
    const navigate = useNavigate()

  return (
    <div>
           <div className="card">
            <SearchBar HeaderTitle='Administrators' text="Create Admin" onClick={() => navigate('/settings')} prefixIcon={<CreateAdsPlus />}  />

            {/* tab end */}
            <div className="row">
              <div className="col-12">
                <div className="">
                  {/* Tabs */}
                  <div className="card__body">
                    <Table
                     limit={10}
                      headData={customerTableHead}
                      renderHead={(item: any, index: number) => renderHead(item, index)}
                      bodyData={advertlist}
                      renderBody={(item: any, index: number) => renderBody(item, index)}
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
    </div>
  )
}

export default Administrators
