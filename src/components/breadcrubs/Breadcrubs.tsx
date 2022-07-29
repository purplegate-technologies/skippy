import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrubs = () => {
  // https://heroicons.com/
  const bread: string[] = ['Dashboard', 'Manage Users', 'User Detail']
  const isLast = (index: number) => index === bread.length - 1
  return (
    <>
      <nav className="bg-grey-light rounded-md w-full">
        <ol className="list-reset flex text-sm">
          {bread.map((item, index) => {
            const disabled = isLast(index)
            return <>
              <li key={index} className="text-sm"><Link to={disabled ? '#' : `/dashboard/${index}`} className={`${disabled ? 'text-gray-600' : ' text-blue-600 hover:text-blue-700'}`}>{item}</Link></li>
              <li><span className={`${disabled && 'hidden invisible'}text-gray-500 mx-2`}>{">"}</span></li>
            </>
          })}
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

    // <div className='grid place-items-center w-screen'>
    //     <div className="px-2 py-1 bg-slate-50 rounded-lg border border-gray-300">
    //         <ul className="flex space-x-2">
    //             <li className="decoration-blue-500 hover:text-blue-500 hover:cursor-pointer">Chrome <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
    //             </li>
    //         </ul>
    //     </div>
    // </div>
