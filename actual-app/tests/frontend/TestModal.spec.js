import React from 'react';
import {expect} from 'chai';
import TestModal from '../../src/TestModal';
import {shallow} from 'enzyme';
import {spy} from 'sinon';

describe('TestModal', () => {

    let testModal, testThisRouteSpy;
    beforeEach('Create component', () => {
        testThisRouteSpy = spy();
        testModal = shallow(<TestModal testThisRoute={testThisRouteSpy}/>);
    });

    it('should call testThisRoute function when button is clicked', () => {
        expect(testThisRouteSpy.called).to.be.false;
        testModal.find('button').simulate('click');
        expect(testThisRouteSpy.called).to.be.true;
    });

});