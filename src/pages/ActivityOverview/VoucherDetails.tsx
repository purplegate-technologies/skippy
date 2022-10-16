import Table from '../../components/Table/Table'
import { useGetVouchersUsersQuery } from '../../features/vouchers/VouchersApiSlice'
import ValidVoucherIcon from './ValidVoucherIcon'


const customerTableHead = [
    'Voucher Brand',
    'GENERATED ON',
    'EXPIRY DATE',
    'Status',
]

const renderHead = (item: any, index: number) => <th key={index}>{item}</th>

const renderBody = (item: any, index: number) => (
    <tr key={item?._id}>
        <td>{item?.title}</td>
        <td>{item?.createdAt}</td>
        <td>{item?.createdBy}</td>
        <td ><span className={`py-1 px-4 ${item?.status === 'active' ? 'bg-[#E5FBF3] rounded-full text-[#00D48A]' : 'bg-red-100 text-red-600 rounded-full'}`}>{item?.status}</span></td>
    </tr>
)

const VoucherDetails = () => {
    const {data, isLoading, isFetching} = useGetVouchersUsersQuery({})

    return (
        <>
            <div className="grid lg:grid-cols-7 bg-[#FCFCFF] lg:gap-x-10">
                <div className="card__body lg:col-span-5">
                    <Table
                        limit={10}
                        headData={customerTableHead}
                        renderHead={(item: any, index: number) => renderHead(item, index)}
                        bodyData={isLoading ? []  : data?.docs}
                        renderBody={(item: any, index: number) => renderBody(item, index)}
                        {...{ isLoading }}
                        {...{ isFetching }}
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
