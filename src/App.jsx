import React from 'react'
import { useState } from 'react'
const App = () => {
  const [userName,setUserName]=useState('kashif')
  console.log(userName);
  
function handleUbdateuserName() {
  setUserName('Code Aur Kashif')
  console.log(userName);
  
}
  return (
    <div>
      <h1>{userName}</h1>
      <button onClick={handleUbdateuserName}>Ubdated userName</button>
    </div>
  )
}

export default App

