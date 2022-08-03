import React from 'react'
import { Link } from 'react-router-dom'
import { BreadcrumbsProps, BreadcrumsbItemsProps } from '../../pages/Userdetails/UserDetails'
// interface BreadcrumsbProps {
//   url?: string
//   name?: string
// }
// interface BreadcrumsbItemsProps {
//   breadcrumbsItems: Array<BreadcrumsbProps>
// }
// const bread: BreadcrumsbProps[] = [
//   {
//     name: 'Dashboard',
//     url: ''
//   },
//   {
//     name: 'Manage Users',
//     url: "manage-users"
//   },
//   {
//     name: 'User Detail',
//     url: "user-detail"
//   }
// ]

const BreadcrumbItems = ({bread}: any) => {
  const isLast = (index: number) => index === bread.length - 1
  return (
    <>
      {bread.map((item: BreadcrumbsProps, index: number) => {
        const disabled = isLast(index)
        const { name, url } = item
        return (
          <li key={index} className="text-sm">
            <Link to={disabled ? '#' : `/${url}`} className={`${disabled ? 'text-gray-600' : ' text-blue-600 hover:text-blue-700'}`}>{name}</Link>
            <li className='inline'><span className={`${disabled && 'hidden invisible'}text-gray-500 mx-2`}>{">"}</span></li>
          </li>
        )
      })}
    </>
  )
}

const Breadcrubs = ({ bread }: BreadcrumsbItemsProps) => {
  // https://heroicons.com/

  return (
    <>
      <nav className="bg-grey-light rounded-md w-full">
        <ol className="list-reset flex text-sm">
          <BreadcrumbItems {...{bread}} />
        </ol>
      </nav>

      {/* <nav className="bg-grey-light rounded-md w-full">
        <ol className="list-reset flex text-sm">
          <li><Link to="#" className="text-blue-600 hover:text-blue-700">Home</Link></li>
          <li><span className="text-gray-500 mx-2">{">"}</span></li>
          <li><Link to="#" className="text-blue-600 hover:text-blue-700">Library</Link></li>
          <li><span className="text-gray-500 mx-2">{">"}</span></li>
          <li className="text-gray-500">Data</li>
        </ol>
      </nav> */}
    </>
  )
}

export default Breadcrubs

