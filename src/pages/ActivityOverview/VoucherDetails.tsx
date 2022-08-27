import React from 'react'
import Table from '../../components/Table/Table'
import ValidVoucherIcon from './ValidVoucherIcon'



const customerTableHead = [
    '',
    'name',
    'email',
    'phone',
    'total orders',
    'total spend',
    'location'
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

const VoucherDetails = () => {
    return (
        <>
            <div className="grid lg:grid-cols-7 bg-[#FCFCFF] lg:gap-x-10">
                <div className="card__body lg:col-span-5">
                    <Table
                        limit='10'
                        headData={customerTableHead}
                        renderHead={(item: any, index: number) => renderHead(item, index)}
                        bodyData={[]}
                        renderBody={(item: any, index: number) => renderBody(item, index)}
                    />
                </div>

                <div className="md:col-span-2 flex flex-col bg-white  items-center justify-between gap-8">

                        <div className=' rounded-lg flex p-2 items-center  bg-[#F1F3FF]'>
                            <ValidVoucherIcon />
                            <div className='p-3'>
                                <p className='text-[#404040]] text-md'>N1,500.00 Voucher</p>
                                <p className='text-xs my-1 text-[#949AB1]'>Valid till: 11/10/2023, 10:00am</p>
                            </div>
                        </div>
                        <div className=' rounded-lg flex p-2 items-center  bg-[#F1F3FF]'>
                            <ValidVoucherIcon />
                            <div className='p-3'>
                                <p className='text-[#404040] text-md'>N1,000.00 Voucher</p>
                                <p className='text-xs my-1 text-[#949AB1]'>Valid till: 11/10/2023, 10:00am</p>
                            </div>
                        </div>

                </div>
            </div>

        </>
    )
}

export default VoucherDetails
