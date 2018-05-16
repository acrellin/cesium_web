import { connect } from 'react-redux';

import * as Action from '../../actions';
import Delete from '../../components/Delete';


const deleteMapDispatchToProps = dispatch => (
  { delete: id => dispatch(Action.deleteFeatureset(id)) }
);

export default connect(null, deleteMapDispatchToProps)(Delete);
