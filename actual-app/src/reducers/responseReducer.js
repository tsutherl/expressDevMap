import axios from 'axios';
import { routeTestRequestInfo } from './requestReducer';

/* ---------------CONSTANTS----------------- */

const RECEIVE_TEST_RESULT = 'RECEIVE_TEST_RESULT';
const CLEAR_RESPONSE = 'CLEAR_RESPONSE';

/* ---------------ACTION CREATORS----------------- */

export const routeTestResponse = result=>({
  type: RECEIVE_TEST_RESULT,
  result,
});
export const clearResponse = ()=>({
  type: CLEAR_RESPONSE,
});

/* ---------------- REDUCER ---------------- */

export const responseReducer = (state = null, action)=>{
  switch (action.type) {
    case RECEIVE_TEST_RESULT:
      // TODO: what exactly do we want the response to look like? an object
      // probably with more info than this
      return action.result;
    case CLEAR_RESPONSE:
      return null;
    default:
      return state;

  }
};

/* ---------------- DISPATCHERS ---------------- */

export const testRoute = (route, verb, info)=>{
  const headers = { headers: info.headers };
  const body = info.body;
  let request;
  const slicedRoute = route.slice(1);
  if (verb === 'post' || verb === 'put') {
    request = ()=>axios[verb](slicedRoute, body, headers);
  } else {
    request = ()=>axios[verb](slicedRoute, headers);
  }
  return (dispatch)=>{
    request()
    .then((res)=>{
      dispatch(routeTestResponse(res.data));
      dispatch(routeTestRequestInfo(info));
    })
    .catch(console.error);
  };
};

// store everything on the store state
