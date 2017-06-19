import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { connectRoutes } from 'redux-first-router'
import * as reducers from '../configure/reducers'
import { createLogger } from 'redux-logger';

export default path => {
  const history = createHistory()
  const { reducer, middleware, enhancer } = connectRoutes(history, {
    HOME: '/',
    ABOUT: '/about',
    PICTURES: {
      path: '/pictures',
      thunk: (dispatch, getState) => {
        fetch(`https://jsonplaceholder.typicode.com/photos`)
          .then(payload => {
            return payload.json()
          })
          .then(data => {
            const chunk = data.slice(0, 6)
            const pictures = [...chunk]
            dispatch({ type: 'PICTURES_FETCHED', pictures })
          })
      }
    },
  }, {
    onAfterChange: () => {
      console.log('Redux-First-Router: onAfterChange')
    }
  })

  const rootReducer = combineReducers({ ...reducers, location: reducer })
  const middlewares = applyMiddleware(middleware, createLogger())
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  return createStore(rootReducer, composeEnhancers(enhancer, middlewares))
}
