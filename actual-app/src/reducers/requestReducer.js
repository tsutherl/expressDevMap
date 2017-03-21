'use strict';

import axios from 'axios'
import {routeTestResponse} from './responseReducer'

/*---------------CONSTANTS-----------------*/

const RECEIVE_TEST_REQUEST = 'RECEIVE_TEST_REQUEST'


/*---------------ACTION CREATORS-----------------*/


export const makeRequest = (requestInfo) => ({
    type: RECEIVE_TEST_REQUEST,
    requestInfo
})



/*---------------THUNK-----------------*/

//STUPID QUESTION: why can we just make an axios request from here and it properly hits example apps routes - need to just step through the logic for this


export const testRoute = (route, verb, info) => {
    let routeResponse;
    route = route.slice(1);
    if (verb === 'post' || verb === 'put') {
        return (dispatch) => {
            const headers = {headers: info.headers}
            const body = info.body
            axios[verb](route, body, headers)  
                .then(res => {
                    routeResponse = res.data;
                    dispatch(routeTestResponse(res.data));
                })
                .catch(console.error)
        }
    } else {
        return (dispatch) => {
            const headers = {headers: info.headers}
            axios[verb](route, headers)
                .then(res => {
                    routeResponse = res.data;
                    dispatch(routeTestResponse(res.data));
                })
                .catch(console.error)
        }
    }
}



/*---------------- REDUCER ---------------- */

export const requestReducer = (state={}, action) => {
	switch(action.type) {
	 	case RECEIVE_TEST_REQUEST:
         return 
    }
    return state;
}


