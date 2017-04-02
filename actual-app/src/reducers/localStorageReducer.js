'use strict';

/*---------------CONSTANTS-----------------*/

const RECEIVE_PAST_REQUESTS = 'RECEIVE_PAST_REQUESTS';

/*---------------ACTION CREATORS-----------------*/

export const storeRequestInfo = testRoute => ({
    type: RECEIVE_TEST_ROUTE,
    testRoute
})

/*---------------REDUCER-----------------*/

export const LocalStorageRequests = (state=[], action) => {
	switch(action.type) {
	 	case RECEIVE_PAST_REQUESTS:
        action.data
    }
    return state;
}

/*---------------LOCAL STORAGE-----------------*/

export const getLocalStorage = () => {
  try {
    const fromLocalStorage = localStorage.getItem('requests')
    if (fromLocalStorage === null) return undefined
    return JSON.parse(fromLocalStorage)
  } catch (err) {
    return undefined
  }
}

export const setLocalStorage = (requestInfo) => {
  try {
  console.log('our local storage', getLocalStorage())
  const past10Requests = getLocalStorage().concat(requestInfo)
  const toLocalStorage = JSON.stringify.setItem(past10Requests)
  localStorage.setItem('requests', toLocalStorage)
  } catch (err) {
    // probably want to log something eventually
  }
}
