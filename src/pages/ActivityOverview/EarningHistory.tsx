import React from 'react'
// import DoughnutChart from '../../components/charts/DoughnutChart'
import Table from '../../components/Table/Table'
import { CircularProgressbar } from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css';

const customerTableHead = [
    'Advert',
    'Date',
    'Points',
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

const EarningHistory = () => {
    return (
        <>
            <div className="grid lg:grid-cols-7 lg:gqp-x-10 bg-[#FCFCFF]">
                <div className="card__body lg:col-span-5">
                    <Table
                        limit='10'
                        headData={customerTableHead}
                        renderHead={(item: any, index: number) => renderHead(item, index)}
                        bodyData={[]}
                        renderBody={(item: any, index: number) => renderBody(item, index)}
                    />
                </div>

                <div className="md:col-span-2 ">
                    <div className="card flex items-center justify-between gap-8">
                        <div>
                            <div className=''>
                                <div className='p-1 rounded w-1'></div>
                                <p className='text-[#949AB1] text-xs my-1'>Overall Streams</p>
                                <p className='text-lg text-[#171837]'>100</p>
                            </div>
                            <div className=''>
                                <div className='p-1 rounded w-1'></div>
                                <p className='text-[#949AB1] text-xs my-1'>Completed Streams</p>
                                <p className='text-lg text-[#171837]'>97</p>
                            </div>
                            <div className=''>
                                <div className='p-1 rounded w-3 bg-[]'></div>
                                <p className='text-[#949AB1] text-xs my-1'>Cancelled Streams</p>
                                <p className='text-lg text-[#171837]'>3</p>
                            </div>
                        </div>

                        {/* <DoughnutChart className='flex items-center justify-center' /> */}
                        <CircularProgressbar value={100} text="70%" strokeWidth={10} className="w-[100px] h-[100px] justify-self-center flex-1"
                            styles={{
                                path: {
                                    // transform: "rotate(180deg)",
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
                    <div className="card flex items-center justify-between gap-8">
                        <div>
                            <div className=''>
                                <div className='p-1 rounded w-1'></div>
                                <p className='text-[#949AB1] text-xs my-1'>Overall Earnings</p>
                                <p className='text-lg text-[#171837]'>3000</p>
                            </div>
                            <div className=''>
                                <div className='p-1 rounded w-1'></div>
                                <p className='text-[#949AB1] text-xs my-1'>Redeemed</p>
                                <p className='text-lg text-[#171837]'>2500</p>
                            </div>
                            <div className=''>
                                <div className='p-1 rounded w-3 bg-[]'></div>
                                <p className='text-[#949AB1] text-xs my-1'>Expired</p>
                                <p className='text-lg text-[#171837]'>500</p>
                            </div>
                        </div>

                        {/* <DoughnutChart className='flex items-center justify-center' /> */}
                        <CircularProgressbar value={100} text="70%" strokeWidth={10} className="w-[100px] h-[100px] flex-1 justify-self-center"
                            styles={{
                                path: {
                                    // transform: "rotate(180deg)",
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
                </div>

            </div>

        </>
    )
}

export default EarningHistory
