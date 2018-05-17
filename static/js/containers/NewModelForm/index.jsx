import { reduxForm } from 'redux-form';

import NewModelForm from '../../components/NewModelForm';
import * as Action from '../../actions';
import * as Validate from '../../validate';
import { $try } from '../../utils';


const mapStateToProps = function (state, ownProps) {
  const formState = state.form.newModel;
  const currentModelType = formState ? formState.modelType : null;
  const currentModelId = $try(() => formState.modelType.value) || 0;
  const currentModel = state.sklearnModels[currentModelId];
  const modelFields = currentModel.params.map(param => param.name);

  let fields = ['modelName', 'project', 'featureset', 'modelType'];
  fields = fields.concat(modelFields);

  const paramDefaults = {};
  currentModel.params.map((param) => {
    paramDefaults[param.name] = (param.default === null) ? "None" : param.default;
  });

  const filteredFeaturesets = state.featuresets.filter(featureset =>
    (featureset.project_id === ownProps.selectedProject.id));
  const firstFeatureset = filteredFeaturesets[0];
  const firstFeaturesetID = firstFeatureset ? firstFeatureset.id : "";

  return {
    models: state.sklearnModels,
    projects: state.projects,
    featuresets: filteredFeaturesets,
    fields,
    initialValues: {
      modelType: currentModelId,
      project: ownProps.selectedProject.id,
      featureset: firstFeaturesetID,
      ...paramDefaults
    }
  };
};

const mapDispatchToProps = dispatch => (
  {
    onSubmit: form => dispatch(Action.createModel(form))
  }
);

const validate = Validate.createValidator({
  modelName: [Validate.required],
  featureset: [Validate.required]
});

export default reduxForm({
  form: 'newModel',
  fields: [],
  validate
}, mapStateToProps, mapDispatchToProps)(NewModelForm);
