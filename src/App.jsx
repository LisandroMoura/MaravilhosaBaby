import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>Conheça a maravilhosa Baby</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <p>
          Saiba mais sobre essa maravilhosa fofura...
        </p>
      </div>
      <p className="read-the-docs">
        Ela também gostaria de conhecer você
      </p>
    </>
  )
}

export default App
