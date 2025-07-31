import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './page/home'
import Support from './page/support'
import Privacy from './page/privacy'

// function PokerDegenSubtitle() {
//   return (
//     <p className='subtitle' style={{
//       color: 'rgb(0,255,255)',
//       textShadow: '0 0 6px white'
//     }}>
//       A fast poker solver
//     </p>
//   )
// }

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/support" element={<Support/>} />
        <Route path="/privacy" element={<Privacy/>} />
      </Routes>
    </Router>
  )
}

export default App
