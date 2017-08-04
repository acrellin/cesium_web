import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { FormComponent, Form, SelectInput, TextInput, SubmitButton } from '../Form/index';
import * as Validate from '../../validate';
import Expand from '../Expand';
import * as Action from '../../actions';
import DeleteProject from '../../containers/DeleteProject';
import EditProjectForm from '../../containers/EditProjectForm';
import colorScheme from '../colorscheme';

const cs = colorScheme;

let ProjectTab = ({ selectedProject, updateProject }) => {
  const style = {
    marginLeft: '0em',
    paddingLeft: '2em',
  };

  const newCesiumStyle = {
    marginTop: '2em',
    background: 'white',
    width: '20em',
    color: cs.darkBlue,
    padding: '1em',
    height: '100%',
    fontSize: '200%'
  };

  if (!selectedProject.id) {
    return (
      <div style={newCesiumStyle}>
        <p>Welcome to Cesium!</p>
        <p>&larr; Please create a new project.</p>
      </div>
    );
  } else {
    return (
      <div style={style}>
        <EditProjectForm
          label="Update"
          onSubmit={updateProject}
          initialValues={{ projectName: selectedProject.name,
                           projectDescription: selectedProject.description,
                           projectId: selectedProject.id }}
        />

        <DeleteProject ID={selectedProject.id} typeName="Project" />
      </div>
    );
  }
};

ProjectTab.propTypes = {
  selectedProject: PropTypes.object.isRequired,
  updateProject: PropTypes.func.isRequired
};

export default ProjectTab;
