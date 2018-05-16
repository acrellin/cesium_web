import { reduxForm } from 'redux-form';

import FeaturizeForm from '../../components/FeaturizeForm';
import * as Validate from '../../validate';


const mapStateToProps = (state, ownProps) => {
  const featuresList = state.features.featsWithCheckedTags;

  const initialValues = { };
  featuresList.map((f, idx) => { initialValues[f] = true; return null; });

  const filteredDatasets = state.datasets.filter(dataset =>
    (dataset.project_id === ownProps.selectedProject.id));
  const zerothDataset = filteredDatasets[0];

  return {
    featuresByCategory: state.features.features_by_category,
    tagList: state.features.tagList,
    featuresList,
    featureDescriptions: state.features.descriptions,
    datasets: filteredDatasets,
    fields: featuresList.concat(
      ['datasetID', 'featuresetName', 'customFeatsCode']
    ),
    initialValues: { ...initialValues,
                     datasetID: zerothDataset ? zerothDataset.id.toString() : "",
                     customFeatsCode: "" }
  };
};

const validate = Validate.createValidator({
  datasetID: [Validate.required],
  featuresetName: [Validate.required]
});

export default reduxForm({
  form: 'featurize',
  fields: [''],
  validate
}, mapStateToProps)(FeaturizeForm);
