import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';
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
            <p>Div1</p>
            <p>Div2</p>
            <p>Div3</p>
          </div>
          <div className='flex flex-col'>
            <p>Div1</p>
            <p>Div2</p>
          </div>
        </div>

      </div>

    </div>
  )
}
