import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import ProjectSelector from '../../components/ProjectSelector';


const mapStateToProps = (state) => {
  const projectZero = state.projects.projectList[0];
  const projectZeroId = projectZero ? projectZero.id.toString() : '';

  const selectedProject = state.form.projectSelector;
  const selectedId = selectedProject ? selectedProject.project.value : '';

  return {
    projects: state.projects.projectList,
    initialValues: {
      project: selectedId || projectZeroId
    }
  };
};

const ProjectSelectorContainer = connect(mapStateToProps)(ProjectSelector);

export default reduxForm({ form: 'projectSelector',
                          fields: ['project'] })(ProjectSelectorContainer);
