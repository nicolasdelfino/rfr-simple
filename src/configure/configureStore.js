import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { connectRoutes } from 'redux-first-router'
import restoreScroll from 'redux-first-router-restore-scroll'

import * as reducers from '../configure/reducers'
// import { fetchData } from '../api/api'

export default path => {
  const history = createHistory()
  const { reducer, middleware, enhancer } = connectRoutes(history, {
    HOME: '/',
    ABOUT: '/about'
  }, {
    onAfterChange: () => {
      console.log('Redux-First-Router: onAfterChange')
    }
  })

  const rootReducer = combineReducers({ ...reducers, location: reducer })
  const middlewares = applyMiddleware(middleware)
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  return createStore(rootReducer, composeEnhancers(enhancer, middlewares))
}
