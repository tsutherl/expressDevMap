
import React from 'react';
import {createStore} from 'redux';
import chai, {expect} from 'chai';

import { rootReducer } from '../../src/reducers/store';
// import actualStore from '../../react/redux/store';

//TODO other tests for the store: 
    //test middleware using 'redux-mock-store'


describe('store', () => {

        let testingStore;
        beforeEach('Create testing store from reducer', () => {
            testingStore = createStore(rootReducer);
        });

        it('has an initial state as described', () => {
            const currentStoreState = testingStore.getState();

            expect(currentStoreState.routes).to.be.equal(null);
            expect(currentStoreState.showModal).to.be.equal(false);
            expect(currentStoreState.selected).to.be.deep.equal({ activeTestNode: null, testRoute: null });
            expect(currentStoreState.request).to.be.equal(null);
            expect(currentStoreState.response).to.be.deep.equal({});
    })
})