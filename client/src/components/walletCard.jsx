import React from 'react'
import More from '../assets/More.png'
import Card1 from '../assets/card1.png'
import Card3 from '../assets/card3.png'

export default function walletCard() {
  return (
    <div className='ml-7'>
        <div className='flex flex-row justify-between items-center pb-2'>
            <p className='font-semibold'>Wallet</p>
            <img src={More} alt='more icon'/>
        </div>
        <div>
            <img className='w-[354px] h-[180px]' src={Card1} alt='wallet 1'/>
            <img className='w-[324px] h-[165px] mt-[-60px] ml-[15px]' src={Card3} alt='walet 2'/>
        </div>
    </div>
  )
}
