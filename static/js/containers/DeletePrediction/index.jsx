import { connect } from 'react-redux';

import * as Action from '../../actions';
import Delete from '../../components/Delete';


const dpMapDispatchToProps = dispatch => (
  { delete: id => dispatch(Action.deletePrediction(id)) }
);

export default connect(null, dpMapDispatchToProps)(Delete);
