import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addvalue = () => {
    if (count < 10) 
      setCount(count + 1)
   
  }
  
  const subtractvalue = () => {
    if (count > 0) 
      setCount(count - 1)
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>Counter Value:- {count}</h2>
      <div className="card">
        <button onClick={addvalue}>
          Add 
        </button>
        <br></br>
        <button onClick={subtractvalue}>
          Subtract
        </button>
      </div>
    </>
  )
}

export default App
