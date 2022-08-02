import React from 'react'
import Breadcrubs from '../../components/breadcrubs/Breadcrubs'

const FinanceDetails = () => {
    return (
        <section>
            <Breadcrubs />
            <div className="userdetails my-5 border rounded-xl shadow-sm p-4">

                <div className="grid lg:grid-flow-col">
                    <div className="flex items-center">
                        <img src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                            alt="Avatar"
                            className="rounded-full w-14 shadow-lg" />
                        <div className='ml-3'>
                            <p className='text-[20px] my-2'>HHHHHHHHH </p>
                            <span className='flex items-center gap-5'>
                                <p className='text-sm'><span className='text-[#516CF5]'>Email:</span>mail</p>
                                <p className='text-sm'><span className='text-[#516CF5]'>Mobile Number:</span>phone</p>
                            </span>
                        </div>
                    </div>
                    {/*  */}
                    <div className="flex items-center justify-between border flex-1 lg:mt-auto mt-10">
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

            {/* end of ... */}

            <div className="flex flex-wrap items-center justify-center">
                <div className="basis1/2 bg-red-600 h-1/2">

                </div>
                <div className="basis1/2 bg-black h-1/2"></div>
            </div>
        </section>
    )
}

export default FinanceDetails
