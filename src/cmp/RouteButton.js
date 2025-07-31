import { useNavigate } from 'react-router-dom'

function RouteButton({ txt, path }) {
  const navigate = useNavigate()

  return (
    <button 
    style={{border: '2px solid cyan', width: 200, height: 60, borderRadius: 8, background: 'black', color: 'cyan', fontSize: 20}}
    onClick={() => navigate(path)}
    >
      {txt}
    </button>
  )
}

export default RouteButton