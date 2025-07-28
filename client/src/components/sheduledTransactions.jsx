import React from "react";
import Avathar from "../assets/Avathar.png";
import Expand from "../assets/expand.png";

export default function sheduledTransactions() {

  const transactions=[
    {image:Avathar, name:"Saleh Ahmed", date:"April 28, 2022 at 11:00", amount:"- ₹2000"},
    {image:Avathar, name:"Delowar Hossain", date:"April 25, 2022 at 11:00", amount:"- ₹132"},
    {image:Avathar, name:"Moinul Hasan Nayem", date:"April 25, 2022 at 11:00", amount:"- ₹826"},
    {image:Avathar, name:"Dr. Jubed Ahmed", date:"April 16, 2022 at 11:00", amount:"- ₹435"}
    // {image:Avathar, name:"AR. Jakir Alp", date:"April 14, 2022 at 11:00", amount:"- ₹228"}
    ]
  return (
    <div className="pt-3">
      <div className="flex flex-row justify-between items-center">
        <p className="font-semibold ml-7">Scheduled Transactions</p>
        <div  className='flex flex-row items-center'>   
          <button className='text-[#18cb96] font-semibold cursor-pointer'>View All</button>
          <img className='w-[25px] h-[25px]' src={Expand} alt='dropdown'/>
        </div>
      </div>

      {transactions.map((transactions, index)=>(
        <>
          <div className="flex flex-col justify-between pb-3 pt-1">
            <div className="flex flex-row items-center justify-between pl-7 pr-3">
              <div className="flex flex-row items-center gap-3" key={index}>
                <div>
                  <img src={transactions.image} alt="avathar img" />
                </div>

                <div className="flex flex-col ">
                  <p className="font-semibold">{transactions.name}</p>
                  <p className="text-[#929EAE]">{transactions.date}</p>
                </div>
              </div>

              <div>
                <p className="font-semibold">{transactions.amount}</p>
              </div>
            </div>
          </div>
        </>
      ))}
        
    </div>
  );
}
