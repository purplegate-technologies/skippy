import './statuscard.css'
import StatusCard from './StatusCard'
import { StatusCardProps } from './StatusTypes'

const statusData = [
    {
        "icon": "bx bx-shopping-bag",
        "count": "-",
        "title": "-",
        "percent": "-% ↑",
        "from": "from -"
    },
    {
        "icon": "bx bx-cart",
        "count": "-",
        "title": "-",
        "percent": "-% ↑",
        "from": "from -"
    },
    {
        "icon": "bx bx-dollar-circle",
        "count": "-",
        "title": "-",
        "percent": "-% ↑",
        "from": "from -"
    },
    {
        "icon": "bx bx-receipt",
        "count": "-",
        "title": "-",
        "percent": "-% ↑",
        "from": "from -"
    }
]

const StatusCards = () => {
    return (
        <div>
            <h4 className='cardHead font-semibold'>Overview</h4>
            <div className="row">
                {statusData.map((item: StatusCardProps) => (
                    <div className="col-3" key={item.title}>
                        <StatusCard icon={item.icon} count={item.count} title={item.title} percent={item.percent} from={item.from} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default StatusCards
