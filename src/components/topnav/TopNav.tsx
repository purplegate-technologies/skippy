import { Link, useLocation } from 'react-router-dom'
import BellIcon from '../../assets/svg/BellIcon'
import NavImgIcon from '../../assets/svg/NavImgIcon'
import SearchIcon from '../../assets/svg/SearchIcon'
import SettingIcon from '../../assets/svg/SettingIcon'
import Input from '../input/Input'
import './topnav.css'


const renderNotificationItem = (item: any, index: number) => (
    <div className="notification-item" key={index}>
        <i className={item.icon}></i>
        <span>{item.content}</span>
    </div>
)

const current_user = {
    display_name: "Gerald Kachi",
    image: ""
    // image: user_image
}

const renderUserToggle = (user: any) => (
    <div className="topnav__right-user">
        <div className="topnav__right-user__image">
            <img src={user.image} alt="users" />
        </div>
        <div className="topnav__right-user__name">
            {user.display_name}
        </div>
    </div>
)

const TopNav = () => {
    const location = useLocation()
    const activePath = location.pathname
    // activePath === "/settings" ? "topnav__item topnav__item--active" : "topnav__item"
    
    return (
        <div className="topnav">
            <div className="topnav__search text-2xl">
                <input type="text" name="search" placeholder="Search..." />
                {/* <i className="bx bx-search"></i> */}
                <i><SearchIcon /></i>
            </div>

            <div className="topnav__right">
                {/* <div className="topnav__right-item">
                    dropdown here
                    <Dropdown
                        // icon="bx bx-user"
                        customToggle={() => renderUserToggle(current_user)}
                        contentData={user_menu}
                        renderItems={(item: any, index: number) => renderUserMenu(item, index)}
                    />
                </div> */}

                <Link to="#" className="topnav__right-item">
                    <BellIcon />
                </Link>

                <Link to="/settings" className={`topnav__right-item ${activePath === "/settings" && "bg-blue-600"}`}>
                    {/* dropdown here  */}
                    {/* <Dropdown
                        icon="bx bx-bell"
                        badge="12"
                        contentData={notifications}
                        renderItems={(item: any, index: number) => renderNotificationItem(item, index)}
                        renderFooter={() => <Link to="/">View All</Link>}
                    /> */}
                    <SettingIcon  {...{activePath}} />
                </Link>

                <Link to="/user-details" className={`topnav__right-item `}>
                    {/* theme settings */}
                    {/* <Dropdown icon="bx bx-user" /> */}
                    {/* <ThemeMenu /> */}
                    <NavImgIcon />
                </Link>
            </div>
        </div>
    )
}

export default TopNav
