import { connect } from "react-redux";

import * as Action from '../../actions';
import Delete from '../../components/Delete';


const mapDispatchToProps = dispatch => (
  { delete: id => dispatch(Action.deleteDataset(id)) }
);

export default connect(null, mapDispatchToProps)(Delete);
