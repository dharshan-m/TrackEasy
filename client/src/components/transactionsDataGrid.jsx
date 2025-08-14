import React from "react";
// import {useNavigate} from 'react-router-dom';
import Avathar from "../assets/Avathar.png";
// import Expand from "../assets/expand.png";

export default function sheduledTransactions() {

  // const navigate = useNavigate();

  const transactions=[
    {image:Avathar, Name_Buisness:"Iphone 13 Pro MAX", Type:"Mobile", amount:"- ₹2000", Date:"14 Apr 2022", Time:"at 8:00 PM", Invoice_ID:"MGL0124877", },
    {image:Avathar, Name_Buisness:"Netflix Subscription", Type:"Entertainment", amount:"- ₹1000", Date:"14 Apr 2022", Time:"at 8:00 PM", Invoice_ID:"MGL0124585", },
    {image:Avathar, Name_Buisness:"Figma Subscription", Type:"Software", amount:"- ₹2000", Date:"14 Apr 2022", Time:"at 8:00 PM", Invoice_ID:"MGL0124124", },
    {image:Avathar, Name_Buisness:"Bitcoin Transaction", Type:"Technology", amount:"- ₹2000", Date:"14 Apr 2022", Time:"at 8:00 PM", Invoice_ID:"MGL0128544", },
    {image:Avathar, Name_Buisness:"Sajib Rahman", Type:"Withdraw", amount:"- ₹2000", Date:"14 Apr 2022", Time:"at 8:00 PM", Invoice_ID:"MGL0122143", },
    {image:Avathar, Name_Buisness:"Instagram Ads", Type:"Entertainment", amount:"- ₹2000", Date:"14 Apr 2022", Time:"at 8:00 PM", Invoice_ID:"MGL0124877", },
    {image:Avathar, Name_Buisness:"UIHUT Subscription", Type:"Payment", amount:"- ₹2000", Date:"14 Apr 2022", Time:"at 8:00 PM", Invoice_ID:"MGL0124244", },
    {image:Avathar, Name_Buisness:"Citi Bank Ltd.", Type:"Withdraw", amount:"- ₹2000", Date:"14 Apr 2022", Time:"at 8:00 PM", Invoice_ID:"MGL0127749", },
    {image:Avathar, Name_Buisness:"Iphone 13 Pro MAX", Type:"Mobile", amount:"- ₹2000", Date:"14 Apr 2022", Time:"at 8:00 PM", Invoice_ID:"MGL0124877", },
    {image:Avathar, Name_Buisness:"Iphone 13 Pro MAX", Type:"Mobile", amount:"- ₹2000", Date:"14 Apr 2022", Time:"at 8:00 PM", Invoice_ID:"MGL0124877", }
    ]
  return (
    <div className="pt-3">
      {transactions.map((transactions, index)=>(
        <>
          <div>
            <table>
              <thead>
                <tr className="flex flex-row gap-20">
                  <th>NAME/BUSINESS</th>
                  <th>TYPE</th>
                  <th>AMOUNT</th>
                  <th>DATE</th>
                  <th>INVOICE ID</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                <tr className="flex flex-row gap-20">
                  <td className="flex flex-row items-center">
                    <img src={transactions.Avathar} alt="image"/>
                    <p>{transactions.Name_Buisness}</p>
                  </td>
                  <td className="border-[#929EAE]">{transactions.Type}</td>
                  <td className="border-[#929EAE]">{transactions.amount}</td>
                  <td className="border-[#929EAE]">{transactions.Date}</td>
                  <td className="border-[#929EAE]">{transactions.Invoice_ID}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ))}
        
    </div>
  );
}
