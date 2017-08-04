import React from 'react';
import { connect } from 'react-redux';

import Delete from '../../components/Delete';
import * as Action from '../../actions';


const mapDispatchToProps = dispatch => (
  { delete: id => dispatch(Action.deleteProject(id)) }
);

export default connect(null, mapDispatchToProps)(Delete);
