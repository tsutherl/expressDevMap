'use strict';


/*--------------- CONSTANT -----------------*/

const RECEIVE_ROUTES = 'RECEIVE_ROUTES';


/*---------------ACTION CREATOR-----------------*/

export const loadRoutes = routes => ({
  type: RECEIVE_ROUTES,
  routes
});

/*---------------REDUCER-----------------*/


export const routeReducer = (state, action) => {

	const newState = Object.assign({}, state)

	switch (action.type){
		case RECEIVE_ROUTES:
		newState.routes = action.routes;
            break;
	}

	return newState;
}