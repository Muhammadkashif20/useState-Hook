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
import React from "react";
import { useState } from "react";
const App = () => {
  const [amount, setAmount] = useState("");
  const [income, setincome] = useState("income");
  const [submit, setSubmit] = useState([]);
  const handleSubmit = () => {
    setSubmit([...submit, { amount, income }]);
    setAmount("");
  };
  console.log(submit);
  const totalAmout = submit.reduce(
    (acc, currentVal) =>
      currentVal.income == "income" ? acc+Number(currentVal.amount) : acc,0
  );
  const totalExpense = submit.reduce(
    (acc, currentVal) =>
      currentVal.income == "expense" ? acc + Number(currentVal.amount) : acc,0
  );  
  const totalBalance = totalAmout - totalExpense;
  return (
    <div className="flex flex-col justify-center items-center mt-10 m-2">
      <div className="flex gap-5 my-10">
        <div className="p-1 border border-blue-600 rounded-md w-20 text-center">
          <h1>Income</h1>
          <h1>{totalAmout}</h1>
        </div>
        <div className="p-1  border  border-blue-600 rounded-md w-20 text-center">
          <h1>Expense</h1>
          <h1>{totalExpense}</h1>
        </div>
        <div className={`p-1  border  border-blue-600 rounded-md w-20 text-center ${totalBalance>0 ?'bg-green-50':'bg-red-50'}`}>
          <h1>Balance</h1>
          <h1>{totalBalance}</h1>
        </div>
      </div>

      <div className="flex gap-6 ">
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          placeholder="Add Your Amount"
          className="border-purple-500 rounded-md border-2"
        />
        <select
          value={income}
          onChange={(e) => setincome(e.target.value)}
          className="border-purple-700 rounded-md border-2 px-2 m-2"
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <button
          className=" border-purple-700 rounded-md border-2 px-2 m-2"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      <div>
        {submit.map((data, index) => {
          return (
            <div
              key={index}
              className="flex text-center justify-between items-center gap-10"
            >
              <h1 className="text-3xl font-bold underline">
                Sno:{index + 1} Amount: {data.amount}
              </h1>
              <h1
                className={`text-3xl font-bold underline ${
                  data.income == "income" ? "text-green-500" : "text-red-600"
                }`}
              >
                {data.income}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;

