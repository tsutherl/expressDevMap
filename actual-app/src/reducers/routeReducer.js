'use strict';


/*--------------- CONSTANT -----------------*/

const RECEIVE_ROUTES = 'RECEIVE_ROUTES';


/*---------------ACTION CREATOR-----------------*/

export const loadRoutes = routes => ({
  type: RECEIVE_ROUTES,
  routes
});

/*---------------REDUCER-----------------*/


export const routeReducer = (state = null, action) => {

	switch (action.type){
		case RECEIVE_ROUTES:
		return action.routes;
            
	}

	return state;
}