import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import DeactiviteIcon from '../../assets/svg/Deactivite'
import EditIcon from '../../assets/svg/EditIcon'
import ExportIcon from '../../assets/svg/ExportIcon'
import Breadcrubs from '../../components/breadcrubs/Breadcrubs'
import Button from '../../components/button/Button'
// import DoughnutChart from '../../components/charts/DoughnutChart'
import { CircularProgressbar } from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css';
import DollarIcon from './DollarIcon'
import DollarVoucher from './DollarVoucher'

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
            <div className="financedetails my-5 border rounded-xl shadow-sm p-4">

                <div className="grid lg:grid-flow-col">
                {/* <div className="flex items-center flex-col md:flex-row justify-between"> */}
                    <div className="flex items-center">
                        <DollarIcon className="rounded-full shadow-lg" />
                        <div className='ml-3 text-[#949AB1]'>
                            <p className='text-md my-1'><span>Voucher</span> | <span className='text-[#00D48A]'>Available</span></p>

                            <span className='font-bold text-[#171837]'>N1500.00 Voucher</span>
                            <p className='text-xs my-1'>Expiry Date: 15/09/2022</p>
                        </div>
                    </div>
                    {/*  */}
                    <div className="flex items-center">
                        <Link to="/create-voucher" className="flex flex-col items-center cursor-pointer w-1/2 p-1">
                            <EditIcon />
                            <span onClick={() => { }} className='text-[#949AB1] text-xs'>Edit</span>
                        </Link>

                        <div className="flex flex-col items-center cursor-pointer w-1/2 p-1">
                            <DeactiviteIcon />
                            <span onClick={() => { }} className='text-[#949AB1] text-xs'>Deactivite</span>
                        </div>
                        <div className="flex flex-col items-center cursor-pointer w-1/2 p-1">
                            <ExportIcon />
                            <span onClick={() => { }} className='text-[#949AB1] text-xs'>Export</span>
                        </div>
                    </div>

                </div>
            </div>

            {/* end of ... */}

            <div className="grid lg:grid-cols-2 gap-10 mb-5">
                <div className="flex flex-col">
                    <div className=''>
                        <div className="pb-5">
                            <h1 className='font-semibold text-[20px]'>Voucher Preview</h1>
                        </div>
                        <div className="bg-white">
                            <div className='flex items-center border border-1 p-5'>
                                <DollarVoucher />
                                <span className="text-xl font-bold ml-3">N1500.00 Voucher</span>
                            </div>
                            <div className='p-5'>
                                <p className='pb-5 text-[#404040] text-lg font-bold text-center'>This voucher holds a value of N1,500.00 only, and can be redeemed for cash</p>
                                <p className='text-[#404040] text-lg'>
                                    <p>•	This Voucher is redeemable for cash</p>
                                    <p>•	This voucher can only be used once</p>
                                    <p>•	Has cash Value</p>
                                    <p>•	Cannot be redeemed once it expires</p>
                                </p>
                            </div>

                            <hr className='border-dashed  my-10 border-2' />

                            <div className="flex items-center gap-x-10 justify-between">
                                <div>
                                    <p>Valid till: 04 Jan, 2023 11:59pm</p>
                                    <p className='text-[#1C57AC]'>Terms & Conditions Apps</p>
                                </div>

                                <Button className="border rounded-full" onClick={() => navigate('create-voucher')}>1500</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:basis-1/2 flex flex-col bg-white mb-10">

                    <div className="">
                        <div className=" flex h-full border items-center flex-row border-[#F1F3FF] text-[#949AB1] relative">
                            <p className={"tabIndex text-center p-3 w-24 hover:border-t-2 hover:border-[#516CF5] cursor-pointer hover:text-[#516CF5]" + (tabIndex === "Info" && "tabIndex text-[#516CF5] border-t-2 border-t-[#516CF5]")} onClick={() => setTabIndex("Info")}>Info{" "}</p>
                            <p className={"tabIndex text-center p-3 w-24 hover:border-t-2 hover:border-[#516CF5] cursor-pointer hover:text-[#516CF5]" + (tabIndex === "Statistics" && " text-[#516CF5] border-t-2 border-t-[#516CF5]")} onClick={() => setTabIndex("Statistics")}>Statistics</p>
                        </div>
                    </div>

                    {tabIndex === "Info" && (<>
                        <div>
                            <h1 className="border-b p-6 font-bold text-[#171837] text-base">Voucher Statistics</h1>

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
                    {tabIndex === "Statistics" && (<>
                        <div className="con">
                            <h1 className="m-6 font-bold text-[#171837] text-base">Voucher Info</h1>

                            <div className="flex flex-col border">
                                <div className='p-4'>
                                    <p className='text-sm'>Voucher Quantity</p>
                                    <p className="text-[#516CF5] text-lg font-bold">100</p>
                                </div>
                                <div className="mx-auto my-3">
                                    {/* <DoughnutChart className='flex items-center justify-center' /> */}
                                    <CircularProgressbar value={100} text="70%" strokeWidth={10} className="w-[150px] h-[150px] justify-self-center flex-1"
                                        styles={{
                                            path: {
                                                transform: "rotate(180deg)",
                                                transformOrigin: "center center",
                                                strokeLinecap: "butt",
                                                stroke: "#347BF4"
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
                                <div className="grid grid-cols-2 place-items-center text-center">
                                    <div className="p-4 border w-full">
                                        <h1>30</h1>
                                        <p className="">Available</p>
                                    </div>
                                    <div className="p-4 border w-full">
                                        <h1>30</h1>
                                        <p className="">Redeemed</p>
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

export default FinanceDetails
