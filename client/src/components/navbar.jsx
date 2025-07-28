// import React from 'react'
// import {useLocation} from 'react-router-dom';
// import Search from '../assets/Search.png'
// import Notification from '../assets/Notification.png'
// import Profile from '../assets/Avathar.png'
// import Dropdown from '../assets/Dropdown.png'

// export default function navbar() {

//     const location = useLocation();

//     const getPageTitle = (path) => {
//         switch (path) {
//             case '/home':
//             return 'Dashboard';
//             case '/transactions':
//             return 'Transactions';
//             case '/invoices':
//             return 'Invoices';
//             case '/myWallets':
//             return 'My Wallets';
//             case '/settings':
//             return 'Settings';
//             case '/notFound':
//             return 'Not Found';
//             default:
//             return 'Not Found';
//         }
//     };
//     const currentPage = getPageTitle(location.pathname);
    
//     return (
//         <div className='flex flex-row items-center justify-between w-[1280px] h-[50px] p-10 '>
//             <div>
//                 <p className='font-bold text-2xl'>{currentPage}</p>
//             </div>
//             <div className='flex flex-row gap-10'>
//                 <div className='flex flex-row items-center gap-7'>
//                     <img src={Search} alt='search'/>
//                     <img src={Notification} alt='notification'/>
//                 </div>
//                 <div className='flex flex-row items-center gap-8 bg-[#FAFAFA] p-2 rounded-3xl'> 
//                     <div className='flex flex-row items-center gap-3'>
//                         <img src={Profile} alt='profile'/>
//                         <p className='font-semiblack'>Dharshan Mohan</p>
//                     </div>
//                     <img src={Dropdown} alt='dropdown'/>
//                 </div>
//             </div>
//         </div>
//     )
// }



import React from 'react'
import { useLocation } from 'react-router-dom'

import Search from '../assets/Search.png'
import Notification from '../assets/Notification.png'
import Profile from '../assets/Avathar.png'
import Dropdown from '../assets/Dropdown.png'

export default function Navbar() {
  const location = useLocation();

  // Function to convert path to page title
  const getPageTitle = (path) => {
    switch (path) {
      case '/home':
        return 'Dashboard';
      case '/transactions':
        return 'Transactions';
      case '/invoices':
        return 'Invoices';
      case '/myWallets':
        return 'My Wallets';
      case '/settings':
        return 'Settings';
      // Add your other routes here
      default:
        return 'Page';
    }
  }

  const currentPage = getPageTitle(location.pathname);

  return (
    <div className='flex flex-row items-center justify-between w-[1280px] h-[50px] p-10 '>
      <div>
        <p className='font-bold text-2xl'>{currentPage}</p>
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
