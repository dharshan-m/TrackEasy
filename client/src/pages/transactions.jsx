import React from 'react'
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';
import Search from '../components/search';

export default function transactions() {
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
                <Search/>
            </div>
            <div>
                transactions tabe
            </div>
        </div>
    </div>
  )
}
