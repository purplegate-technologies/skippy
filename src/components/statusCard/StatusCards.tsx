import './statuscard.css'
import StatusCard from './StatusCard'
import { StatusCardProps } from './StatusTypes'

const statusData = [
    {
        "icon": "bx bx-shopping-bag",
        "count": "10,000",
        "title": "overall users",
        "percent": "12% ↑",
        "from": "from 880"
    },
    {
        "icon": "bx bx-cart",
        "count": "2,001",
        "title": "overllads",
        "percent": "12% ↑",
        "from": "from 880"
    },
    {
        "icon": "bx bx-dollar-circle",
        "count": "$2,632",
        "title": "total payout",
        "percent": "12% ↑",
        "from": "from 880"
    },
    {
        "icon": "bx bx-receipt",
        "count": "1,711",
        "title": "Vouchers redeemed",
        "percent": "12% ↑",
        "from": "from 880"
    }
]

const StatusCards = () => {
    return (
        <div>
            <h4 className='cardHead'>Overview</h4>
            <div className="row-status">
                {statusData.map((item: StatusCardProps) => (
                    <div className="col-6 col-3" key={item.title}>
                        <StatusCard icon={item.icon} count={item.count} title={item.title} percent={item.percent} from={item.from} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default StatusCards