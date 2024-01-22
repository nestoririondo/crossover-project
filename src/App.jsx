import { Routes, Route } from 'react-router-dom'
import Home from './views/Home.jsx'
import About from './views/About.jsx'

function App() {

  return (
    <>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </>
  )
}

export default App
