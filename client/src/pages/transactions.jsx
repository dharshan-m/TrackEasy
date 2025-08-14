import React from 'react'
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';
import Search from '../components/search';
import TransactionsDataGrid from '../components/transactionsDataGrid';

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
                <TransactionsDataGrid/>
            </div>
        </div>
    </div>
  )
}
