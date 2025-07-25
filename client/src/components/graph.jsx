import React from 'react'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

export default function graph() {
    const data = [
        {
            "date": "June 24",
            "Income": 4000,
            "Expense": 2400,
            "amt": 2400,
        },
        {
            "date": "June 25",
            "Income": 3000,
            "Expense": 1398,
            "amt": 2210,
        },
        {
            "date": "June 26",
            "Income": 2000,
            "Expense": 9800,
            "amt": 2290,
        },
        {
            "date": "June 27",
            "Income": 2780,
            "Expense": 3908,
            "amt": 2000,
        },
        {
            "date": "June 28",
            "Income": 1890,
            "Expense": 4800,
            "amt": 2181,
        },
        {
            "date": "June 29",
            "Income": 2390,
            "Expense": 3800,
            "amt": 2500,
        },
        {
            "date": "June 30",
            "Income": 3490,
            "Expense": 4300,
            "amt": 2100,
        }
    ]
//     const [mydata, setMyDatws] = React.useState(data);
// function handleFilter(){
    
//     setMyDatws(filteredData)
// }
    return (
        <div className='shadow-md border border-[#F5F5F5] rounded-xl ml-10 mt-5 '>
            <div className="w-full flex justify-center p-3">
                <LineChart width={800} height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis/>
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Expense" stroke="#1B212D" strokeWidth={4}/>
                    <Line type="monotone" dataKey="Income" stroke="#18cb96" strokeWidth={4}/>
                </LineChart>
            </div>
        </div>
    )
}
