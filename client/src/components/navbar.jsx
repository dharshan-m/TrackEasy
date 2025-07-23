import React from 'react'
import Search from '../assets/Search.png'
import Notification from '../assets/Notification.png'
import Profile from '../assets/Avathar.png'
import Dropdown from '../assets/Dropdown.png'

export default function navbar() {
  return (
    <div className='flex flex-row items-center justify-between w-[1280px] h-[50px] p-10 '>
        <div>
            <p className='font-bold text-2xl'>Dashboard</p>
        </div>
        <div className='flex flex-row gap-10'>
            <div className='flex flex-row items-center gap-7'>
                <img src={Search} alt='search'/>
                <img src={Notification} alt='notification'/>
            </div>
            <div className='flex flex-row items-center gap-8 bg-[#FAFAFA] p-2 rounded-3xl'> 
                <div className='flex flex-row items-center gap-3'>
                    <img src={Profile} alt='profile'/>
                    <p className='font-semiblack'>Dharshan Mohan</p>
                </div>
                <img src={Dropdown} alt='dropdown'/>
            </div>
        </div>
    </div>
  )
}
