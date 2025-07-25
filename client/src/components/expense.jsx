import React from "react";
import Wallet from "../assets/wallet1.png";
import Walletadd from "../assets/walletadd1.png";

export default function expense() {
    const expenses = [
        { icon: Wallet, label: "Total Ballence", amount: "₹ 25000" },
        { icon: Wallet, label: "Total Spending", amount: "₹ 5000" },
        { icon: Walletadd, label: "Total Saved", amount: "₹ 20000" },
    ];

    return (
        <div className="flex flex-row items-center justify-center gap-10 pl-10">
            {expenses.map((expense, index) => (
                <div
                    key={index}
                    className={`flex flex-row items-center justify-center gap-[25px] w-[245px] h-[80px] rounded-[10px] 
                    ${index === 0 ? "bg-black text-white" : "bg-[#F8F8F8]"}`}
                >
                    <div
                        className={`w-[50px] h-[50px] flex items-center justify-center rounded-4xl 
                        ${index === 0 ? "bg-[#18cb96]" : "bg-[#EBE8E8]"}`}
                    >
                        <img className="w-[30px]" src={expense.icon} alt={expense.label} />
                    </div>
                    <div
                        className={`flex flex-col gap-1 ${
                        index === 0 ? "text-white" : "text-black"
                        }`}
                    >
                        <p
                        className={`${index === 0 ? "text-[#E5E5E5]" : "text-[#929EAE]"}`}
                        >
                        {expense.label}
                        </p>
                        <p className="font-bold text-[24px]">{expense.amount}</p>
                </div>
            </div>
            ))}
        </div>
    );
}
