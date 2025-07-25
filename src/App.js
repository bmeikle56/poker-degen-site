import './App.css'
import { motion } from "framer-motion"

function PokerDegenTitle() {
  return (
    <h1 style={{
      color: 'rgb(0,255,255)',
      fontSize: '40pt',
      textShadow: '0 0 6px white'
    }}>
      PokerDegen
    </h1>
  )
}

function PokerDegenSubtitle() {
  return (
    <p style={{
      color: 'rgb(0,255,255)',
      fontSize: '18pt',
      textShadow: '0 0 6px white'
    }}>
      A fast poker solver
    </p>
  )
}

function Diamond() {
  return (
    <svg width="60" height="100" viewBox="0 0 60 100">
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="white" />
        </filter>
      </defs>
      <polygon
        points="30,0 60,50 30,100 0,50"
        fill="rgb(0,255,255)"
        filter="url(#glow)"
      />
    </svg>
  )
}

function App() {
  return (
    <body style={{background: 'black', width: '100vw', height: '100vh', margin: 0, padding: 0, overflow: 'hidden'}}>
      <motion.div style={{display: 'flex', justifyContent: 'center', alignItems:'center', height: '100vh', gap: 0, flexDirection: 'column'}}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.0, duration: 2.0 }}
      >
        <div style={{display: 'flex', justifyContent: 'center', alignItems:'center', gap: 30}}>
          <Diamond/>
          <PokerDegenTitle/>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', alignItems:'center', marginTop: -10, marginLeft: 80}}>
          <PokerDegenSubtitle/>
        </div>
      </motion.div>
    </body>
  )
}

export default App
