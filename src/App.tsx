import { useState } from 'react'
import './App.css'
import { Button } from 'primereact/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Button 
            label={`Count: ${count}`}
            onClick={() => setCount(count + 1)}
            className="w-full"
            raised
          />
  )
}

export default App
