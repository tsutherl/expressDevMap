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
            //TODO: what do we want the response to look like?
            return 'TODO'
    }
    return state;
}


