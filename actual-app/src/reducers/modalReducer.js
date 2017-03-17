'use strict';


/*---------------CONSTANTS-----------------*/

const SHOW_MODAL = 'SHOW_MODAL';

const HIDE_MODAL = 'HIDE_MODAL';


/*---------------ACTION CREATORS-----------------*/


export const showModal = () => ({
    type: SHOW_MODAL
})

export const hideModal = () => ({
    type: HIDE_MODAL
})



/*---------------- REDUCER ---------------- */

export const modalReducer = (state={showModal: false}, action) => {

	const newState = Object.assign({}, state);

	switch(action.type) {
	 	case SHOW_MODAL:
            newState.showModal = true;
            break;
        case HIDE_MODAL:
            newState.showModal = false;
            break;
    }

    return newState;
}


