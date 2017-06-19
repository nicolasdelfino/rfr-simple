import React from 'react'
import { connect } from 'react-redux'
import Link from 'redux-first-router-link'

import styles from '../styles/Menu.css'

const Menu = ({ onClick, path }) => {
    return (
        <div id="menu" className={styles}>
        <Link className={active(path, '/')} href="/">HOME</Link>
        <Link className={active(path, '/about')} href="/about">About page</Link>
        <hr />
        </div>
    )
}
  

const active = (currentPath, path) =>
  currentPath === path ? styles.active : styles.item

const createAction = (type, category) => {
  return {
    type,
    payload: category && { category }
  }
}

const mapDispatch = { onClick: createAction }
const mapState = ({ location }) => ({ path: location.pathname })

export default connect(mapState, mapDispatch)(Menu)
