import { format } from 'date-fns'
import React, { useState } from 'react'
import Button from '../button/Button'
import DropDown from '../ClickDropDown/ClickDropDown'
// import { DateRange } from "react-date-range"

const CategoryFilter = () => {

    const [fromState, setFromState] = useState<boolean>(false)
    const [toState, setToRange] = useState<boolean>(false)

    const [date, setDate] = useState<any>([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection"
        }
    ])

    return (
        <div className='flex items-center justify-between bg-[#F6F6F6] p-4'>
            <DropDown defaultValue='Select Category' data={[]} className='border-[#949AB1] px-10' />
            <DropDown defaultValue='Select Status' data={[]} className='border-[#949AB1] px-10' />
            <div className="flex items-center">
                <p>from</p>
                <span className='cursor-pointer' onClick={() => setFromState(prev => !prev)}>{`-${format(date[0].startDate, 'MM/dd/yyyy')}`}</span>
                {/* {fromState && (
                    <DateRange
                    editableDateInputs
                    moveRangeOnFirstSelection={false}
                    onChange={(i: any) => setDate([i.selection])}
                    ranges={date}
                    className="absolute top-48 left-0 z-10"
                    />
                )} */}
            </div>
            <div className="flex items-center">
                <p>from</p>
                <span className='cursor-pointer' onClick={() => setToRange(prev => !prev)}>{`-${format(date[0].startDate, 'MM/dd/yyyy')}`}</span>
                {/* {toState && (
                    <DateRange
                    editableDateInputs
                    moveRangeOnFirstSelection={false}
                    onChange={(i: any) => setDate([i.selection])}
                    ranges={date}
                    className="absolute top-48 left-0 z-10"
                    />
                )} */}
            </div>
            <Button className='border-[#949AB1] bg-[#949AB1] text-white'>Apply Filter</Button>
            <Button className='border-[#949AB1] text-[#949AB1] bg-white'>Clear Filter</Button>
        </div>
    )
}

export default CategoryFilter
