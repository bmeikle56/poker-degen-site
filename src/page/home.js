import { motion } from 'framer-motion'

function Home() {
  return (
    <div style={{width: '100vw', height: '100vh'}}>
      <motion.div style={{display: 'flex', justifyContent: 'center', alignItems:'center', flexDirection: 'column'}}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.0, duration: 2.0 }}
      >
        
      </motion.div>
    </div>
  )
}

export default Home