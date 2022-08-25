import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import CompanyLogo from '../../assets/svg/CompanyLogo';
import Button from '../../components/button/Button';
import TopNav from '../../components/topnav/TopNav';
import DeleteAdsIcon from './DeleteAdsIcon';
import EditAdsIcon from './EditAdsIcon';
import SnapAdsIcon from './SnapAdsIcon';
import VideoSlider from './VideoSlider';

const CreateAderts = () => {
  const [tabIndex, setTabIndex] = useState<string>("Scene")
  const navigate = useNavigate();
  return (
    <section className="bg-[#FCFCFF]">
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

      <div className="grid md:grid-cols-7 gap-10 m-5">
        <div className='md:basis-1/2 flex flex-col bg-white col-span-4'>
          Create ads
          <VideoSlider />
        </div>
        <div className='md:basis-1/2 flex flex-col bg-white col-span-3'>
          <div className="">
            <div className=" flex h-full borderitems-center flex-row border-[#F1F3FF] text-[#949AB1] relative">
              <p className={"tabIndex text-center p-3 w-24 hover:border-t-2 hover:border-[#516CF5] cursor-pointer hover:text-[#516CF5]" + (tabIndex === "Scene" && "tabIndex text-[#516CF5] border-t-2 border-t-[#516CF5]")} onClick={() => setTabIndex("Scene")}>Scene{" "}</p>
              <p className={"tabIndex text-center p-3 w-24 hover:border-t-2 hover:border-[#516CF5] cursor-pointer hover:text-[#516CF5]" + (tabIndex === "Ad Settings" && " text-[#516CF5] border-t-2 border-t-[#516CF5]")} onClick={() => setTabIndex("Ad Settings")}>Ad&nbsp;Settings</p>
            </div>
          </div>

          {tabIndex === "Scene" && (<>
            <div className='bg-white border'>

              <div className="flex items-center gap-x-5 my-5">
                <img src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" className="h-20 w-20" alt="" />
                <div className="flex flex-col gap-y-2">
                  <h1 className="text-[#171837] font-bold text-lg">Scene 1</h1>
                  <div className="flex items-center gap-x-3">
                    <EditAdsIcon className='cursor-pointer' />
                    <SnapAdsIcon className='cursor-pointer' />
                    <DeleteAdsIcon className='cursor-pointer' />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between border flex-1 lg:mt-auto mt-10">
                <div className="flex flex-col items-center border w-full p-2">
                  <p className='text-[#516CF5] text-[28px]'>A+</p>
                  <span className='text-[#949AB1] text-xs'>Add Text</span>
                </div>
                <div className="flex flex-col items-center border w-full p-2">
                  <p className='text-[#516CF5] text-[28px]'>30</p>
                  <span className='text-[#949AB1] text-xs'>Edit Scene</span>
                </div>
                <div className="flex flex-col items-center border w-full p-2">
                  <p className='text-[#516CF5] text-[28px]'>Rec</p>
                  <span className='text-[#949AB1] text-xs'>Background</span>
                </div>
              </div>
            </div>
          </>)}
          {tabIndex !== "Scene" && (<>

            <div className="">

            </div>
          </>)}
        </div>
      </div>



      <div className="flex  items-center justify-between bg-[#FCFCFF] border-[#F1F3FF] border p-5 fixed bottom-0 w-[100%]">
        <div className="gap-x-3 flex">
          <Button className="bg-[#949AB1]">Undo Changes</Button>
          <Button className="bg-[#FF5660]">Delete Advert</Button>
        </div>
        <div className="gap-x-3 flex">
          <Button className='bg-[#868BA1] ' onClick={() => navigate(-1)}>Cancel</Button>
          <Button className='bg-[#19C165]'>Save Changes</Button>
        </div>
      </div>

    </section>
  )
}

export default CreateAderts
