import { Routes, Route } from 'react-router-dom'
import Home from './views/Home.jsx'
import About from './views/About.jsx'
import Homepage from './views/Homepage.jsx'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/home" element={<Home />} />
      {/* <Route path="/about" element={<About />} /> */}
    </Routes>
    </>
  )
}

export default App
