/* ---------------CONSTANTS----------------- */

const RECEIVE_TEST_REQUEST = 'RECEIVE_TEST_REQUEST';

/* ---------------ACTION CREATORS----------------- */

export const routeTestRequestInfo = requestInfo=>({
  type: RECEIVE_TEST_REQUEST,
  requestInfo,
});

/* ---------------- REDUCER ---------------- */

export const requestReducer = (state = {}, action)=>{
  switch (action.type) {
    case RECEIVE_TEST_REQUEST:
      return action.requestInfo;
    default:
      return state;
  }
};


