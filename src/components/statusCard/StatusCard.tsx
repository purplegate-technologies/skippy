import { useState } from 'react'
import StatusCardIcon from '../../assets/svg/StatusCardIcon'
import './statuscard.css'
import { StatusCardProps } from './StatusTypes'

const StatusCard = ({ title, icon, count, percent, from }: StatusCardProps) => {
  const [iconState, setIconState] = useState<string>("")

  return (
    <div className="status-card"
      onMouseEnter={() => setIconState("store")}
      onMouseLeave={() => setIconState("")}>
      <div className="status-card__info">
        <span>{title?.toString().toUpperCase().slice(0,10)}</span>
        <h4>{count}</h4>
        <div className="status-card__info__percent">
          <span className='percentUp'>{percent}</span>{" "}
          <span>{from}</span>
        </div>
      </div>

      <div className="status-card__icon">
        <StatusCardIcon hovering={iconState === "store"} />
      </div>
    </div>
  )
}

export default StatusCard