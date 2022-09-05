import React, { useState } from 'react'
import { useAppSelector } from '../../app/hooks'
import Breadcrubs from '../../components/breadcrubs/Breadcrubs'
import { selectCurrentUser } from '../../features/auth/authSlice'
import EarningHistory from './EarningHistory'
import VoucherDetails from './VoucherDetails'



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
        name: 'Manage Users',
        url: "manage-users"
    },
    {
        name: 'User Detail',
        url: "user-detail"
    }
]

const ActivityOverview = () => {
    const [tabIndex, setTabIndex] = useState<string>("Earning History")
    const user: any = useAppSelector(selectCurrentUser)

    return (
        <div>
            <Breadcrubs {...{ bread }} />
            <div className="userdetails my-5 border rounded-xl shadow-sm p-4">

                <div className="grid lg:grid-flow-col">
                    <div className="flex items-center">
                        <img src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                            alt="Avatar"
                            className="rounded-full w-14 shadow-lg" />
                        <div className='ml-3'>
                            <p className='text-[20px] my-2'>{user?.lastName} {user?.firstName} </p>
                            <span className='flex items-center gap-5'>
                                <p className='text-sm'><span className='text-[#516CF5]'>Email:</span> {user?.email}</p>
                                <p className='text-sm'><span className='text-[#516CF5]'>Mobile Number:</span> {user?.phone}</p>
                            </span>
                        </div>
                    </div>
                    {/*  */}
                    <div className="flex items-center justify-between border flex-1 lg:mt-auto mt-10">
                        <div className="flex flex-col items-center border w-full p-2">
                            <p className='text-[#171837] text-[28px]'>3,000</p>
                            <span className='text-[#949AB1] text-xs'> Points Earned</span>
                        </div>
                        <div className="flex flex-col items-center border w-full p-2">
                            <p className='text-[#171837] text-[28px]'>2,500</p>
                            <span className='text-[#949AB1] text-xs'> Points Redeemed</span>
                        </div>
                        <div className="flex flex-col items-center border w-full p-2">
                            <p className='text-[#171837] text-[28px]'>N1,500</p>
                            <span className='text-[#949AB1] text-xs'>Valid Voucher Value</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="">
                <div className=" flex gap-6 h-full items-center flex-row my-4 ml-4 border-b-2 border-[#F1F3FF] text-[#949AB1] cursor-pointer relative">
                    <p className={"tabIndex py-3 hover:border-b-2 hover:border-[#516CF5] cursor-pointer hover:text-[#516CF5]" + (tabIndex === "Earning History" && "tabIndex text-[#516CF5] border-b-2 border-b-[#516CF5]")} onClick={() => setTabIndex("Earning History")}>Earning History{" "}</p>
                    <p className={"tabIndex py-3 hover:border-b-2 hover:border-[#516CF5] cursor-pointer hover:text-[#516CF5]" + (tabIndex === "Voucher Details" && "text-[#516CF5] border-b-2 border-b-[#516CF5]")} onClick={() => setTabIndex("Voucher Details")}>Voucher Details</p>
                </div>
            </div>

            {/* Tab Container */}

            {/* tab index */}
            {tabIndex === "Earning History" && (<>
                <EarningHistory />
            </>)}
            {tabIndex !== "Earning History" && (<>
                <VoucherDetails />
            </>)}


            {/* tab end */}
        </div>
    )
}

export default ActivityOverview
