import { modalReducer } from '../../src/reducers/modalReducer';
import { routeReducer } from '../../src/reducers/routeReducer';
import { selectedReducer } from '../../src/reducers/selectedReducer';
import { requestReducer } from '../../src/reducers/requestReducer'
import { responseReducer } from '../../src/reducers/responseReducer'
import { expect } from 'chai';


//TODO once redux flow is complete: 

// describe('responseReducer', () => {
//     describe('RECEIVE_TEXT_RESULT', () => {
//         it('should place the route test response on state', () => {
//             const initialResponseInfo = null;
//             const newResponseInfo = 
//         })
//     })
// })

describe('requestReducer', () => {
    describe('RECEIVE_TEST_REQUEST', () => {
        it('should put the test request info on state', () => {
            const initialRequestInfo = null;
            const newRequestInfo = '/api/birds/chickens/';
            const action = {
                type: 'RECEIVE_TEST_REQUEST', 
                requestInfo: newRequestInfo
            }
            const nextState = requestReducer(initialRequestInfo, action);

            expect(nextState).to.deep.equal('/api/birds/chickens/');
        })
    })
})


describe('modalReducer', () => {
	describe('SHOW_MODAL', () => {
		it('should toggle showModal to true', () => {
			const showModal = false;
			const action = {
				type: 'SHOW_MODAL'
			};
			const nextState = modalReducer(showModal, action);

			expect(nextState).to.deep.equal(true);
		});
    
    describe('HIDE_MODAL', () => {
        it('should toggle showModal to false', () => {
            const showModal = true;
            const action = {
                type: 'HIDE_MODAL'
            };
            const nextState = modalReducer(showModal, action);
            
            expect(nextState).to.deep.equal(false);
        })
    })
});

describe('routeReducer', () => {
    describe('RECEIVE_ROUTES', () => {
        it('should put routes on state', () => {
            const initialRoutes = null;
            const newRoutes = {
                name: "/",
                children: [{ name: "/",verb: "get"}]
            }

            const action = {
                type: 'RECEIVE_ROUTES', 
                routes: newRoutes
            };
            const nextState = routeReducer(initialRoutes, action)

            expect(nextState).to.deep.equal({
                name: "/",
                children: [{ name: "/",verb: "get"}]
            })
        })
    })
})

});

describe('selectedReducer', () => {

    let initialState;
    beforeEach('Create initialState', () => {
            initialState = {
                activeTestNode: null, 
                testRoute: null
            };
    });

    describe('SET_TEST_NODE', () => {
        it('should put the active node on state', () => {
            const newNode = {
                data: {
                    name: '/', 
                    verb: "get"
                }, 
                height: 0, 
                depth: 1
            }
            const action = {
                type: 'SET_TEST_NODE', 
                node: newNode
            }

            const nextState = selectedReducer(initialState, action)

            expect(nextState.activeTestNode).to.deep.equal({
                data: {
                    name: '/', 
                    verb: "get"
                }, 
                height: 0, 
                depth: 1
            })
        })
    })

    describe('RECEIVE_TEST_ROUTE', () => {
        it('should put the test route on state', () => {
            const newTestRoute = '/puppies';

            const action = {
                type: 'RECEIVE_TEST_ROUTE', 
                testRoute: newTestRoute
            }

            const nextState = selectedReducer(initialState, action)

            expect(nextState.testRoute).to.deep.equal('/puppies')
        })
    })

    describe('SET_ROUTE_VERB', () => {
        it('should put the correct route verb on state', () => {
            const newVerb = "post";

            const action = {
                type: 'SET_ROUTE_VERB', 
                verb: newVerb
            }

            const nextState = selectedReducer(initialState, action);

            expect(nextState.selectedRouteVerb).to.deep.equal('post');
        })
    })
})




// describe('reducing on MESSAGES_LOADING', () => {

//             it('affects state by setting messagesLoading to true and messages to empty array', () => {

//                 testingStore.dispatch({
//                     type: 'MESSAGES_LOADING'
//                 });

//                 const newState = testingStore.getState();

//                 expect(newState.messagesLoading).to.be.true;
//                 expect(newState.messages).to.be.deep.equal([]);

//             });

//             it('creates a NEW state object on any dispatched action', () => {

//                 const currentStoreState = testingStore.getState();

//                 testingStore.dispatch({
//                     type: 'MESSAGES_LOADING'
//                 });

//                 const subsequentStoreState = testingStore.getState();

//                 expect(currentStoreState).to.not.be.equal(subsequentStoreState);

//             });

//         });




///-----------testing array immutability: 


// describe('reducing on NEW_MESSAGE', () => {

//             let existingRandomMessages;
//             beforeEach(() => {
//                 existingRandomMessages = testUtilities.createRandomMessages(5);
//                 testingStore = createStore(
//                     rootReducer,
//                     {messagesLoading: false, messages: existingRandomMessages}
//                 );
//             });

//             it('affects the state by appends dispatched message to state messages', () => {

//                 const dispatchedMessage = testUtilities.createOneRandomMessage();

//                 testingStore.dispatch({
//                     type: 'NEW_MESSAGE',
//                     message: dispatchedMessage
//                 });

//                 const newState = testingStore.getState();
//                 const lastMessageOnState = last(newState.messages);

//                 expect(newState.messages).to.have.length(6);
//                 expect(lastMessageOnState).to.be.deep.equal(dispatchedMessage);

//             });

//             it('sets messages to different array from previous state', () => {

//                 const originalState = testingStore.getState();
//                 const dispatchedMessage = testUtilities.createOneRandomMessage();

//                 testingStore.dispatch({
//                     type: 'NEW_MESSAGE',
//                     message: dispatchedMessage
//                 });

//                 const newState = testingStore.getState();

//                 expect(newState.messages).to.not.be.equal(originalState.messages);
//                 expect(originalState.messages).to.have.length(5);

//             });