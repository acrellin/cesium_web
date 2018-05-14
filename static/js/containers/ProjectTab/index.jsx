import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as Action from '../../actions';
import ProjectTab from '../../components/ProjectTab';


const ProjectTabContainer = (props) => (
  <ProjectTab
    selectedProject={props.selectedProject}
    updateProject={props.updateProject}
  />
);


ProjectTabContainer.propTypes = {
  selectedProject: PropTypes.object.isRequired,
  updateProject: PropTypes.func.isRequired
};


const mapDispatchToProps = dispatch => (
  {
    updateProject: form => dispatch(Action.updateProject(form))
  }
);

export default connect(null, mapDispatchToProps)(ProjectTabContainer);
