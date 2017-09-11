import { reduxForm } from 'redux-form';

import * as Validate from '../../validate';
import * as Action from '../../actions';
import DatasetForm from '../../components/DatasetForm';


const mapStateToProps = (state, ownProps) => (
  {
    initialValues: {
      ...(ownProps.initialValues),
      projectID: ownProps.selectedProject.id
    }
  }
);

const mapDispatchToProps = (dispatch, ownProps) => (
  {
    onSubmit: form => (
      dispatch(Action.uploadDataset(form))
    )
  }
);

const validate = Validate.createValidator({
  datasetName: [Validate.required],
  tarFile: [Validate.oneFile],
});

export default reduxForm({
  form: 'newDataset',
  fields: ['datasetName', 'headerFile', 'tarFile', 'projectID'],
  validate
}, mapStateToProps, mapDispatchToProps)(DatasetForm);
