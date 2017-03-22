import React from 'react';
import {expect} from 'chai';
import Tree from '../../src/Tree';
import {shallow} from 'enzyme';
import {spy} from 'sinon';


//React Components being rendered: 
    //AppContainer 
    //TreeContainer
    //ModalContainer
    //Body 
    //Headers 
    //RequestBody
    //Json
        
// describe('<Tree />', () => {

//     let TreeSpy;
//     beforeEach('Create component', () => {
//         TreeSpy = shallow(<TestModal/>);
//     });

//     it('should call testThisRoute function when button is clicked', () => {
//         expect(testThisRouteSpy.called).to.be.false;
//         testModal.find('button').simulate('click');
//         expect(testThisRouteSpy.called).to.be.true;
//     });

// });

// describe('<HomePage/>', () => {

//   let root
//   beforeEach('render the root', () =>
//     root = shallow(<HomePage products={seedProducts} />)
//   )

//   it('has a grid system', () => {
//     expect(root.find('div')).to.have.length(5)
//   })

// })

// describe("<HomePage/>'s connection", () => {

//   const state = {
//     products: {products: seedProducts}
//   }

//   let root, store, dispatch
//   beforeEach('create store and render the root', () => {
//     store = createStore(state => state, state)
//     dispatch = spy(store, 'dispatch')
//     root = shallow(<HomePageContainer store={store}/>)
//   })


//   it('gets props.product from store', () => {
//     expect(root.find(HomePage)).to.have.prop('products')
//   })
// })

