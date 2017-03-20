import {createStore, applyMiddleware} from 'redux'

import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import axios from 'axios';

/*---------------CONSTANTS-----------------*/

const RECEIVE_ROUTES = 'RECEIVE_ROUTES';

const RECEIVE_TEST_ROUTE = 'RECEIVE_TEST_ROUTE';

const SHOW_MODAL = 'SHOW_MODAL';

const HIDE_MODAL = 'HIDE_MODAL';

const SET_TEST_NODE = 'SET_TEST_NODE';

const RECEIVE_TEST_RESULT = 'RECEIVE_TEST_RESULT';

const SET_ROUTE_VERB = 'RECEIVE_TEST_VERB';

const 

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

export const hideModal = () => ({
    type: HIDE_MODAL
})

export const setTestNode = (node) =>({
    type: SET_TEST_NODE,
    node
})

export const routeTestResult = (result) => ({
    type: RECEIVE_TEST_RESULT,
    result
})

export const setRouteVerb = (verb) => ({
    type: SET_ROUTE_VERB, 
    verb
})
/*---------------ASYNC ACTION CREATORS-----------------*/

export const fakeRouteTest = (route, verb) => {
    let routeResponse;
    route = route.slice(1);

    return (dispatch) => {axios[verb](route)
            .then(res => {
                routeResponse = res.data;
                dispatch(routeTestResult(res.data));
            })
            .catch(console.error)
    }
}



/*---------------REDUCER-----------------*/

const reducer = (state={showModal: false, activeTestNode: null, testRoute: null}, action) => {
    console.log("ACTION", action)
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
        case HIDE_MODAL:
            newState.showModal = false;
            break;
        case RECEIVE_TEST_RESULT:
            newState.testResult = action.result;
            break;
        case SET_ROUTE_VERB: 
            newState.selectedRouteVerb = action.verb;
            break;
        default:
            return state;
    }
    return newState
}

const store = createStore(
    reducer,
    applyMiddleware(
        thunkMiddleware,
        createLogger({collapsed: true})
    )
)

export default store;

 


// const testRoute = (route, verb) => {
//     verb = 'put';
//     // if(verb === 'put'){
//         console.log('IN TEST ROUTE')
//         console.log('axios?', axios[verb]);
//         axios[verb]('/backend-tree/routes')
//             .then(res => console.log(res.data))
//             .catch(console.error)
//     // }
// }