import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { FormComponent, TextInput, CheckBoxInput, SelectInput, SubmitButton, Form } from '../Form';
import Expand from '../Expand';
import ModelParamsForm from '../ModelParamsForm';
import * as Validate from '../../validate';


const NewModelForm = (props) => {
  const { fields,
          fields: { modelName, featureset, modelType },
          error, handleSubmit } = props;

  const skModels = props.models;
  const selectModels = [];

  for (const key in skModels) {
    if ({}.hasOwnProperty.call(skModels, key)) {
      const model = skModels[key];
      selectModels.push({
        id: key,
        label: model.name
      });
    }
  }

  const featuresets = props.featuresets
                           .filter(fs => !Validate.isEmpty(fs.finished))
                           .map(fs => (
                             {
                               id: fs.id,
                               label: fs.name
                             }
                           ));

  const chosenModel = props.models[modelType.value];

  return (
    <Form onSubmit={handleSubmit} error={error}>
      <TextInput label="Model name (choose your own)" {...modelName} />

      <SelectInput
        label="Feature Set"
        key={props.selectedProject.id}
        options={featuresets}
        {...featureset}
      />

      <SelectInput
        label="Model Type"
        options={selectModels}
        {...modelType}
      />

      <Expand label="Choose Model Parameters" id="modelParameterExpander">
        {chosenModel && <ModelParamsForm model={chosenModel} {...fields} />}
      </Expand>

      <SubmitButton label="Create Model" />
    </Form>
  );
};
NewModelForm.propTypes = {
  fields: PropTypes.object.isRequired,
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  featuresets: PropTypes.arrayOf(PropTypes.object).isRequired,
  models: PropTypes.object.isRequired,
  selectedProject: PropTypes.object
};
NewModelForm.defaultProps = {
  error: null,
  selectedProject: null
};

export default NewModelForm;
