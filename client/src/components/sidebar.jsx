    import React, { useState } from 'react'
    import Logo from '../assets/logo.png'
    import Dashboard from '../assets/Dashboard1.png'
    import Transactions from '../assets/Transactions1.png'
    import Settings from '../assets/Settings1.png'
    import Help from '../assets/Help.png'
    import Logout from '../assets/Logout.png'
    import Invoices from '../assets/Invoices1.png'
    import MyWallets from '../assets/MyWallets1.png'
    export default function sidebar() {
        const [activateButton, setActivateButton] = useState(0);
        const menuButtons =[
            {label: 'Dashboard', icon: Dashboard},
            {label:'Transactions', icon: Transactions},
            {label:'Invoices', icon: Invoices}, 
            {label:'My Wallets', icon: MyWallets},
            {label:'Settings', icon: Settings},
        ]
        return (
            <div className='flex flex-col justify-between w-[250px] h-[100vh] p-5 bg-gray-100'>
                <div className='flex flex-col gap-10 '>
                    <div>
                        <img src={Logo} alt='logo' className='w-[200px]'/>
                    </div>
                    <div className='flex flex-col gap-3 items-center'>
                        {menuButtons.map((items, index)=>(
                            <button 
                                key={index} 
                                onClick={()=>setActivateButton(index)} 
                                className={`flex flex-row items-center gap-2 font-semibold cursor-pointer w-[180px] h-[40px] rounded-md p-3 ${activateButton === index ? 'bg-[#18cb96]' : 'none'} hover:bg-[#18cb96]`}
                            >
                                <img src={items.icon} alt={`${items.label}-img`}/>
                                {items.label}
                            </button>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col gap-3 items-center'>
                    <button className='flex flex-row items-center gap-2 font-semibold cursor-pointer w-[180px] h-[40px] rounded-md p-3 hover:bg-[#18cb96]'><img src={Help} alt='Help-img'/>Help</button>
                    <button className='flex flex-row items-center gap-2 font-semibold cursor-pointer w-[180px] h-[40px] rounded-md p-3 hover:bg-[#18cb96]'><img src={Logout} alt='Logout-img'/>Logout</button>
                </div>
            </div>
        )
    }
