import { useState } from 'react'
import "./styles.css"
import Administrators from './Administrators'
import AppUsers from './AppUsers'
import { useGetUserStatsQuery } from '../../features/stats/statsApis'
import StatusCardIcon from '../../assets/svg/StatusCardIcon'


const ManageUsers = () => {
  const [iconState, setIconState] = useState<string>("")

  const [tabIndex, setTabIndex] = useState<string>("Administrators")
  const { data } = useGetUserStatsQuery()

  console.log(data, "useGetUserStatsQuery")

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
                <span>{("total Installed Apps")?.toString().toUpperCase()}</span>
                <h4>{data ? data?.data?.endDate?.totalUsers : "-"}</h4>
                <div className="status-card__info__percent">
                  <span className='percentUp'>{data ? `${((data?.data?.endDate?.totalUsers - data?.data?.startDate?.totalUsers) / data?.data?.endDate?.totalUsers * 100).toFixed(1)}% ↑ ` : "-% ↑"}</span>{" "}
                  <span>{data ? `from ${data?.data?.startDate?.totalUsers}` : "from -"}</span>
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
                <span>{("Total Active Users")?.toString().toUpperCase()}</span>
                <h4>{data ? data?.data?.endDate?.totalActiveUsers : "-"}</h4>
                <div className="status-card__info__percent">
                  <span className='percentUp'>{data ? `${((data?.data?.endDate?.totalActiveUsers - data?.data?.startDate?.totalActiveUsers) / data?.data?.endDate?.totalActiveUsers * 100).toFixed(1)}% ↑ ` : "-% ↑"}</span>{" "}
                  <span>{data ? `from ${data?.data?.startDate?.totalActiveUsers}` : "from -"}</span>
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
                <span>{("Total inactive Players")?.toString().toUpperCase()}</span>
                <h4>{data ? data?.data?.endDate?.totalInactiveUsers : "-"}</h4>
                <div className="status-card__info__percent">
                  <span className='percentUp'>{data ? `${((data?.data?.endDate?.totalInactiveUsers - data?.data?.startDate?.totalInactiveUsers) / data?.data?.endDate?.totalInactiveUsers * 100).toFixed(1)}% ↑ ` : "-% ↑"}</span>{" "}
                  <span>{data ? `from ${data?.data?.startDate?.totalInactiveUsers}` : "from -"}</span>
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

      {/* Tabs */}

      {/* Support Search  */}
      {/* <SearchBar HeaderTitle='Administrators' text="Create Admin" onClick={() => navigate('/settings')} /> */}

      {/* Table */}

      <div className="">
        <div className=" flex gap-6 h-full items-center flex-row my-4 ml-4 border-b-2 border-[#F1F3FF] text-[#949AB1] relative">
          <p className={"tabIndex py-3 hover:border-b-2 hover:border-[#516CF5] cursor-pointer hover:text-[#516CF5]" + (tabIndex === "Administrators" && "tabIndex text-[#516CF5] border-b-2 border-b-[#516CF5]")} onClick={() => setTabIndex("Administrators")}>Administrators{" "}</p>
          <p className={"tabIndex py-3 hover:border-b-2 hover:border-[#516CF5] cursor-pointer hover:text-[#516CF5]" + (tabIndex === "App Users" && " text-[#516CF5] border-b-2 border-b-[#516CF5]")} onClick={() => setTabIndex("App Users")}>App Users</p>
        </div>
        {/* Tab Container */}

        {tabIndex === "Administrators" && (<>
          <Administrators />
        </>)}
        {tabIndex !== "Administrators" && (<>
          <AppUsers />
        </>)}
      </div>
      {/* /////// */}
    </div>
  )
}

export default ManageUsers
