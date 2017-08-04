import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';

import * as Action from '../../actions';
import ProjectForm from '../../components/ProjectForm';
import * as Validate from '../../validate';


const validate = Validate.createValidator({
  projectName: [Validate.required],
});


export default reduxForm({
  form: 'editProject',
  fields: ['projectName', 'projectDescription', 'projectId'],
  validate
})(ProjectForm);
