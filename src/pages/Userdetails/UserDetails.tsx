import { useState } from 'react'
import Breadcrubs from '../../components/breadcrubs/Breadcrubs'
import './userdetails.css'

const UserDetails = () => {
    const [tabIndex, setTabIndex] = useState<string>("MyDetails")

    return (
        <div>
            <Breadcrubs />
            <div className="userdetails my-5 border rounded-xl shadow-sm p-4">

                <div className="grid lg:grid-flow-col">
                    <div className="flex items-center">
                        <img src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                            alt="Avatar"
                            className="rounded-full w-14 shadow-lg" />
                        <div className='ml-3'>
                            <p className='text-[20px] my-2'>Imani Johnson</p>
                            <span className='flex items-center gap-5'>
                                <p className='text-sm'><span className='text-[#516CF5]'>Email:</span> admin@skippy.com</p>
                                <p className='text-sm'><span className='text-[#516CF5]'>Mobile Number:</span> 0801 234 5678</p>
                            </span>
                        </div>
                    </div>
                    {/*  */}
                    <div className="flex items-center justify-between border flex-1">
                        <div className="flex flex-col items-center border w-full p-2">
                            <p className='text-[#171837] text-[28px]'>30</p>
                            <span className='text-[#949AB1] text-xs'>Created Adverts</span>
                        </div>
                        <div className="flex flex-col items-center border w-full p-2">
                            <p className='text-[#171837] text-[28px]'>30</p>
                            <span className='text-[#949AB1] text-xs'>Created Adverts</span>
                        </div>
                        <div className="flex flex-col items-center border w-full p-2">
                            <p className='text-[#171837] text-[28px]'>30</p>
                            <span className='text-[#949AB1] text-xs'>Created Adverts</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Tabs */}
            <div className="">
                <div className=" flex gap-6 h-full items-center flex-row my-4 ml-4 border-b-2 border-[#F1F3FF] text-[#949AB1] cursor-pointer relative">
                    <p className={"tabIndex py-3 hover:border-b-2 hover:border-[#516CF5] cursor-pointer hover:text-[#516CF5]" + (tabIndex === "MyDetails" && "tabIndex text-[#516CF5] border-b-2 border-b-[#516CF5]")} onClick={() => setTabIndex("MyDetails")}>My Details{" "}</p>
                    <p className={"tabIndex py-3 hover:border-b-2 hover:border-[#516CF5] cursor-pointer hover:text-[#516CF5]" + (tabIndex === "ActivityLog" && "text-[#516CF5] border-b-2 border-b-[#516CF5]")} onClick={() => setTabIndex("ActivityLog")}>Activity Log</p>
                </div>
            </div>

             {/* Tab Container */}

        {tabIndex === "MyDetails" && (<>


        </>)}
        {tabIndex !== "MyDetails" && (<></>)}
          {/* tab index */}

          {/* tab end */}

            {/* end */}
        </div>
    )
}

export default UserDetails
