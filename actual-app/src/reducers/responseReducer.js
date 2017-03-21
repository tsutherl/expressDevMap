'use strict';


/*---------------CONSTANTS-----------------*/

const RECEIVE_TEST_RESULT = 'RECEIVE_TEST_RESULT';



/*---------------ACTION CREATORS-----------------*/


export const routeTestResponse = (result) => ({
    type: RECEIVE_TEST_RESULT,
    result
})



/*---------------- REDUCER ---------------- */

export const responseReducer = (state={}, action) => {
	switch(action.type) {
	 	case RECEIVE_TEST_RESULT:
         //TODO: what exactly do we want the response to look like? an object probably with more info than this
            return action.result 
    }
    return state;
}


