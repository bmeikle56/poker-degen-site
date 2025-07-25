import './App.css'
import { motion } from "framer-motion"
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

const privacyMarkdown = `
## Privacy Policy

We value your privacy. This Privacy Policy explains what information we collect, how we use it, and your rights.

### Information We Collect
- Personal information like your name and email address.
- Usage data such as how you use the app.

### How We Use Your Information
- To provide and improve our services.
- To communicate with you.

### Data Sharing
We do not sell your data. We may share data with trusted service providers to help operate the app.

### Your Rights
You can request access to or deletion of your personal data by contacting us at braedenmeikle@gmail.com.

### Changes to This Policy
We may update this policy occasionally. We will notify you of significant changes.

### Contact Us
For questions, email us at braedenmeikle@gmail.com.
`

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

function FeedbackForm() {
  const [text, setText] = useState('');
  const mailtoLink = `mailto:braedenmeikle@gmail.com?subject=PokerDegen Feedback&body=${encodeURIComponent(text || '')}`;
  const textareaStyle = {
    width: '30vw',
    height: '20vh',
    padding: 16,
    fontSize: 18,
    outline: 'none',
    border: '2px solid rgb(0,255,255)',
    borderRadius: 8,
    backgroundColor: 'black',
    boxShadow: '0 0 8px 2px rgba(255,255,255,0.4)',
    resize: 'none',
    fontFamily: 'sans-serif',
    cursor: 'text',
    color: 'gray',
  };

  const buttonStyle = {
    backgroundColor: 'rgb(0,255,255)',
    border: 'none',
    borderRadius: 6,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    padding: '12px 48px',
    cursor: 'pointer',
    boxShadow: '0 0 6px rgba(0,255,255,0.7)',
    userSelect: 'none',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Questions or comments for the dev!"
        spellCheck={false}
        style={textareaStyle}
      />
      <a href={mailtoLink}>
        <button style={buttonStyle}>
          Send
        </button>
      </a>
    </div>
  );
}

function Support() {
  return (
    <div style={{background: 'black', width: '100vw', height: '100vh', margin: 0, padding: 0, overflow: 'hidden'}}>
      <motion.div style={{display: 'flex', justifyContent: 'center', alignItems:'center', height: '50vh', gap: 0, flexDirection: 'column'}}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.0, duration: 2.0 }}
      >
        <div style={{display: 'flex', justifyContent: 'center', alignItems:'center', gap: 30}}>
          <Diamond/>
          <PokerDegenTitle/>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', alignItems:'center', marginTop: -30, marginLeft: 80}}>
          <PokerDegenSubtitle/>
        </div>
      </motion.div>
      <motion.div style={{display: 'flex', justifyContent: 'center', alignItems:'center', height: '50vh', width: '100vw', marginTop: -120}}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.0, duration: 2.0 }}
      >
        <FeedbackForm/>
      </motion.div>
    </div>
  )
}

function Privacy() {
  return (
    <div style={{background: 'black', width: '100vw', height: '100vh', margin: 0, padding: 0, overflow: 'hidden'}}>
      <motion.div style={{display: 'flex', justifyContent: 'center', alignItems:'center', height: '50vh', gap: 0, flexDirection: 'column'}}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.0, duration: 2.0 }}
      >
        <div style={{color: 'rgb(0,255,255)', width: '50vw', height: '30vh'}}>
            <ReactMarkdown>{privacyMarkdown}</ReactMarkdown>
        </div>
      </motion.div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/support" element={<Support/>} />
        <Route path="/privacy" element={<Privacy/>} />
      </Routes>
    </Router>
  )
}

export default App
