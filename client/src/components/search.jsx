import React from 'react'
import Search from '../assets/searchblack.png'

export default function search() {
  return (
    <div className='pl-10'>
      <div className='w-[335px] h-[50px] bg-[#F5F5F5] flex flex-row items-center gap-2 rounded-xl pl-2'>
          <img className='w-[20px] h-[20px]' src={Search} alt='search image'/>
          <input className='w-[333px] h-[50px] outline-none p-1' placeholder='Search anything on Transactions' type='search'/>
      </div>
    </div>
  )
}
