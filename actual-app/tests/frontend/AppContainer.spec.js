// import React from 'react';
// import {createStore} from 'redux';
// import {range, last} from 'lodash';

// import chai, {expect} from 'chai';
// import chaiEnzyme from 'chai-enzyme';
// chai.use(chaiEnzyme());
// import {shallow} from 'enzyme';
// import {spy} from 'sinon';
// import faker from 'faker';

// import ReactTestUtils from 'react-addons-test-utils';

// import AppContainer from '../../src/AppContainer';






// const createRandomMessages = amount => {
//     return range(0, amount).map(index => {
//         return {
//             id: index + 1,
//             from: {email: faker.internet.email()},
//             to: {email: faker.internet.email()},
//             subject: faker.lorem.sentence(),
//             body: faker.lorem.paragraph()
//         };
//     });
// };
// const testUtilities = {
//     createRandomMessages,
//     createOneRandomMessage: () => createRandomMessages(1)[0]
// };

// describe('Message', () => {

//     describe('visual content', () => {

//         let messageData, messageWrapper;
//         beforeEach('Create <Message /> wrapper', () => {
//             messageData = {
//                 id: 5,
//                 from: {email: 'dan.sohval@fullstackacademy.com'},
//                 to: {email: 'ashi@gracehopperacademy.com'},
//                 subject: 'In re: curriculum updates',
//                 body: 'We should teach React!'
//             };
//             messageWrapper = shallow(<Message fullMessage={messageData}/>);
//         });

//         it('includes "FROM" line as an h1', () => {
//             expect(messageWrapper.find('h1')).to.have.html('<h1>From: <span>dan.sohval@fullstackacademy.com</span></h1>');
//         });

//         it('includes "TO" line as h2', () => {
//             expect(messageWrapper.find('h2')).to.have.html('<h2>To: <span>ashi@gracehopperacademy.com</span></h2>');
//         });

//         it('includes "SUBJECT" line as h3', () => {
//             expect(messageWrapper.find('h3')).to.have.html('<h3>Subject: <span>In re: curriculum updates</span></h3>');
//         });

//         it('includes "BODY" as p', () => {
//             expect(messageWrapper.find('p')).to.have.html('<p>We should teach React!</p>');
//         });

//         it('is not hardcoded', () => {
//             const aDifferentMessage = {
//                 id: 6,
//                 from: {email: 'ashi@gracehopperacademy.com'},
//                 to: {email: 'dan.sohval@fullstackacademy.com'},
//                 subject: 'Re: In re: curriculum updates',
//                 body: 'Sounds awesome'
//             };
//             const differentMessageWrapper = shallow(<Message fullMessage={aDifferentMessage}/>);
//             expect(differentMessageWrapper.find('h1')).to.have.html('<h1>From: <span>ashi@gracehopperacademy.com</span></h1>');
//             expect(differentMessageWrapper.find('h2')).to.have.html('<h2>To: <span>dan.sohval@fullstackacademy.com</span></h2>');
//             expect(differentMessageWrapper.find('h3')).to.have.html('<h3>Subject: <span>Re: In re: curriculum updates</span></h3>');
//             expect(differentMessageWrapper.find('p')).to.have.html('<p>Sounds awesome</p>');
//         });

//     });

//     describe('interactivity', () => {

//         let messageData, messageWrapper, markAsReadSpy;
//         beforeEach('Create <Message />', () => {
//             messageData = testUtilities.createOneRandomMessage();
//             // http://sinonjs.org/docs/#spies
//             markAsReadSpy = spy();
//             messageWrapper = shallow(<Message fullMessage={messageData} markAsRead={markAsReadSpy}/>);
//         });

//         it('when clicked, invokes a function passed in as the markAsRead property with the message id', () => {

//             // This will trigger any onClick handlers registered to the component.
//             messageWrapper.simulate('click');

//             expect(markAsReadSpy.called).to.be.true;
//             expect(markAsReadSpy.calledWith(messageData.id)).to.be.true;

//         });

//     });

// });

// describe('Inbox', () => {

//     let randomMessages;
//     beforeEach('Create random example messages', () => {
//         randomMessages = testUtilities.createRandomMessages(10)
//     });

//     let inboxWrapper;
//     beforeEach('Create <Inbox />', () => {
//         inboxWrapper = shallow(<Inbox />);
//     });

//     it('starts with an initial state having an empty messages array', () => {
//         const currentState = inboxWrapper.state();
//         expect(currentState.messages).to.be.deep.equal([]);
//     });

//     describe('visual content', () => {

//         it('is comprised of <Message /> components based on what gets placed on the state', () => {

//             // This will set the component's local state.
//             inboxWrapper.setState({messages: randomMessages});
//             expect(inboxWrapper.find(Message)).to.have.length(10);

//             // The first message displayed in the inbox should be based off of the
//             // first element in the randomMessages array.
//             const firstMessage = inboxWrapper.find(Message).at(0);
//             expect(firstMessage.equals(<Message fullMessage={randomMessages[0]}/>)).to.be.true;

//             // This will set the component's local state.
//             inboxWrapper.setState({messages: randomMessages.slice(4)});
//             expect(inboxWrapper.find(Message)).to.have.length(6);

//         });

//     });

// });

// describe('NewMessageForm', () => {

//     let sendSpy;
//     beforeEach('Create spy function to pass in', () => {
//         sendSpy = spy();
//     });

//     let newMessageFormWrapper;
//     beforeEach('Create <NewMessageForm /> wrapper', () => {
//         newMessageFormWrapper = shallow(<NewMessageForm onSend={sendSpy}/>);
//     });

//     it('sets local state when inputs change', () => {

//         expect(newMessageFormWrapper.state()).to.be.deep.equal({
//             recipient: '',
//             subject: '',
//             body: ''
//         });

//         const recipientInput = newMessageFormWrapper.find('#recipient-field');
//         recipientInput.simulate('change', {target: {value: 'joe@fullstackacademy.com'}});
//         expect(newMessageFormWrapper.state().recipient).to.be.equal('joe@fullstackacademy.com');

//         const subjectInput = newMessageFormWrapper.find('#subject-field');
//         subjectInput.simulate('change', {target: {value: 'Hello?'}});
//         expect(newMessageFormWrapper.state().subject).to.be.equal('Hello?');

//         const bodyInput = newMessageFormWrapper.find('#body-field');
//         bodyInput.simulate('change', {target: {value: `Is it me you're looking for?`}});
//         expect(newMessageFormWrapper.state().body).to.be.equal(`Is it me you're looking for?`);

//     });

//     it('invokes passed in `onSend` function with local state when form is submitted', () => {

//         const formInfo = {
//             recipient: 'omri@gracehopperacademy.com',
//             subject: 'Hi Omri!',
//             body: 'Hello.'
//         };

//         newMessageFormWrapper.setState(formInfo);

//         // This will trigger any onSubmit handlers registered to the component.
//         newMessageFormWrapper.simulate('submit');

//         expect(sendSpy.called).to.be.true;
//         expect(sendSpy.calledWith(formInfo)).to.be.true;

//     });

// });


       
