import React from 'react'

const Breadcrubs = () => {
    // https://heroicons.com/
  return (
    <div className='grid place-items-center w-screen'>
        <div className="px-2 py-1 bg-slate-50 rounded-lg border border-gray-300">
            <ul className="flex space-x-2">
                <li className="decoration-blue-500 hover:text-blue-500 hover:cursor-pointer">Chrome <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Breadcrubs