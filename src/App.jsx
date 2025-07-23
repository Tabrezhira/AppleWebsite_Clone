import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='bg-black'>
        
        <Navbar/>
        <Hero/>
        <Highlights/>
      </main>
    </>
  )
}

export default App
