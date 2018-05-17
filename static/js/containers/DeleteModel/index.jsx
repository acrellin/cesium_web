import { connect } from 'react-redux';

import Delete from '../../components/Delete';
import * as Action from '../../actions';


const deleteMapDispatchToProps = dispatch => (
  { delete: id => dispatch(Action.deleteModel(id)) }
);

export default connect(null, deleteMapDispatchToProps)(Delete);
