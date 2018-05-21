import { reduxForm } from 'redux-form';

import * as Validate from '../../validate';
import PredictForm from '../../components/PredictForm';


const validate = Validate.createValidator({
  modelID: [Validate.required],
  datasetID: [Validate.required],
});

const mapStateToProps = (state, ownProps) => {
  const filteredDatasets = state.datasets.filter(dataset =>
    (dataset.project_id === ownProps.selectedProject.id));
  const zerothDataset = filteredDatasets[0];

  const filteredModels = state.models.filter(model =>
    (model.project_id === ownProps.selectedProject.id));
  const zerothModel = filteredModels[0];

  return {
    datasets: filteredDatasets,
    models: filteredModels,
    fields: ['modelID', 'datasetID'],
    initialValues: { modelID: zerothModel ? zerothModel.id : '',
                     datasetID: zerothDataset ? zerothDataset.id : '' }
  };
};

export default reduxForm({
  form: 'predict',
  fields: [''],
  validate
}, mapStateToProps)(PredictForm);
