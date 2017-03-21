

// /*---------------CONSTANTS-----------------*/







// const RECEIVE_TEST_RESPONSE = 'RECEIVE_TEST_RESPONSE';



// /*---------------ACTION CREATORS-----------------*/


// export const routeTestResponse = (result) => ({
//     type: RECEIVE_TEST_RESPONSE,
//     result
// })

// export const setRouteVerb = (verb) => ({
//     type: SET_TEST_VERB, 
//     verb
// })



// /*---------------REDUCER-----------------*/

// const reducer = (state={showModal: false, activeTestNode: null, testRoute: null}, action) => {
//     const newState = Object.assign({}, state)
//     switch(action.type) {
//         case RECEIVE_ROUTES:
//             newState.routes = action.routes;
//             break
//         case RECEIVE_TEST_ROUTE:
//             newState.testRoute = action.testRoute;
//             break;
//         case SET_TEST_NODE:
//             newState.activeTestNode = action.node;
//             break;
//         case SHOW_MODAL:
//             newState.showModal = true;
//             break;
//         case HIDE_MODAL:
//             newState.showModal = false;
//             break;
//         case RECEIVE_TEST_RESPONSE:
//             newState.testResult = action.result;
//             break;
//         case SET_TEST_VERB: 
//             newState.selectedRouteVerb = action.verb;
//             break;
//         default:
//             return state;
//     }
//     return newState
// }

