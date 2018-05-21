import React from 'react';
import PropTypes from 'prop-types';

import { Form, SelectInput, SubmitButton } from '../Form';
import * as Validate from '../../validate';


let PredictForm = (props) => {
  const { fields: { modelID, datasetID }, handleSubmit, submitting, resetForm,
          error } = props;
  const datasets = props.datasets.map(ds => (
    { id: ds.id,
      label: ds.name }
  ));
  const models = props.models
                      .filter(model => !Validate.isEmpty(model.finished))
                      .map(model => (
                        { id: model.id,
                          label: model.name }
                      ));
  return (
    <div>
      <Form onSubmit={handleSubmit} error={error}>
        <SelectInput
          label="Select Model"
          key={`${props.selectedProject.id}modelID`}
          options={models}
          {...modelID}
        />
        <SelectInput
          label="Select Data Set"
          key={`${props.selectedProject.id}datasetID`}
          options={datasets}
          {...datasetID}
        />
        <SubmitButton
          label="Predict"
          submitting={submitting}
          resetForm={resetForm}
        />
      </Form>
    </div>
  );
};
PredictForm.propTypes = {
  fields: PropTypes.object.isRequired,
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  datasets: PropTypes.arrayOf(PropTypes.object).isRequired,
  models: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedProject: PropTypes.object.isRequired
};
PredictForm.defaultProps = {
  error: null
};

export default PredictForm;
