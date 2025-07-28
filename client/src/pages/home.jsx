import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';
import Expense from '../components/expense';
import Graph from '../components/graph';
import Transactions from '../components/transactionsTable';
import Walletcard from '../components/walletCard';
import Sheduledrtansactions from '../components/sheduledTransactions';
import React from 'react'

export default function home() {
  return (
    <div className='flex flex-row '>
      <div>
        <Sidebar/>
      </div>

      <div className='flex flex-col'>
        <div>
          <Navbar/>
        </div>

        <div className='flex flex-row '>
          <div className='flex flex-col'>
            <p><Expense/></p>
            <p><Graph/></p>
            <p><Transactions/></p>
          </div>
          <div className='flex flex-col'>
            <p><Walletcard/></p>
            <p><Sheduledrtansactions/></p>
          </div>
        </div>

      </div>

    </div>
  )
}
