import './App.css'

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
      <div style={{display: 'flex', justifyContent: 'center', alignItems:'center', height: '100vh', gap: 30}}>
        <Diamond/>
        <PokerDegenTitle/>
      </div>
    </body>
  )
}

export default App
