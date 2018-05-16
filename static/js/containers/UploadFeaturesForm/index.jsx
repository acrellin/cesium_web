import { reduxForm } from 'redux-form';

import * as Validate from '../../validate';
import UploadFeaturesForm from '../../components/UploadFeaturesForm';


const mapStateToProps = (state, ownProps) => {
  const initialValues = { };
  const filteredDatasets = state.datasets.filter(dataset =>
    (dataset.project_id === ownProps.selectedProject.id));
  return {
    datasets: filteredDatasets,
    fields: ['datasetID', 'featuresetName', 'dataFile'],
    initialValues: { ...initialValues,
                     datasetID: "No associated dataset" }
  };
};

const validate = Validate.createValidator({
  featuresetName: [Validate.required],
  dataFile: [Validate.oneFile]
});

export default reduxForm(
  {
    form: 'uploadFeatures',
    fields: [''],
    validate
  }, mapStateToProps
)(UploadFeaturesForm);
