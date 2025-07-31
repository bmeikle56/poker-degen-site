

function FeedbackForm() {
  const [text, setText] = useState('')
  const mailtoLink = `mailto:braedenmeikle@gmail.com?subject=PokerDegen Feedback&body=${encodeURIComponent(text || '')}`
  const textareaStyle = {
    width: '58vw',
    height: '20vh',
    maxWidth: '400px',
    maxHeight: '150px',
    padding: 16,
    outline: 'none',
    border: '2px solid rgb(0,255,255)',
    borderRadius: 8,
    backgroundColor: 'black',
    boxShadow: '0 0 8px 2px rgba(255,255,255,0.4)',
    resize: 'none',
    fontFamily: 'sans-serif',
    cursor: 'text',
    color: 'gray',
  }

  const buttonStyle = {
    backgroundColor: 'rgb(0,255,255)',
    border: 'none',
    borderRadius: 6,
    color: 'black',
    fontWeight: 'bold',
    padding: '12px 48px',
    cursor: 'pointer',
    boxShadow: '0 0 6px rgba(0,255,255,0.7)',
    userSelect: 'none',
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
      <textarea
        className='feedback-box'
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Questions or comments for the dev!"
        spellCheck={false}
        style={textareaStyle}
      />
      <a href={mailtoLink}>
        <button className='send-btn' style={buttonStyle}>
          Send
        </button>
      </a>
    </div>
  )
}

export default FeedbackForm