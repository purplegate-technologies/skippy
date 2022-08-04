import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Breadcrubs from '../../components/breadcrubs/Breadcrubs'
import Button from '../../components/button/Button'

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
        name: 'Finance',
        url: "finance"
    },
    {
        name: 'Finance Details',
        url: "finance-details"
    }
]
const FinanceDetails = () => {
    const [tabIndex, setTabIndex] = useState<string>("Info")

    const navigate = useNavigate()

    return (
        <section>
            <Breadcrubs {...{ bread }} />
            <div className="userdetails my-5 border rounded-xl shadow-sm p-4">

                <div className="grid lg:grid-flow-col">
                    <div className="flex items-center">
                        <img src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                            alt="Avatar"
                            className="rounded-full w-14 shadow-lg" />
                        <div className='ml-3 text-[#949AB1]'>
                            <p className='text-sm my-2'><span>Voucher</span> | <span className='text-[#00D48A]'>Available</span></p>
                            <span className='font-bold text-[#171837]'>N1500.00 Voucher</span>
                            <p className='text-sm my-2'>Expiry Date: 15/09/2022</p>
                        </div>
                    </div>
                    {/*  */}
                    <div className="flex items-center justify-between lg:mt-auto mt-10">
                        <div className="flex flex-col items-center w-full p-2">
                            <p>ICON</p>
                            <span className='text-[#949AB1] text-xs'>Created Adverts</span>
                        </div>
                        <div className="flex flex-col items-center w-full p-2">
                            <p>ICON</p>
                            <span className='text-[#949AB1] text-xs'>Created Adverts</span>
                        </div>
                        <div className="flex flex-col items-center w-full p-2">
                            <p className=''>ICON</p>
                            <span className='text-[#949AB1] text-xs'>Created Adverts</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* end of ... */}

            <div className="flex flex-wrap items-center justify-center">
                <div className="md:basis-1/2 flex flex-col">
                    <div className='self-center'>
                        <div className="py-5">
                            <h1 className='font-semibold text-[23px]'>Voucher Preview</h1>
                        </div>
                        <div className="card">
                            <div>
                                <p className='pb-5 text-[#404040] text-xl'>This voucher holds a value of N1,500.00 only, and can be redeemed for cash</p>
                                <p className='text-[#404040] text-xl'>
                                    <p>•	This Voucher is redeemable for cash</p>
                                    <p>•	This voucher can only be used once</p>
                                    <p>•	Has cash Value</p>
                                    <p>•	Cannot be redeemed once it expires</p>
                                </p>
                            </div>

                            <hr className='border-dashed  my-10 border-2' />

                            <div className="flex items-center gap-10 justfy-between">
                                <div>
                                    <p>Valid till: 04 Jan, 2023 11:59pm</p>
                                    <p className='text-[#1C57AC]'>Terms & Conditions Apps</p>
                                </div>
                                <div className="flex justify-end"></div>
                                <Button onClick={() => navigate('create-voucher')}>1500</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:basis-1/2 flex flex-col bg-white">

                    <div className="">
                        <div className=" flex gap-6 h-full border m-10 items-center flex-row my-4 ml-4 border-[#F1F3FF] text-[#949AB1] relative">
                            <p className={"tabIndex py-3 hover:border-t-2 hover:border-[#516CF5] cursor-pointer hover:text-[#516CF5]" + (tabIndex === "Info" && "tabIndex text-[#516CF5] border-t-2 border-t-[#516CF5]")} onClick={() => setTabIndex("Info")}>Info{" "}</p>
                            <p className={"tabIndex py-3 hover:border-t-2 hover:border-[#516CF5] cursor-pointer hover:text-[#516CF5]" + (tabIndex === "Statistics" && " text-[#516CF5] border-t-2 border-t-[#516CF5]")} onClick={() => setTabIndex("Statistics")}>Statistics</p>
                            <p className={"tabIndex border py-3 invisible" + (tabIndex === "Statistics" && " border")} onClick={() => setTabIndex("Statistics")}>Statistics</p>
                        </div>
                    </div>

                    {tabIndex !== "Info" && (<></>)}

                    {tabIndex === "Info" && (<></>)}

                </div>
            </div>
        </section>
    )
}

export default FinanceDetails
