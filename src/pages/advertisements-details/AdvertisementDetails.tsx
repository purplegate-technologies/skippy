import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import DeactiviteIcon from '../../assets/svg/Deactivite'
import EditIcon from '../../assets/svg/EditIcon'
import ExportIcon from '../../assets/svg/ExportIcon'
import Breadcrubs from '../../components/breadcrubs/Breadcrubs'
import VideoPlayer from './video'
// import VideoPlayer from "react-video-js-player"

export interface BreadcrumbsProps {
  url?: string
  name?: string
  lenght?: number
}
export interface BreadcrumsbItemsProps {
  bread?: BreadcrumbsProps[]
}
const bread: BreadcrumbsProps[] = [
  {
    name: 'Dashboard',
    url: ''
  },
  {
    name: 'Advertisements',
    url: "advertisements"
  },
  {
    name: 'Advertisements Details',
    url: "advertisements-details"
  }
]

const AdvertisementDetails = () => {
  const [tabIndex, setTabIndex] = useState<string>("Info")
  const navigate = useNavigate();

  const videoJsOptions = {
    sources: [
      {
        src: "//vjs.zencdn.net/v/oceans.mp4",
        type: "video/mp4"
      }
    ]
  };

  return (
    <section>
      <div className="flex items-center justify-between">
        <Breadcrubs {...{ bread }} />
        <Link to="" onClick={() => navigate(-1)} className="text-[#516CF5]" >&#60; &#60; Back</Link>
      </div>

      <div className="adverts-details my-5 border rounded-xl shadow-sm p-4">

        <div className="grid lg:grid-flow-col">
          <div className="flex items-center">
            <img src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
              alt="Avatar"
              className="rounded-full w-14 shadow-lg" />
            <div className='ml-3 text-[#949AB1]'>
              <p className='text-sm my-1'><span>Internal Advert</span> | <span className='text-[#00D48A]'>Active</span></p>
              <span className='font-bold text-[#171837]'>Netflix Price Slash Promo</span>
              <p className='text-sm my-1'>Created: 15/05/2021</p>
            </div>
          </div>
          {/*  */}
          <div className="flex items-center justify-between lg:mt-auto mt-10">
            <div className="flex flex-col items-center w-1/2 p-1">
              <EditIcon />
              <span className='text-[#949AB1] text-xs'>Edit</span>
            </div>
            <div className="flex flex-col items-center w-1/2 p-1">
              <DeactiviteIcon />
              <span className='text-[#949AB1] text-xs'>Deactivite</span>
            </div>
            <div className="flex flex-col items-center w-1/2 p-1">
              <ExportIcon />
              <span className='text-[#949AB1] text-xs'>Export</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-10">
        <div className="md:basis-1/2 flex flex-col bg-white">

          <VideoPlayer
          // options={videoJsOptions}
          />
        </div>

        <div className="md:basis-1/2 flex flex-col bg-white">

          <div className="">
            <div className=" flex h-full borderitems-center flex-row border-[#F1F3FF] text-[#949AB1] relative">
              <p className={"tabIndex text-center p-3 w-24 hover:border-t-2 hover:border-[#516CF5] cursor-pointer hover:text-[#516CF5]" + (tabIndex === "Info" && "tabIndex text-[#516CF5] border-t-2 border-t-[#516CF5]")} onClick={() => setTabIndex("Info")}>Info{" "}</p>
              <p className={"tabIndex text-center p-3 w-24 hover:border-t-2 hover:border-[#516CF5] cursor-pointer hover:text-[#516CF5]" + (tabIndex === "Statistics" && " text-[#516CF5] border-t-2 border-t-[#516CF5]")} onClick={() => setTabIndex("Statistics")}>Statistics</p>
            </div>
          </div>

          {tabIndex === "Info" && (<>
            <div>
              <h1 className="border-b p-6 font-bold text-[#171837] text-xl">Advert Info</h1>

              <div className="flex flex-col px-4 mt-7">
                <div className="flex items-center justify-between mb-7">
                  <p className="text-[#949AB1] text-xs">Category</p>
                  <p className="text-[#516CF5] text-xs text-right">Netflix Price Slash Promo</p>
                </div>
                <div className="flex items-center justify-between mb-7">
                  <p className="text-[#949AB1] text-xs">Brand Name/Ad Title</p>
                  <p className="text-[#171837] text-xs text-right">Netflix Price Slash Promo</p>
                </div>
                <div className="flex items-center justify-between mb-7">
                  <p className="text-[#949AB1] text-xs">Action Link</p>
                  <p className="text-[#171837] text-xs text-right">https://netflix.com/</p>
                </div>
                <div className="flex items-center justify-between mb-7">
                  <p className="text-[#949AB1] text-xs">Duration</p>
                  <p className="text-[#171837] text-xs text-right">01:30 mins</p>
                </div>
                <div className="flex items-center justify-between mb-7">
                  <p className="text-[#949AB1] text-xs">Point per Play</p>
                  <p className="text-[#171837] text-xs text-right">100</p>
                </div>
                <div className="flex items-center justify-between mb-7">
                  <p className="text-[#949AB1] text-xs">Created By</p>
                  <p className="text-[#171837] text-xs text-right">Imani Johnson</p>
                </div>
                <div className="flex items-center justify-between mb-7">
                  <p className="text-[#949AB1] text-xs">Add Date</p>
                  <p className="text-[#171837] text-xs text-right">01/05/2021</p>
                </div>
                <div className="flex items-center justify-between mb-7">
                  <p className="text-[#949AB1] text-xs">Last Modified</p>
                  <p className="text-[#171837] text-xs text-right">01/05/2021</p>
                </div>
                <div className="flex items-center justify-between mb-7">
                  <p className="text-[#949AB1] text-xs">Modified By</p>
                  <p className="text-[#171837] text-xs text-right">Imani Johnson</p>
                </div>

              </div>
            </div>
          </>)}
          {tabIndex !== "Info" && (<>

            <div className="card">
              <h1 className="m-6 font-bold text-[#171837] text-xl">Advert Report</h1>

              <div>
                <div className="flex items-center justify-between flex-1 lg:mt-auto mt-10">
                  <div className="flex flex-col items-center border w-full m-2 p-2 rounded-xl">
                    <p className='text-[#171837] text-[28px]'>30</p>
                    <span className='text-[#949AB1] text-xs'>Created Adverts</span>
                  </div>
                  <div className="flex flex-col items-center border w-full m-2 p-2 rounded-xl">
                    <p className='text-[#171837] text-[28px]'>30</p>
                    <span className='text-[#949AB1] text-xs'>Created Adverts</span>
                  </div>
                  <div className="flex flex-col items-center border w-full m-2 p-2 rounded-xl">
                    <p className='text-[#171837] text-[28px]'>30</p>
                    <span className='text-[#949AB1] text-xs'>Created Adverts</span>
                  </div>
                </div>
              </div>
            </div>
          </>)}


        </div>
      </div>

    </section>
  )
}

export default AdvertisementDetails
