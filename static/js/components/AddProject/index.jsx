import React from 'react';
import PropTypes from 'prop-types';

import Expand from '../Expand';
import NewProjectForm from '../../containers/NewProjectForm';


const AddProject = ({ id, label, addProject, style }) => {
  const expandBoxStyle = {
    zIndex: 1000,
    position: 'relative',
    width: 500,
    WebkitBoxShadow: '0 0 5px black',
    MozBoxShadow: '0 0 5px black',
    boxShadow: '0 0 5px black',
    color: 'black'
  };
  return (
    <Expand
      id={id}
      label={label || "Add Project"}
      expandBoxStyle={expandBoxStyle} style={style}
    >
      <NewProjectForm label="Create Project" onSubmit={addProject} />
    </Expand>
  );
};

AddProject.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  addProject: PropTypes.func.isRequired,
  style: PropTypes.object
};


export default AddProject;
