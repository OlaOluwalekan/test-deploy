import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>Test Deploy</h2>
      <h1>{count}</h1>
      <article style={{ display: "flex", gap: "5px" }}>
        <button onClick={(e) => setCount(count - 1)} style={{ padding: "10px 30px", backgroundColor: "red" }}>-</button>
        <button onClick={(e) => setCount(count + 1)} style={{ padding: "10px 30px", backgroundColor: "green" }}>+</button>
      </article>
    </div>
  )
}

export default App
