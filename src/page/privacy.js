import { motion } from 'framer-motion'

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

function Privacy() {
  return (
    <div style={{width: '100vw', height: '100vh'}}>
      <motion.div style={{display: 'flex', justifyContent: 'center', alignItems:'center', flexDirection: 'column'}}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.0, duration: 2.0 }}
      >
        <div className='privacy-txt'>
          <ReactMarkdown>{privacyMarkdown}</ReactMarkdown>
        </div>
      </motion.div>
    </div>
  )
}

export default Privacy