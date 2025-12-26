import React from 'react'
import { FaDownload } from 'react-icons/fa6'

const Header = () => {
  return (
    <section className='w-full h-16 bg-red-400 flex justify-between items-center'>
      <h2>Reports</h2>
     <div className='flex justify-between items-center gap-2'>
      <span>
        <FaDownload />
      </span>
      <p>download</p>
     </div>
    </section>
  )
}

export default Header