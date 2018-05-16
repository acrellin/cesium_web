import { connect } from 'react-redux';

import * as Action from '../../actions';
import FeaturesTab from '../../components/FeaturesTab';


const ftMapDispatchToProps = (dispatch, ownProps) => (
  {
    computeFeatures: form => dispatch(Action.computeFeatures(form)),
    uploadFeatures: form => dispatch(
      Action.uploadFeatureset(form, ownProps.selectedProject)
    )
  }
);

export default connect(null, ftMapDispatchToProps)(FeaturesTab);
