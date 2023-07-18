import React from 'react'

export default function Sidebar(props) {
  return (
    <div className="bg-indigo-700">
      <div className="avatar-wrapper mt-16 mb-24 flex justify-center">
        <div className='avatar w-10 md:w-24'>
      <img src="" alt="avatar" className='bg-orange-300 rounded-[50%] mb-2' />
      <h1 className="hidden md:block text-center text-white font-semibold"> Abhishek </h1>
    </div>
      </div>
      <div className="navigation-wrapper flex justify-center">
         <div className='navigation'>
      <nav className=''>
        <ul>
          <li className="p-4 px-8 md:px-16">
            <button onClick={() => props.setPage(0)} className="link flex items-center gap-4">
              <span className='hidden md:block text-gray-50 font-semibold text-xl'>APOD</span>
            </button>
          </li>
          <li className="p-4 px-8   md:px-16">
            <button onClick={() => props.setPage(1)} className="link flex items-center gap-4">
              <span className='hidden md:block text-gray-300 font-semibold text-xl'>EPIC</span>
            </button>
          </li>
          <li className="p-4 px-8 md:px-16">
            <button onClick={() => props.setPage(2)} className="link flex items-center gap-4">
              <span className='hidden md:block text-gray-300 font-semibold text-xl'>IMAGE</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
      </div>
    </div>
  )
}
