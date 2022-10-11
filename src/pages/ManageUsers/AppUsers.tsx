import React from 'react'
import CreateAdsPlus from '../../assets/svg/CreateAdsPlus'
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter'
import SearchBar from '../../components/support/SearchBar'
import Table from '../../components/Table/Table'
import { useNavigate, Link } from 'react-router-dom'
import advertlist from "../../assets/jsonData/advert-list.json"
import { useGetAppUsersQuery } from '../../features/UserManagement/User ManagementApiSlcie'


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
      <td>{item?.appId}</td>
      <td>{item.name}</td>
      <td>{item?.createdAt}</td>
      <td>{item?.updatedAt}</td>
      <td>{item?.status}</td>
      {/* <td>{item.total_spend}</td> */}
      <td><Link to={`/manage-users/${item?._id}`} className='underline text-blue-600'>View Details</Link></td>
      {/* <td><Link to={`/activity-overview/${item?._id}`} className='underline text-blue-600'>View Details</Link></td> */}
    </tr>
  )

const AppUsers = () => {
  const navigate = useNavigate()

  const { data, isFetching, isLoading } = useGetAppUsersQuery()
  console.log(data?.data?.docs, "App Users")

  return (
    <div>
        <div className="card">
            <SearchBar HeaderTitle='App Users' text="Invite User" onClick={() => navigate('/invite-users')} prefixIcon={<CreateAdsPlus />}  />
            <CategoryFilter />

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
                      // bodyData={advertlist}
                      bodyData={isLoading ? [] : data?.data?.docs}
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

export default AppUsers
