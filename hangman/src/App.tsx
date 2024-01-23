import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
const [guessedword,setguessedword]=useState<String[]>([])
  return (
    <div
    style={{
      maxWidth:"800px",
      display:"flex",
      flexDirection:"column",
      gap:"2rem",
      margin:"0 auto",
      alignItems:"center",
    }}
    >
      <div style={{fontSize:"2rem",textAlign:"center"}}>Lose Win</div>        
    </div>
  )
}

export default App
