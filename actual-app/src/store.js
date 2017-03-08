import {createStore, applyMiddleware} from 'redux'

import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

/*---------------CONSTANTS-----------------*/

const RECEIVE_ROUTES = 'RECEIVE_ROUTES';

/*---------------ACTION CREATORS-----------------*/


export const loadRoutes = routes => ({
  type: RECEIVE_ROUTES,
  routes
});

/*---------------ACTION CREATORS-----------------*/




/*---------------REDUCER-----------------*/


export const reducer = (state={}, action) => {
    const newState = Object.assign({}, state)
    switch(action.type) {
        case RECEIVE_ROUTES:
            newState.routes = action.routes
            break
        default:
            return state
    }
    return newState
}

export default createStore(
    reducer,
    applyMiddleware(
        thunkMiddleware,
        createLogger({collapsed: true})
    )
)



 

