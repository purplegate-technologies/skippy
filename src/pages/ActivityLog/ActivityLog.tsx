import React from 'react'
import Table from '../../components/Table/Table'
import advertlist from "../../assets/jsonData/advert-list.json"
import "./activity.css"
import SearchBar from '../../components/support/SearchBar'

const ActivityLog = () => {

  
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

  return (
    <>
    {/* Suport Search */}

    <SearchBar HeaderTitle='Activity Log' placeholder='Search Activity' text="Invite User"  />
    
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
    </>
  )
}

export default ActivityLog