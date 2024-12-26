import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './Components/Signup.jsx'
import Login from './Components/Login.jsx'

function App() {
  const [swap,setswap]=useState("Login")

  return (
    <>
      {swap=="Login" ?<Login setswap={setswap}swap={swap}></Login>:<Signup setswap={setswap}swap={swap}></Signup>}
      
    </>
  )
}

export default App
