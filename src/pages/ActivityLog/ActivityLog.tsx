import React from 'react'
import Table from '../../components/Table/Table'
// import advertlist from "../../assets/jsonData/advert-list.json"
import "./activity.css"
import SearchBar from '../../components/support/SearchBar'
import { useNavigate, Link, useParams } from 'react-router-dom'
import CreateAdsPlus from '../../assets/svg/CreateAdsPlus'
import { useGetAppUserQuery } from '../../features/UserManagement/User ManagementApiSlcie'

const ActivityLog = () => {
  const id = useParams()
  const navigate = useNavigate()

  const {data, isFetching, isLoading} = useGetAppUserQuery(id)

  const customerTableHead = [
    'User',
    'User TYPE',
    'Activity',
    'Date & Time',
    'Action',
  ]

  const renderHead = (item: any, index: number) => <th key={index}>{item}</th>

  const renderBody = (item: any, index: number) => (
    <tr key={index}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.phone}</td>
      {/* <td>{item.total_orders}</td>
      <td>{item.total_spend}</td> */}
      <td><Link to="/activity-overview" className="underline text-blue-600">{item.location}</Link></td>
    </tr>
  )

  return (
    <>
      {/* Suport Search */}

      <div className="card">
        <SearchBar HeaderTitle='Activity Log' placeholder='Search Activity' text="Invite User" onClick={() => navigate('/invite-users')}  prefixIcon={<CreateAdsPlus />}  />

        {/* Table */}
        <div className="">
          <div className="">
            <div className="">
              <div className="card__body">
                <Table
                  limit={10}
                  headData={customerTableHead}
                  renderHead={(item: any, index: number) => renderHead(item, index)}
                  bodyData={isLoading ? [] : []}
                  renderBody={(item: any, index: number) => renderBody(item, index)}
                  {...{isFetching}}
                  {...{isLoading}}
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default ActivityLog
