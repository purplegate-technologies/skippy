import React from 'react'
import StatusCards from '../../components/statusCard/StatusCards'
import Table from '../../components/Table/Table'

import advertlist from "../../assets/jsonData/advert-list.json"
import SearchBar from '../../components/support/SearchBar'
import { useNavigate, Link } from 'react-router-dom'
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter'
import CreateAdsPlus from '../../assets/svg/CreateAdsPlus'
import { useGetVouchersQuery } from '../../features/vouchers/VouchersApiSlice'


const Finance = () => {
  const navigate = useNavigate()
  const { data, isLoading, isFetching } = useGetVouchersQuery({ refetchOnMountOrArgChange: true })

  const customerTableHead = [
    'Brand Name',
    'Status',
    'QTY',
    'NGN Value',
    'Start Date',
    'Expiry Date',
    'Action'
  ]

  const renderHead = (item: any, index: number) => <th key={index}>{item}</th>

  const renderBody = (item: any, index: number) => (
    <tr key={item?._id}>
      {/* <td>{item?._id}</td> */}
      <td  className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
        <img className="w-10 h-10 rounded-full" src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" alt="svgFace" />
          <div className="pl-3">
            <div className="text-base font-semibold">{item?.title}</div>
            <div className="font-normal text-gray-500 text-xs">{item?.terms}</div>
          </div>
        </td>
        <td>{item?.status}</td>
        <td>{item?.userQuantity}</td>
        <td>{item?.value}</td>
        <td>{item?.startDate}</td>
        <td>{item?.endDate}</td>
        <td><Link to={`/finance/${item?._id}`} className="underline text-[#516CF5]">View Details</Link></td>
    </tr>
  )

  return (
    <div>
      <StatusCards />
      {/* Support Search */}


      <div className="card">
        <SearchBar className='' HeaderTitle='All Vouchers' placeholder='Enter Brand/Voucher Name' text="Create&nbsp;Voucher" onClick={() => navigate('/create-vouchers')} prefixIcon={<CreateAdsPlus />} />
        <CategoryFilter />
        {/* Table */}
        <div className="row">
          <div className="col-12">
            <div className="">
              <div className="card__body">
                <Table
                  limit='2'
                  headData={customerTableHead}
                  renderHead={(item: any, index: number) => renderHead(item, index)}
                  bodyData={isFetching ? [] : data?.docs }
                  renderBody={(item: any, index: number) => renderBody(item, index)}
                  {...{isLoading}}
                  {...{isFetching}}
                />
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Finance
