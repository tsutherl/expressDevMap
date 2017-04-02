'use strict';

import axios from 'axios'
import {routeTestResponse} from './responseReducer'

/*---------------CONSTANTS-----------------*/

const RECEIVE_TEST_REQUEST = 'RECEIVE_TEST_REQUEST'


/*---------------ACTION CREATORS-----------------*/


export const makeRequest = (requestInfo) => {
    return {
    type: RECEIVE_TEST_REQUEST,
    requestInfo
    }
}




/*---------------- REDUCER ---------------- */

export const requestReducer = (state={}, action) => {
	switch(action.type) {
	 	case RECEIVE_TEST_REQUEST:
         return action.requestInfo
    }
    return state;
}


