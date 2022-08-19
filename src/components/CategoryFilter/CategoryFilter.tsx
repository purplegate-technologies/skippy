import { format } from 'date-fns'
import React, { useState } from 'react'
import Button from '../button/Button'
import DropDown from '../ClickDropDown/ClickDropDown'
import { DateRange } from "react-date-range"
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import Dropdown from '../dropdown/Dropdown'

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
        <div className='flex items-center justify-between gap-1 bg-[#F6F6F6] p-4'>
            {/* <DropDown defaultValue='Select Category' data={[]} className='border-[#949AB1] ' />
            <DropDown defaultValue='Select Status' data={[]} className='border-[#949AB1] ' /> */}
            <Dropdown> Select Category</Dropdown>
            <Dropdown> Select Status</Dropdown>

            {/* <Dropdown>
            Select Status
            </Dropdown> */}
            <div className="flex items-center border-[#949AB1] border rounded-md p-2 relative">
                <p>to</p>
                <span className='cursor-pointer' onClick={() => setFromState(prev => !prev)}>{`-${format(date[0].startDate, 'MM/dd/yyyy')}`}</span>
                {fromState && (
                    <DateRange
                        editableDateInputs
                        moveRangeOnFirstSelection={false}
                        onChange={(i: any) => setDate([i.selection])}
                        ranges={date}
                        className="date absolute top-10 right-1 z-10"
                    />
                )}
            </div>

            <div className="flex items-center border-[#949AB1] border rounded-md p-2 relative">
                <p>from</p>
                <span className='cursor-pointer' onClick={() => setToRange(prev => !prev)}>{`-${format(date[0].endDate, 'MM/dd/yyyy')}`}</span>
                {toState && (
                    <DateRange
                        editableDateInputs
                        moveRangeOnFirstSelection={false}
                        onChange={(i: any) => setDate([i.selection])}
                        ranges={date}
                        className="date absolute top-10 z-10"
                    />
                )}
            </div>
            <Button className='border-[#949AB1] bg-[#949AB1] text-white'>Apply Filter</Button>
            <Button className='border-[#949AB1] text-[#949AB1] bg-white'>Clear Filter</Button>
        </div>
    )
}

export default CategoryFilter
