import React from 'react';
import PropTypes from 'prop-types';

import { FormComponent, Form, SelectInput, TextInput, SubmitButton } from '../Form/index';


const ProjectForm = (props) => {
  const { fields: { projectName, projectDescription },
          error, resetForm, submitting, handleSubmit } = props;

  return (
    <Form onSubmit={handleSubmit} error={error}>
      <TextInput label="Project Name" {...projectName} />
      <TextInput label="Project Description (optional)" {...projectDescription} />
      <SubmitButton
        label={props.label}
        submitting={submitting} resetForm={resetForm}
      />
    </Form>
  );
};
ProjectForm.propTypes = {
  fields: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  resetForm: PropTypes.func.isRequired
};

export default ProjectForm;
