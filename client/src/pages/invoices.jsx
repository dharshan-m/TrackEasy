import React from 'react'
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';

export default function invoices() {
  return (
    <div className='flex flex-row'>
        <div>
            <Sidebar/>
        </div>
        <div>
            <div>
                <Navbar/>
            </div>
            <div>
                search intpu field
            </div>
            <div>
                transactions tabe
            </div>
        </div>
    </div>
  )
}
