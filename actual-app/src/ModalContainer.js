import { connect } from 'react-redux';

import { testRoute } from './reducers/responseReducer';
import { hideModal } from './reducers/modalReducer';
import Modal from './Modal';

const mapStateToProps = ({ selected, response })=>({ selected, response });

const mapDispatchToProps = dispatch=>({
  testThisRoute: (route, verb, testingInfo)=>{
    dispatch(testRoute(route, verb, testingInfo));
  },
  hideModal: ()=>{
    dispatch(hideModal());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
