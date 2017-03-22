import React from 'react';
import {expect} from 'chai';
// import TestModal from '../../src/TestModal';
import {shallow} from 'enzyme';
import {spy} from 'sinon';


//TO TEST: 
    //front-end: 
        //1) react components 
        //2) react reducers
        //3) d3? 
    //back-end: 
        //1) test that key routes are working 
        //2) test parseRoutes function

// describe('TestModal', () => {

//     let testModal, testThisRouteSpy;
//     beforeEach('Create component', () => {
//         testThisRouteSpy = spy();
//         testModal = shallow(<TestModal testThisRoute={testThisRouteSpy}/>);
//     });

//     it('should call testThisRoute function when button is clicked', () => {
//         expect(testThisRouteSpy.called).to.be.false;
//         testModal.find('button').simulate('click');
//         expect(testThisRouteSpy.called).to.be.true;
//     });

// });