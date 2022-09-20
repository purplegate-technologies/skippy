import { useState } from 'react'
import StatusCards from '../../components/statusCard/StatusCards'
import advertlist from "../../assets/jsonData/advert-list.json"
import Table from '../../components/Table/Table'
import SearchBar from '../../components/support/SearchBar'
// import Input from '../../components/input/Input'
import "./styles.css"
import { useNavigate, Link } from 'react-router-dom'
import Administrators from './Administrators'
import AppUsers from './AppUsers'
import { useGetUserStatsQuery } from '../../features/stats/statsApis'


const ManageUsers = () => {

  const [tabIndex, setTabIndex] = useState<string>("Administrators")
  const {data} = useGetUserStatsQuery()

  console.log(data, "useGetUserStatsQuery")

  return (
    <div>
      <StatusCards />
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
