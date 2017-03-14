import {createStore, applyMiddleware} from 'redux'

import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

/*---------------CONSTANTS-----------------*/

const RECEIVE_ROUTES = 'RECEIVE_ROUTES';

const RECEIVE_TEST_ROUTE = 'RECEIVE_TEST_ROUTE';

const SHOW_MODAL = 'SHOW_MODAL';

const SET_TEST_NODE = 'SET_TEST_NODE';

/*---------------ACTION CREATORS-----------------*/


export const loadRoutes = routes => ({
  type: RECEIVE_ROUTES,
  routes
});

export const setTestRoute = testRoute => ({
    type: RECEIVE_TEST_ROUTE,
    testRoute
})

export const showModal = () => ({
    type: SHOW_MODAL
})

export const setTestNode = (node) =>({
    type: SET_TEST_NODE,
    node
})
/*---------------ASYNC ACTION CREATORS-----------------*/

export const fakeRouteTest = (route) => {
    console.log("this is a fake route test!  It doesn't test the route yet. ");
    console.log("eventually, I will test this route: ", route);
}


/*---------------REDUCER-----------------*/


export const reducer = (state={showModal: false, activeTestNode: null}, action) => {
    const newState = Object.assign({}, state)
    switch(action.type) {
        case RECEIVE_ROUTES:
            newState.routes = action.routes;
            break
        case RECEIVE_TEST_ROUTE:
            newState.testRoute = action.testRoute;
            break;
        case SET_TEST_NODE:
            newState.activeTestNode = action.node;
            break;
        case SHOW_MODAL:
            newState.showModal = true;
            break;
        default:
            return state;
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



 

