import { useState } from 'react'
import NewsletterGenerator from './components/NewsletterGenerator'
import GetoAI from './components/NewsletterGenerator'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home />
    </>
  )
}

export default App
