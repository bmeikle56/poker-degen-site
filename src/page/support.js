

function Support() {
  return (
    <div style={{width: '100vw', height: '100vh', margin: 0, padding: 0, overflow: 'hidden'}}>
      <motion.div style={{display: 'flex', justifyContent: 'center', alignItems:'center', height: '50vh', gap: 0, flexDirection: 'column'}}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.0, duration: 2.0 }}
      >
        <div className="title-view" style={{display: 'flex', justifyContent: 'center', alignItems:'center'}}>
          <Diamond/>
          <PokerDegenTitle/>
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

export default Support