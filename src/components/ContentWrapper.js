import React from 'react'
import { connect } from 'react-redux'
import Home from '../pages/Home'
import About from '../pages/About'
import Pictures from '../pages/Pictures'
import styles from '../styles/ContentWrapper.css'

const ContentWrapper = ({ page, direction }) => {
    return(
        <div className="wrapper">{getComponent(page)}</div>
    )
}
  
const getComponent = page => {
  switch(page) {
    case 'Home':
      return <Home />
    case 'About':
      return <About />
    case 'Pictures':
      return <Pictures />
    case 'NotFound':
      return <div className={styles.notFound}>PAGE NOT FOUND - 404</div>
    default:
      return <Home />
  }
}

const mapState = ({ page, direction }) => ({ page, direction })
export default connect(mapState)(ContentWrapper)
