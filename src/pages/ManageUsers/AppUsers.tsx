import CreateAdsPlus from '../../assets/svg/CreateAdsPlus'
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter'
import SearchBar from '../../components/support/SearchBar'
import Table from '../../components/Table/Table'
import { useNavigate, Link } from 'react-router-dom'
import { useGetAppUsersQuery } from '../../features/UserManagement/User ManagementApiSlcie'


const customerTableHead = [
  'App (ID)',
  'User TYPE',
  'Registration  Date',
  'Last Active time',
  'Status',
  'Action',
]

const renderHead = (item: any, index: number) => <th key={index}>{item}</th>

const renderBody = (item: any, index: number) => (
  <tr key={index}>
    <td>{item?.appId}</td>
    <td>{item.name}</td>
    <td>{item?.createdAt}</td>
    <td>{item?.updatedAt}</td>
    <td ><span className={`py-1 px-4 ${item?.status === 'active' ? 'bg-[#E5FBF3] rounded-full text-[#00D48A]' : 'bg-red-100 text-red-600 rounded-full'}`}>{item?.status}</span></td>
    {/* <td><Link to={`/activity-overview/${item?._id}`} className='underline text-blue-600 whitespace-nowrap'>View Details</Link></td> */}
    <td><Link to={`/manage-users/${item?._id}`} className='underline text-blue-600 whitespace-nowrap'>View Details</Link></td>
  </tr>
)

const AppUsers = () => {
  const navigate = useNavigate()

  const { data, isFetching, isLoading } = useGetAppUsersQuery()

  return (
    <div>
      <div className="card">
        <SearchBar HeaderTitle='App Users' text="Invite User" onClick={() => navigate('/invite-users')} prefixIcon={<CreateAdsPlus />} />
        <CategoryFilter />

        <div className="row">
          <div className="col-12">
            <div className="">

              <div className="card__body">
                <Table
                  limit={10}
                  headData={customerTableHead}
                  renderHead={(item: any, index: number) => renderHead(item, index)}
                  bodyData={isLoading ? [] : data?.data?.docs}
                  renderBody={(item: any, index: number) => renderBody(item, index)}
                  {...{ isFetching }}
                  {...{ isLoading }}
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
