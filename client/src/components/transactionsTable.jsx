import React from 'react'
import Expand from '../assets/expand.png'

export default function transactionsTable() {
  return (
    <div className='border border-[#F5F5F5] rounded-xl ml-10 mt-5 shadow-md'>
        <div className='flex flex-row items-center justify-between p-2'>
            <p className='font-semibold text-[20px]'>Recent Transactions</p>
            <div  className='flex flex-row items-center'>   
                <button className='text-[#18cb96] font-semibold cursor-pointer'>View All</button>
                <img className='w-[25px] h-[25px]' src={Expand} alt='dropdown'/>
            </div>
        </div>
        <div className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
            <div className="overflow-y-auto max-h-[160px]">
                <table className="w-full text-left table-auto min-w-max">
                    <thead className="sticky top-0 bg-white z-10">
                        <tr>
                            <th className="p-4 border-b text-[#929EAE] font-normal">Name</th>
                            <th className="p-4 border-b text-[#929EAE] font-normal">TYPE</th>
                            <th className="p-4 border-b text-[#929EAE] font-normal">AMOUNT</th>
                            <th className="p-4 border-b text-[#929EAE] font-normal">DATE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-4 border-b border-[#929EAE]">Iphone 13 Pro MAX</td>
                            <td className="p-4 border-b text-[#929EAE]">Mobile</td>
                            <td className="p-4 border-b border-[#929EAE]">$420.84</td>
                            <td className="p-4 border-b text-[#929EAE]">14 Apr 2022</td>
                        </tr>
                        <tr>
                            <td className="p-4 border-b border-[#929EAE]">Netflix Subscription</td>
                            <td className="p-4 border-b text-[#929EAE]">Entertainment</td>
                            <td className="p-4 border-b border-[#929EAE]">$100.00</td>
                            <td className="p-4 border-b text-[#929EAE]">05 Apr 2022</td>
                        </tr>
                        <tr>
                            <td className="p-4 border-b border-[#929EAE]">Airtel Recharge</td>
                            <td className="p-4 border-b text-[#929EAE]">Mobile</td>
                            <td className="p-4 border-b border-[#929EAE]">$100.00</td>
                            <td className="p-4 border-b text-[#929EAE]">15 Apr 2022</td>
                        </tr>
                        <tr>
                            <td className="p-4">Figma Subscription</td>
                            <td className="p-4 text-[#929EAE]">Software</td>
                            <td className="p-4">$244.20</td>
                            <td className="p-4 text-[#929EAE]">02 Apr 2022</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}
