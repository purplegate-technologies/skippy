import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import DeactiviteIcon from '../../assets/svg/Deactivite'
import EditIcon from '../../assets/svg/EditIcon'
import ExportIcon from '../../assets/svg/ExportIcon'
import Breadcrubs from '../../components/breadcrubs/Breadcrubs'
import DoughnutChart from '../../components/charts/DoughnutChart'
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

  const playerRef = React.useRef(null);
  const handlePlayerReady = (player: any) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      // videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      // videojs.log('player will dispose');
    });
  };

  const videoJsOptions = {
  autoplay: false,
  playbackRates: [0.5, 1, 1.25, 1.5, 2],
  width: 720,
  height: 300,
  controls: true,
  sources: [
    {
      src: '//vjs.zencdn.net/v/oceans.mp4',
      type: 'video/mp4',
    },

      // {
      //   src: "https://www.youtube.com/watch?v=K9GymlBfrXg",
      //   type: "video/mp4"
      // },
      // {
      //   src: "https://www.youtube.com/watch?v=0wvd5HD2zzQ&list=RDGMEMWO-g6DgCWEqKlDtKbJA1Gw&index=4",
      //   type: "video/mp4"
      // },
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

      <div className="grid md:grid-cols-2  gap-10">
        <div className="md:basis-1/2 flex flex-col bg-white">

          <VideoPlayer
            options={videoJsOptions}
            className="video-js"
            onReady={handlePlayerReady}
          />
        </div>

        <div className="md:basis-[45%] flex flex-col bg-white mb-10">

          <div className="">
            <div className=" flex h-full borderitems-center flex-row border-[#F1F3FF] text-[#949AB1] relative">
              <p className={"tabIndex text-center p-3 w-24 hover:border-t-2 hover:border-[#516CF5] cursor-pointer hover:text-[#516CF5]" + (tabIndex === "Info" && "tabIndex text-[#516CF5] border-t-2 border-t-[#516CF5]")} onClick={() => setTabIndex("Info")}>Info{" "}</p>
              <p className={"tabIndex text-center p-3 w-24 hover:border-t-2 hover:border-[#516CF5] cursor-pointer hover:text-[#516CF5]" + (tabIndex === "Statistics" && " text-[#516CF5] border-t-2 border-t-[#516CF5]")} onClick={() => setTabIndex("Statistics")}>Statistics</p>
            </div>
          </div>

          {tabIndex === "Info" && (<>
            <div>
              <h1 className="border-b p-6 font-bold text-[#171837] text-base">Advert Info</h1>

              <div className="flex flex-col px-4 mt-7">
                <div className="flex items-center justify-between mb-6">
                  <p className="text-[#949AB1] text-xs">Category</p>
                  <p className="text-[#516CF5] text-xs text-right">Netflix Price Slash Promo</p>
                </div>
                <div className="flex items-center justify-between mb-6">
                  <p className="text-[#949AB1] text-xs">Brand Name/Ad Title</p>
                  <p className="text-[#171837] text-xs text-right">Netflix Price Slash Promo</p>
                </div>
                <div className="flex items-center justify-between mb-6">
                  <p className="text-[#949AB1] text-xs">Action Link</p>
                  <p className="text-[#171837] text-xs text-right">https://netflix.com/</p>
                </div>
                <div className="flex items-center justify-between mb-6">
                  <p className="text-[#949AB1] text-xs">Duration</p>
                  <p className="text-[#171837] text-xs text-right">01:30 mins</p>
                </div>
                <div className="flex items-center justify-between mb-6">
                  <p className="text-[#949AB1] text-xs">Point per Play</p>
                  <p className="text-[#171837] text-xs text-right">100</p>
                </div>
                <div className="flex items-center justify-between mb-6">
                  <p className="text-[#949AB1] text-xs">Created By</p>
                  <p className="text-[#171837] text-xs text-right">Imani Johnson</p>
                </div>
                <div className="flex items-center justify-between mb-6">
                  <p className="text-[#949AB1] text-xs">Add Date</p>
                  <p className="text-[#171837] text-xs text-right">01/05/2021</p>
                </div>
                <div className="flex items-center justify-between mb-6">
                  <p className="text-[#949AB1] text-xs">Last Modified</p>
                  <p className="text-[#171837] text-xs text-right">01/05/2021</p>
                </div>
                <div className="flex items-center justify-between mb-6">
                  <p className="text-[#949AB1] text-xs">Modified By</p>
                  <p className="text-[#171837] text-xs text-right">Imani Johnson</p>
                </div>

              </div>
            </div>
          </>)}
          {tabIndex !== "Info" && (<>

            <div className="">
              <h1 className="m-6 font-bold text-[#171837] text-base">Advert Report</h1>

              <div>
                <div className="flex items-center justify-between flex-1 lg:mt-auto mt-10">
                  <div className="flex flex-col items-center border w-full m-2 p-5 rounded-xl">
                    <p className='text-[#516CF5] text-[18px]'>98,000</p>
                    <span className='text-[#171837] text-[10px]'>Created Adverts</span>

                    <div className="flex items-center justify-center mt-2 text-[10px] gap-1">
                      <p className="text-[#19C165] bg-[#E8F9F0] p-1 rounded">12% ↑</p>
                      <p className="text-[#171837]">from 75k</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center border w-full m-2 p-5 rounded-xl">
                    <p className='text-[#516CF5] text-[18px]'>98,000</p>
                    <span className='text-[#171837] text-[10px]'>Created Adverts</span>

                    <div className="flex items-center justify-center mt-2 text-[10px] gap-1">
                      <p className="text-[#19C165] bg-[#E8F9F0] p-1 rounded">12% ↑</p>
                      <p className="text-[#171837]">from 75k</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center border w-full m-2 p-5 rounded-xl">
                    <p className='text-[#516CF5] text-[18px]'>98,000</p>
                    <span className='text-[#171837] text-[10px]'>Created Adverts</span>

                    <div className="flex items-center justify-center mt-2 text-[10px] gap-1">
                      <p className="text-[#19C165] bg-[#E8F9F0] p-1 rounded">12% ↑</p>
                      <p className="text-[#171837]">from 75k</p>
                    </div>
                  </div>
                </div>


                {/* Over all Pay out */}
                <div>
                  <div className="flex items-center justify-between flex-1 lg:mt-auto mt-10">
                    <div className="flex flex-col items-center border w-full m-2 p-5 rounded-xl">
                      <p className='text-[#171837] text-[18px]'>Overall Payout</p>

                      <div className='text-center my-4'>
                        <p className='text-[#171837] text-[18px]'>98,000</p>
                        <span className='text-[#949AB1] text-[10px]'>Skippy Points Volume</span>
                      </div>

                      <div className="flex items-center justify-center mt-2 text-[10px] gap-1">
                        <p className="text-[#19C165] bg-[#E8F9F0] p-1 rounded">12% ↑</p>
                        <p className="text-[#171837]">from 80,000</p>
                      </div>
                    </div>



                    <div className="flex flex-col items-center justify-between border w-full m-2 p-5 rounded-xl">
                      <p className='text-[#171837] text-[18px]'>BOUNCE RATE</p>


                      <div className="w-[45%] mx-auto my-3">
                        <DoughnutChart className='flex items-center justify-center' />
                      </div>

                      <div className="flex items-center justify-center mt-2 text-[10px] gap-1">
                        <p className="text-[#19C165] bg-[#E8F9F0] p-1 rounded">12% ↑</p>
                        <p className="text-[#171837]">from 75k</p>
                      </div>
                    </div>
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
