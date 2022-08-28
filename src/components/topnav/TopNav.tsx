import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import BellIcon from '../../assets/svg/BellIcon'
import NavImgIcon from '../../assets/svg/NavImgIcon'
import SearchIcon from '../../assets/svg/SearchIcon'
import SettingIcon from '../../assets/svg/SettingIcon'
import Dropdown from '../dropdown/Dropdown'
import SearchData from "../../assets/jsonData/advert-list.json"
// import Input from '../input/Input'
import './topnav.css'


const renderNotificationItem = (item: any, index: number) => (
    <div className="notification-item active" key={index}>
        <i className={item.icon}></i>
        <span>{item.heading}</span>
        <span>{item.content}</span>
    </div>
)

const notification = [
    {
        headding: "Notification",
        content: "my name os lala and i notify you"
    },
    {
        headding: "Notification",
        content: "my name os lala and i notify you"
    },
    {
        headding: "Notification",
        content: "my name os lala and i notify you"
    },
]


const TopNav = () => {
    const location = useLocation()
    const activepath = location.pathname

    const [query, setQuery] = useState<string>('')

    return (
        <>
            <div className="topnav">
                <div className="topnav__search text-2xl">
                    <input type="text" name="search" placeholder="Search..."
                        value={query}
                        onChange={(e: React.ChangeEvent) => setQuery((e.target as HTMLInputElement).value)}
                    />
                    {/* <i className="bx bx-search"></i> */}
                    <i><SearchIcon /></i>
                </div>


                <div className="topnav__right">

                    <Link to="#" className="topnav__right-item">
                        <Dropdown
                            icon="bx bx-bell"
                            badge="12"
                            contentData={notification}
                            renderItems={(item: any, index: number) => renderNotificationItem(item, index)}
                            renderFooter={() => <Link to="/">View All</Link>}
                        >
                            <BellIcon />
                        </Dropdown>
                    </Link>

                    <Link to="/settings" className={`topnav__right-item ${activepath === "/settings" && "bg-[#516CF5]"}`}>
                        <SettingIcon  {...{ activepath }} />
                    </Link>

                    <Link to="/user-details" className={`topnav__right-item `}>
                        <NavImgIcon />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default TopNav
