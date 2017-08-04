import React from 'react';
import { reduxForm } from 'redux-form';

import ProjectForm from '../../components/ProjectForm';
import * as Validate from '../../validate';


const validate = Validate.createValidator({
  projectName: [Validate.required],
});

export default reduxForm({
  form: 'newProject',
  fields: ['projectName', 'projectDescription'],
  validate
})(ProjectForm);
