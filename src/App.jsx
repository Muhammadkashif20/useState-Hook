// import React from 'react'
// import { useState } from 'react'
// const App = () => {
//    const [userName,setUserName]=useState('Bilal')
//    const [remember,setRemember]=useState('Bilal')

// //   console.log(userName);
  
// // function handleUbdateuserName() {
// //   setUserName('Code Aur Kashif')
// //   console.log(userName); 
//   // const [value,setValue]=useState(0)
//   // const handleIncrementValue=()=>{
//   //   setValue(value+1)
    
//   // }
//   // const handleDecrementValue=()=>{
//   //   setValue(value-1)
//   // }
//   const handleInput=(e)=>{
//     setUserName(e.target.value);
//   console.log(userName);
    
//   }
//   const handleCheckbox=(e)=>{
//     setRemember(e.target.checked)
//     console.log(!remember);
    
//   }
//   return (
//     <div>
//       {/* use with number than Create counter:- */}
//       <center>
//       {/* <h1 className='bg-red-200 p-2 mt-3 my-2 text-2xl font-semibold font-mono'>{value}</h1>
//       <button onClick={handleIncrementValue} className='w-[6rem] p-1 border-2 border-blue-700  rounded-md ms-2'>Increment</button>
//       <button onClick={handleDecrementValue} className='w-[6rem] p-1 border-2 border-blue-700  rounded-md ms-2'>Decrement</button> */}
//       </center>
//     {/*  use with userName  */}
//      {/* <div>
//        <h1>{userName}</h1>
//        <button onClick={handleUbdateuserName}>Ubdated userName</button>
//      </div> */}
//      <center>
//   <input value={userName} className='border border-black mt-4' placeholder='Enter Your Name' onChange={handleInput}/>
//   <input type="checkbox" checked={remember} onChange={handleCheckbox}/>Remember Me
//       </center>
//     </div>
//   )
// }


// export default App
// Continues:-
// Build a Finance Manager App
/* import React from 'react'
import { useState } from 'react'
const App = () => {
  const [amount,setAmount]=useState(0)
  const [income,setincome]=useState('income')
  const [submit,setSubmit]=useState([])
  const handleSubmit=()=>{
    console.log('Amount=>',amount);
    console.log('Income=>',income); 
  }
  console.log(amount);
  
  return (
    <div className='flex flex-col justify-center items-center mt-10 m-2'>
      <div className='flex gap-6 '>
    <input value={amount} onChange={(e)=>setAmount(e.target.value)} type="number" placeholder='Add Your Amount' className='border-purple-500 rounded-md border-2'/>
    <select value={income} onChange={(e)=>setincome(e.target.value) } className='border-purple-700 rounded-md border-2 px-2 m-2'>
      <option value="income">Income</option>
      <option value="expense">Expense</option>
    </select>
    <button className=' border-purple-700 rounded-md border-2 px-2 m-2' onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default App */
// Build a Finance Manager App with UI

import React from 'react';
import { useState } from 'react';
const App = () => {
  const [amount,setAmount]=useState(0)
  const [income,setIncome]=useState('income')
  const [submission,setSubmission]=useState()
  const handleSubmition=()=>{
    console.log('amount=>',amount);
    console.log('income=>',income);    
  }  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-80 transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-lg font-bold mb-4 text-center">Transaction Summary</h2>

        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="bg-green-100 p-3 rounded text-center hover:bg-green-200 transition-colors duration-300">
            <h3 className="text-sm font-semibold">Income</h3>
            <p className="text-green-600 font-bold hover:text-green-700 transition-colors duration-300">$0.00</p>
          </div>
          <div className="bg-red-100 p-3 rounded text-center hover:bg-red-200 transition-colors duration-300">
            <h3 className="text-sm font-semibold">Expense</h3>
            <p className="text-red-600 font-bold hover:text-red-700 transition-colors duration-300">$0.00</p>
          </div>
          <div className="bg-blue-100 p-3 rounded text-center hover:bg-blue-200 transition-colors duration-300">
            <h3 className="text-sm font-semibold">Balance</h3>
            <p className="text-blue-600 font-bold hover:text-blue-700 transition-colors duration-300">$0.00</p>
          </div>
        </div>

        <h2 className="text-lg font-bold mb-4 text-center">Transaction Form</h2>
        <input
          onChange={(e)=>setAmount(e.target.value)}
          type="number"
          placeholder="Enter amount"
          className="border border-gray-300 p-2 rounded mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300"
        />
        <select className="border border-gray-300 p-2 rounded mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300" onChange={(e)=>setIncome(e.target.value)}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <button className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600 transform hover:scale-105 transition-all duration-300" onClick={handleSubmition}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default App;


