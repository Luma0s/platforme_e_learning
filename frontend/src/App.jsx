import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <RouterProvider  router={router} />
    </>
  )
}

export default App
