function Video({ device }) {
  const source = `/videos/${device}.mp4`

  return (
    <video 
      src={source}
      autoPlay 
      muted 
      loop 
      playsInline 
      style={{ width: '15%' }}
    />
  )
}

export default Video