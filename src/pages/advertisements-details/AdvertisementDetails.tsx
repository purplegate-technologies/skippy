import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import DeactiviteIcon from '../../assets/svg/Deactivite'
import EditIcon from '../../assets/svg/EditIcon'
import ExportIcon from '../../assets/svg/ExportIcon'
import Breadcrubs from '../../components/breadcrubs/Breadcrubs'
// import DoughnutChart from '../../components/charts/DoughnutChart'
import VideoPlayer from './video'

import { CircularProgressbar } from "react-circular-progressbar"
import { useGetAdvertByIdQuery } from '../../features/adverts/AdvertsApiSlice'


const videos: any = [
  {
    description:
      "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
    sources:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    subtitle: "By Blender Foundation",
    thumb: "images/BigBuckBunny.jpg",
    title: "Big Buck Bunny"
  },
  {
    description: "The first Blender Open Movie from 2006",
    sources:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    subtitle: "By Blender Foundation",
    thumb: "images/ElephantsDream.jpg",
    title: "Elephant Dream"
  },
  {
    description:
      "HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV. For when you want to settle into your Iron Throne to watch the latest episodes. For $35.\nLearn how to use Chromecast with HBO GO and more at google.com/chromecast.",
    sources:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    subtitle: "By Google",
    thumb: "images/ForBiggerBlazes.jpg",
    title: "For Bigger Blazes"
  }
]

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

  const [current, setCurrent] = React.useState(0);


  const { id } = useParams()
  const [tabIndex, setTabIndex] = useState<string>("Info")
  const navigate = useNavigate();


  const { data, isFetching, isLoading } = useGetAdvertByIdQuery(id, { refetchOnMountOrArgChange: true })

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
    // width: 720,
    // height: 100,
    fluid: true,
    controls: true,
    sources: [
      {
        src: data ? data?.videoUrl : "",
        type: 'video/mp4',
      },
      //   {
      //     src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      //     type: "video/mp4"
      //   },
      //   {
      //     src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      //     type: "video/mp4"
      //   },
      //   {
      //     src:  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      //     type: "video/mp4"
      //   },
      //   {
      //   src: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
      //   type: 'video/mp4',
      //   poster: 'http://media.w3.org/2010/05/sintel/poster.png'
      //   },

      // {
      //   src: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
      //   type: 'video/mp4',
      //   poster: 'http://media.w3.org/2010/05/bunny/poster.png'
      // },

      // {
      //   src: 'http://vjs.zencdn.net/v/oceans.mp4',
      //   type: 'video/mp4',
      //   poster: 'http://www.videojs.com/img/poster.jpg'
      // },

      // {
      //   src: 'http://media.w3.org/2010/05/bunny/movie.mp4',
      //   type: 'video/mp4',
      //   poster: 'http://media.w3.org/2010/05/bunny/poster.png'
      // },

      // {
      //   src: 'http://media.w3.org/2010/05/video/movie_300.mp4',
      //   type: 'video/mp4',
      //   poster: 'http://media.w3.org/2010/05/video/poster.png'
      // },
    ],
  };

  return (
    <section>
      <div className="flex items-center justify-between">
        <Breadcrubs {...{ bread }} />
        <Link to="" onClick={() => navigate(-1)} className="flex text-[#516CF5]" ><span>&#60;</span> &#60; <span> Back</span></Link>
      </div>

      <div className="adverts-details my-5 border rounded-xl shadow-sm p-4">

        <div className="grid lg:grid-flow-col">
          <div className="flex items-center">
            <img src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
              alt="Avatar"
              className="rounded-full w-14 shadow-lg" />
            <div className='ml-3 text-[#949AB1]'>
              <p className='text-sm my-1'><span>{data ? data?.external : "-"} Advert</span> | <span className='capitalize text-[#00D48A]'>{data ? data?.status : "-"}</span></p>
              <span className='font-bold text-[#171837]'>{data ? data?.title : "-"}</span>
              <p className='text-sm my-1'>Created: {data ? data?.createdAt : "-"}</p>
            </div>
          </div>
          {/*  */}
          <div className="flex items-center justify-between md:gap-x-3 lg:mt-auto mt-10 md:mt-0  md:ml-auto">
            <Link to="/create-adverts" onClick={() => { }} className="flex flex-col cursor-pointer items-center p-1">
              <EditIcon />
              <span className='text-[#949AB1] text-xs'>Edit</span>
            </Link>
            <div onClick={() => { }} className="flex flex-col cursor-pointer items-center p-1">
              <DeactiviteIcon />
              <span className='text-[#949AB1] text-xs'>Deactivite</span>
            </div>
            <div onClick={() => { }} className="flex flex-col cursor-pointer items-center p-1">
              <ExportIcon />
              <span className='text-[#949AB1] text-xs'>Export</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2  gap-10">
        <div className="flex-1 flex flex-col bg-white">
          {isLoading ? "isFetching Videos" : (
            <>{isFetching ? "isFetching Videos" : (
              <VideoPlayer options={videoJsOptions} onReady={handlePlayerReady} />
            )}
            </>)
          }

          {/* <video src={data ? data?.videoUrl : ""} className="p-[50%]" autoPlay controls /> */}

          {/* <video src={videos[current].sources} autoPlay controls /> */}
          {/* <button onClick={() => setCurrent(current < 2 ? current + 1 : 0)}>Next Video</button> */}
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
                  <p className="text-[#949AB1] text-sm">Category</p>
                  <p className="text-[#516CF5] text-sm text-right capitalize">{data ? `${data?.type} Advert` : "-"}</p>
                </div>
                <div className="flex items-center justify-between mb-6">
                  <p className="text-[#949AB1] text-sm">Brand Name/Ad Title</p>
                  <p className="text-[#171837] text-sm text-right">{data ? data?.title : "-"}</p>
                </div>
                <div className="flex items-center justify-between mb-6">
                  <p className="text-[#949AB1] text-sm">Action Link</p>
                  <p className="text-[#171837] text-sm text-right">{data ? data?.videoUrl : ""}</p>
                  {/* <p className="text-[#171837] text-sm text-right">https://netflix.com/</p> */}
                </div>
                <div className="flex items-center justify-between mb-6">
                  <p className="text-[#949AB1] text-sm">Duration</p>
                  <p className="text-[#171837] text-sm text-right">{data ? data?.lengthInSeconds : "-"}</p>
                </div>
                <div className="flex items-center justify-between mb-6">
                  <p className="text-[#949AB1] text-sm">Point per Play</p>
                  <p className="text-[#171837] text-sm text-right">{data ? data?.points : "-"}</p>
                </div>
                <div className="flex items-center justify-between mb-6">
                  <p className="text-[#949AB1] text-sm">Created By</p>
                  <p className="text-[#171837] text-sm text-right">{data ? data?.createdBy?.firstName : "-"} {data ? data?.createdBy?.lastName : "-"}</p>
                </div>
                <div className="flex items-center justify-between mb-6">
                  <p className="text-[#949AB1] text-sm">Add Date</p>
                  <p className="text-[#171837] text-sm text-right">{data ? data?.updatedAt : "-"}</p>
                </div>
                <div className="flex items-center justify-between mb-6">
                  <p className="text-[#949AB1] text-sm">Last Modified</p>
                  <p className="text-[#171837] text-sm text-right">{data ? data?.updatedAt : "-"}</p>
                </div>
                <div className="flex items-center justify-between mb-6">
                  <p className="text-[#949AB1] text-sm">Modified By</p>
                  <p className="text-[#171837] text-sm text-right">{data ? data?.createdBy?.firstName : "-"} {data ? data?.createdBy?.lastName : "-"}</p>
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
                        <span className='text-[#949AB1] text-[10px]'>Skippy Points Volume</span>
                        <p className='text-[#171837] text-[18px]'>98,000</p>
                      </div>
                      <div className='text-center my-4'>
                        <span className='text-[#949AB1] text-[10px]'>Value (N)</span>
                        <p className='text-[#171837] text-[18px]'>N45,000</p>
                      </div>

                      <div className="flex items-center justify-center mt-2 text-[10px] gap-1">
                        <p className="text-[#19C165] bg-[#E8F9F0] p-1 rounded">12% ↑</p>
                        <p className="text-[#171837]">from 80,000</p>
                      </div>
                    </div>



                    <div className="flex flex-col items-center justify-between border w-full m-2 p-5 rounded-xl">
                      <p className='text-[#171837] text-[18px]'>BOUNCE RATE</p>


                      <div className=" mx-auto my-3">
                        {/* <DoughnutChart className='flex items-center justify-center' /> */}
                        <CircularProgressbar value={100} text="70%" strokeWidth={10} className="w-[150px] h-[150px] justify-self-center flex-1"
                          styles={{
                            path: {
                              transform: "rotate(180deg)",
                              transformOrigin: "center center",
                              strokeLinecap: "butt",
                              stroke: "#FF5660"
                            },
                            trail: {
                              // strokeWidth: 0
                            },
                            text: {
                              fontSize: 22,
                              fontWeight: 800,
                              animation: "fadein 2s",
                              fill: "#347BF4"
                            }
                          }}
                        />

                      </div>

                      <div className="flex items-center justify-center mt-2 text-[10px] gap-1">
                        <p className="text-[#FF5660] bg-[#FFEDEE] p-1 rounded">12% ↑</p>
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
