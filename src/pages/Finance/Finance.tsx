import  { useState } from 'react'
import Table from '../../components/Table/Table'

import SearchBar from '../../components/support/SearchBar'
import { useNavigate, Link } from 'react-router-dom'
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter'
import CreateAdsPlus from '../../assets/svg/CreateAdsPlus'
import { useGetVouchersQuery } from '../../features/vouchers/VouchersApiSlice'
import { useGetFinanceStatsQuery } from '../../features/stats/statsApis'
import StatusCardIcon from '../../assets/svg/StatusCardIcon'
import Coin from "./coin.svg"


const Finance = () => {
  const [iconState, setIconState] = useState<string>("")

  const navigate = useNavigate()

  const { data = null, isLoading, isFetching } = useGetVouchersQuery({})
  const { data: stats } = useGetFinanceStatsQuery()


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
      <td className="flex items-center py-4 px-6 text-gray-900 whitespace-pre-line dark:text-white " style={{ textOverflow: 'ellipsis' }}>
        {/* <img className="w-10 h-10 rounded-full" src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" alt="svgFace" /> */}
        <img className="w-10 h-10 rounded-full" src={Coin} alt="svgcoin" />
        <div className="pl-3">
          <div className="text-base font-semibold">{item?.title}</div>
          <div className="font-normal text-gray-500 text-xs" style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{item?.terms}</div>
        </div>
      </td>
      <td ><span className={`py-1 px-4 ${item?.status === 'active' ? 'bg-[#E5FBF3] rounded-full text-[#00D48A]' : 'bg-red-100 text-red-600 rounded-full'}`}>{item?.status}</span></td>
      <td>{item?.userQuantity}</td>
      <td>{item?.value}</td>
      <td className="whitespace-nowrap">{item?.startDate}</td>
      <td className="whitespace-nowrap">{item?.endDate}</td>
      <td><Link to={`/finance/${item?._id}`} className="underline text-[#516CF5] whitespace-nowrap">View Details</Link></td>
    </tr>
  )

  return (
    <div>
        <div>

          <h4 className='cardHead font-semibold'>Overview</h4>

          <div className="row">
            {/* card one */}
            <div className="col-3">
              <div className="status-card"
                onMouseEnter={() => setIconState("store")}
                onMouseLeave={() => setIconState("")}>
                <div className="status-card__info">
                  <span>{("total Payout Points")?.toString().toUpperCase()}</span>
                  <h4>{data ? stats?.data?.endDate?.totalVoucherPoints : "-"}</h4>
                  <div className="status-card__info__percent">
                    <span className='percentUp'>{data ? `${((stats?.data?.endDate?.totalVoucherPoints - stats?.data?.startDate?.totalVoucherPoints) / stats?.data?.endDate?.totalVoucherPoints * 100).toFixed(1)}% ↑ ` : "-% ↑"}</span>{" "}
                    <span>{data ? `from ${stats?.data?.startDate?.totalVoucherPoints}` : "from -"}</span>
                  </div>
                </div>

                <div className="status-card__icon">
                  <StatusCardIcon hovering={iconState === "store"} />
                </div>
              </div>
            </div>
            {/* CARD TWO */}
            <div className="col-3">
              <div className="status-card"
                onMouseEnter={() => setIconState("store")}
                onMouseLeave={() => setIconState("")}>
                <div className="status-card__info">
                  <span>{("Overall Redeemed Vouchers")?.toString().toUpperCase()}</span>
                  <h4>{data ? stats?.data?.endDate?.totalRedeemedVouchers : "-"}</h4>
                  <div className="status-card__info__percent">
                    <span className='percentUp'>{data ? `${((stats?.data?.endDate?.totalRedeemedVouchers - stats?.data?.startDate?.totalRedeemedVouchers) / stats?.data?.endDate?.totalRedeemedVouchers * 100).toFixed(1)}% ↑ ` : "-% ↑"}</span>{" "}
                    <span>{data ? `from ${stats?.data?.startDate?.totalRedeemedVouchers}` : "from -"}</span>
                  </div>
                </div>

                <div className="status-card__icon">
                  <StatusCardIcon hovering={iconState === "store"} />
                </div>
              </div>
            </div>
            {/* CARD three */}
            <div className="col-3">
              <div className="status-card"
                onMouseEnter={() => setIconState("store")}
                onMouseLeave={() => setIconState("")}>
                <div className="status-card__info">
                  <span>{("Redeemed Voucher Volume")?.toString().toUpperCase()}</span>
                  <h4>{data ? stats?.data?.endDate?.totalRedeemedVoucherVolume : "-"}</h4>
                  <div className="status-card__info__percent">
                    <span className='percentUp'>{data ? `${((stats?.data?.endDate?.totalRedeemedVoucherVolume - stats?.data?.startDate?.totalRedeemedVoucherVolume) / stats?.data?.endDate?.totalRedeemedVoucherVolume * 100).toFixed(1)}% ↑ ` : "-% ↑"}</span>{" "}
                    <span>{data ? `from ${stats?.data?.startDate?.totalRedeemedVoucherVolume}` : "from -"}</span>
                  </div>
                </div>

                <div className="status-card__icon">
                  <StatusCardIcon hovering={iconState === "store"} />
                </div>
              </div>
            </div>
            {/* card four */}
            <div className="col-3">
              <div className="status-card"
                onMouseEnter={() => setIconState("store")}
                onMouseLeave={() => setIconState("")}>
                <div className="status-card__info">
                  <span>{("Overall Points Spent")?.toString().toUpperCase()}</span>
                  <h4>{data ? stats?.data?.endDate?.totalPointsRedeemed : "-"}</h4>
                  <div className="status-card__info__percent">
                    <span className='percentUp'>{data ? `${((stats?.data?.endDate?.totalPointsRedeemed - stats?.data?.startDate?.totalPointsRedeemed) / stats?.data?.endDate?.totalPointsRedeemed * 100).toFixed(1)}% ↑ ` : "-% ↑"}</span>{" "}
                    <span>{data ? `from ${stats?.data?.startDate?.totalPointsRedeemed}` : "from -"}</span>
                  </div>
                </div>

                <div className="status-card__icon">
                  <StatusCardIcon hovering={iconState === "store"} />
                </div>
              </div>
            </div>
            {/* End of all card */}
          </div>
        </div>


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
                  limit={10}
                  headData={customerTableHead}
                  renderHead={(item: any, index: number) => renderHead(item, index)}
                  bodyData={isLoading  ? [] : data?.docs}
                  renderBody={(item: any, index: number) => renderBody(item, index)}
                  {...{ isLoading }}
                  {...{ isFetching }}
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
