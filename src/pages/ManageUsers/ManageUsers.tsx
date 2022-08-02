import { useState } from 'react'
import StatusCards from '../../components/statusCard/StatusCards'
import advertlist from "../../assets/jsonData/advert-list.json"
import Table from '../../components/Table/Table'
import SearchBar from '../../components/support/SearchBar'
// import Input from '../../components/input/Input'
import "./styles.css"
import { useNavigate } from 'react-router-dom'


const ManageUsers = () => {
  const navigate = useNavigate()

  const [tabIndex, setTabIndex ] = useState<string>("Administrators")

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
    <div>
      <StatusCards />
      {/* Tabs */}

      {/* Support Search  */}
      <SearchBar HeaderTitle='Administrators' text="Create Admin" onClick={() => navigate('/settings')} />

      {/* Table */}

      <div className="">
        <div className=" flex gap-6 h-full items-center flex-row my-4 ml-4 border-b-2 border-[#F1F3FF] text-[#949AB1] cursor-pointer relative">
          <p className={"tabIndex py-3 hover:border-b-2 hover:border-[#516CF5] cursor-pointer hover:text-[#516CF5]" + (tabIndex === "Administrators" && "tabIndex text-[#516CF5] border-b-2 border-b-[#516CF5]")} onClick={() => setTabIndex("Administrators")}>Administrators{" "}</p>
          <p className={"tabIndex py-3 hover:border-b-2 hover:border-[#516CF5] cursor-pointer hover:text-[#516CF5]" + (tabIndex === "App Users" && " text-[#516CF5] border-b-2 border-b-[#516CF5]")} onClick={() => setTabIndex("App Users")}>App Users</p>
        </div>
        {/* Tab Container */}

        {tabIndex !== "Administrators" && (<>
          {/* tab index */}

          {/* tab end */}
          <div className="row">
            <div className="col-12">
              <div className="card">
                {/* Tabs */}
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
          {/* end of atabIndex === "Administrators" */}
        </>)}
        {tabIndex === "Administrators" && (<>
          {/* tab index */}

          {/* tab end */}
          <div className="row">
            <div className="col-12">
              <div className="card">
                {/* Tabs */}
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
          {/* end of atabIndex === "Administrators" */}
        </>)}
      </div>
      {/* /////// */}
    </div>
  )
}

export default ManageUsers
