import { ReactNode, useRef } from 'react'
import "./dropdown.css"

interface DropDownProps<T = any> {
  children?: ReactNode
  icon?: string
  badge?: number | string | JSX.Element
  renderFooter?: () => JSX.Element
  renderItems?: (n: any, b: number) => JSX.Element
  contentData?: T[]
  customToggle?: () => void
  className?: string
}

type IContent = {
  current: {
    classList: { toggle: (n: string) => void, remove: (n: string) => void; }
  }
}

type IToggle = {
  current: {
    classList: { toggle: (n: string) => void, remove: (n: string) => void; }
  }
}

// const clickOutSideRef = (content_ref: IContent, toggle_ref: IToggle ) => {
const clickOutSideRef = (content_ref: any, toggle_ref: any ) => {
  document.addEventListener("mousedown", (e) => {
    // user click toggle
    if (toggle_ref.current && toggle_ref.current.includes(e.target)) {
      content_ref.current.classList.toggle('active')
    } else {
      // user click outside the toggle and content
      if (content_ref.current && !content_ref.current.contains(e.target)) {
        content_ref.current.classList.remove("active")
      }
    }
  })
}

const Dropdown = ({ icon, badge, customToggle, contentData, renderItems, renderFooter, className = "", children }: DropDownProps) => {

  const dropdown_toggle_el = useRef<HTMLButtonElement>(null)
  const dropdown_content_el = useRef<HTMLDivElement>(null)

  clickOutSideRef(dropdown_content_el, dropdown_toggle_el)

  return (
    <div className="dropdown">
      <button ref={dropdown_toggle_el} className="dropdown__toggle">
        <>
          {icon && <i className={icon}></i>}
          {badge && <span className="dropdown__toggle-badge">{badge}</span>}
          {customToggle && customToggle()}
          {children && (children)}
        </>
      </button>
      <div ref={dropdown_content_el} className="dropdown__content">
        {contentData && renderItems && contentData.map((item: any, index: number) => renderItems(item, index))}
        {!contentData && "NO content"}
        {renderFooter && <div className="dropdown__footer">
          {renderFooter()}
        </div>
        }
      </div>
    </div>
  )
}

export default Dropdown
