import React from 'react';
import { connect } from 'react-redux';

import AddProject from '../../components/AddProject';
import * as Action from '../../actions';


const mapDispatchToProps = dispatch => (
  {
    addProject: form => dispatch(Action.addProject(form)),
  }
);

export default connect(null, mapDispatchToProps)(AddProject);
