import { NOT_FOUND } from 'redux-first-router'

// the primary reducer demonstrating Redux-First Router:
export const page = (state = 'HOME', action = {}) => {
  switch(action.type) {
    case 'HOME':
      return 'Home'
    case 'ABOUT':
      return 'About'
    case NOT_FOUND:
      return 'NotFound'
    default:
      return state
  }
}

export const actions = (state = [], action = {}) =>
  [action, ...state]
