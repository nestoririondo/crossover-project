import { Routes, Route } from 'react-router-dom'
import Home from './views/Home.jsx'
import Recipes from './views/Recipes.jsx'
import Homepage from './views/Homepage.jsx'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
    </Routes>
    </>
  )
}

export default App
