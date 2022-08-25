import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CompanyLogo from '../../assets/svg/CompanyLogo'
import Button from '../../components/button/Button'
import TopNav from '../../components/topnav/TopNav'

const CreateVoucher = () => {
  const [tabIndex, setTabIndex] = useState<string>("Scene")
  const navigate = useNavigate();
  return (
    <section>
      <div className='flex'>
        <div className="sidebar__logo">
          {/* <img src={""} alt="company logo" /> */}
          <Link to="/"><CompanyLogo /></Link>
          <Link to="/" style={{ textDecoration: 'none', color: 'black', marginLeft: '8px' }}>Admin@skippy.com</Link>
          <div className='h-10' />
        </div>
        <div className="flex-1">
          <TopNav />
        </div>
      </div>
      <div className="flex flex-col justify-between">

        <div className="grid md:grid-cols-2 gap-10 m-5">
          <div className='md:basis-1/2 flex flex-col bg-white'>
            Create ads
          </div>
          <div className='md:basis-1/2 flex flex-col bg-white'>
          <div className="">
            <div className=" flex h-full borderitems-center flex-row border-[#F1F3FF] text-[#949AB1] relative">
              <p className={"tabIndex text-center p-3 w-24 hover:border-t-2 hover:border-[#516CF5] cursor-pointer hover:text-[#516CF5]" + (tabIndex === "Scene" && "tabIndex text-[#516CF5] border-t-2 border-t-[#516CF5]")} onClick={() => setTabIndex("Scene")}>Scene{" "}</p>
              <p className={"tabIndex text-center p-3 w-24 hover:border-t-2 hover:border-[#516CF5] cursor-pointer hover:text-[#516CF5]" + (tabIndex === "Ad Settings" && " text-[#516CF5] border-t-2 border-t-[#516CF5]")} onClick={() => setTabIndex("Ad Settings")}>Ad&nbsp;Settings</p>
            </div>
          </div>

          {tabIndex === "Scene" && (<>
            <div>

            </div>
          </>)}
          {tabIndex !== "Scene" && (<>

            <div className="">

            </div>
          </>)}
          </div>
        </div>



        <div className="flex  items-center justify-between bg-[#FCFCFF] m-5 border-[#F1F3FF] border py-5">
          <div className="gap-x-3 flex">
            <Button className="bg-[#949AB1]">Undo Changes</Button>
            <Button className="bg-[#FF5660]">Delete Advert</Button>
          </div>
          <Button className='bg-[#19C165]'>Save Changes</Button>
        </div>

      </div>

    </section>
  )
}

export default CreateVoucher
