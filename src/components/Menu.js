import React from 'react'
import { connect } from 'react-redux'
import Link from 'redux-first-router-link'
import '../styles/Menu.css'

const Menu = ({ onClick, path }) => {
    return (
        <div id="menu" className='menu'>
        <Link className={active(path, '/')} href="/">Home</Link>
        <Link className={active(path, '/about')} href="/about">About page</Link>
        <Link className={active(path, '/pictures')} href="/pictures">Picture page</Link>
        </div>
    )
}
  
const active = (currentPath, path) => {
    return currentPath === path ? 'active' : 'item'
}  

const createAction = (type, category) => {
  return {
    type,
    payload: category && { category }
  }
}

const mapDispatch = { onClick: createAction }
const mapState = ({ location }) => ({ path: location.pathname })

export default connect(mapState, mapDispatch)(Menu)
