import React from 'react'
import SearchIcon from '../../assets/svg/SearchIcon'
import SearchIconSupport from '../../assets/svg/SearchIconSupport'
import ThreeVdots from '../../assets/svg/ThreeVdots'
import Button from '../button/Button'
import Input from '../input/Input'

interface IProps {
    className?: string
    placeholder?:  string
    HeaderTitle?: string
    text?: string
    children?: React.ReactNode;
}



const SearchBar = ({ className = "", placeholder="Search", HeaderTitle, text, children=null }: IProps) => {
    return (
        <div className='my-5'>
            <div className='flex flex-1 items-center justify-between my-7 ml-3 mr-5'>
                <h2>{HeaderTitle}</h2>
                <ThreeVdots />
            </div>

        <form className={`h-[45px] flex items-center bg-[#f1f3fb] rounded-[10px] ${className}`}>
            <div>
                <SearchIconSupport className="ml-[.1rem] lg:ml-[1.3125rem] lg:mr-4 mr-3" />
            </div>
            <Input
                className={`flex-1 text-xs lg:text-lg md:text-sm`}
                type="text"
                placeholder={placeholder}
                />

            <Button text={text} {...{children}} className="ml-auto"/>
        </form>
    </div>
    )
}

export default SearchBar
