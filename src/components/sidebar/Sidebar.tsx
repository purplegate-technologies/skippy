import './sidebar.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
// import logo from "../../assets/images/logo.png"
// import sidebar_items from "../../assets/JsonData/sidebar_routes.json"
import CompanyLogo from "../../assets/svg/CompanyLogo"
import DashboardIcon from '../../assets/svg/DashboardIcon'
import LogoutIcon from '../../assets/svg/LogoutIcon'
import TrafficIcon from '../../assets/svg/TrafficIcon'
import AdvertisementsIcon from '../../assets/svg/AdvertisementsIcon'
import FinanceIcon from '../../assets/svg/FinanceIcon'
import ManageUsersIcon from '../../assets/svg/ManageUsersIcon'
import ActivityLogIcon from '../../assets/svg/ActivityLogIcon'

import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { logout, selectAuth } from '../../features/auth/authSlice'
import {toast} from "react-toastify"

const sidebar_items: any = [
    {
        "display_name": "Dashboard",
        "route": "/",
    },
    {
        "display_name": "Advertisements",
        "route": "/advertisements",
    },
    {
        "display_name": "Traffic",
        "route": "/traffic",
    },
    {
        "display_name": "Finance",
        "route": "/finance",
    },
    {
        "display_name": "Manage Users",
        "route": "/manage-users",
    },
    {
        "display_name": "ActivityLog",
        "route": "/activity-log",
    },
]


const iconArr = [
    <DashboardIcon />,
    <AdvertisementsIcon />,
    <TrafficIcon />,
    <FinanceIcon />,
    <ManageUsersIcon />,
    <ActivityLogIcon />,
]

const Sidebar = () => {
    const location = useLocation()

    const { user } = useAppSelector(selectAuth)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const handleLogout = () => {
        dispatch(logout());
        toast.success("User Logged Out Successfully")
        navigate('/login')

    }

    return (
        <div className="sidebar">
            <div>
                <div className="sidebar__logo">
                    {/* <img src={""} alt="company logo" /> */}
                    <Link to="/"><CompanyLogo /></Link>
                    <Link to="/" style={{ textDecoration: 'none', color: 'black', marginLeft: '8px' }}>Admin@skippy.com</Link>
                    <div className='h-10' />
                </div>
                <div className="btwNav">
                    {sidebar_items.map((item: any, i: number) => {
                        const activeItem = sidebar_items.findIndex((item: any) => item.route === location.pathname)
                        return (
                            <Link to={item.route} key={i}>
                                <div className="sidebar__item">
                                    <div className={`sidebar__item-inner ${i === activeItem && "active"}`}>
                                        <i>{iconArr[i]}</i>
                                        <span>{item.display_name}</span>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>

            <div className="logout" onClick={() => handleLogout()}>
            {/* <h4>Name: {name}</h4> */}
                <Link to="">
                    <LogoutIcon />
                    <span className="logout">Logout</span>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar
