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

export const modalReducer = (state=false, action) => {
	switch(action.type) {
	 	case SHOW_MODAL:
            return true;
          	break;
        case HIDE_MODAL:
            return false;
            break;
    }
    return state;
}


