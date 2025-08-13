import { motion } from 'framer-motion'
import Diamond from '../cmp/Diamond'
import PokerDegenTitle from '../cmp/Title'
import RouteButton from '../cmp/RouteButton'

function Home() {
  return (
    <motion.div style={{display: 'flex', justifyContent: 'center', alignItems:'center', flexDirection: 'column', width: '100vw', height: '100vh'}}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.6, duration: 2.0 }}
    >
      <div className='title-view' style={{display: 'flex', justifyContent: 'center', alignItems:'center'}}>
        <Diamond/>
        <PokerDegenTitle/>
      </div>
      <RouteButton txt={'Support'} path={'/support'}/>
      <div style={{height: 20}}/>
      <RouteButton txt={'Privacy'} path={'/privacy'}/>
    </motion.div>
  )
}

export default Home