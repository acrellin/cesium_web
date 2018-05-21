import { connect } from 'react-redux';

import * as Action from '../../actions';
import PredictTab from '../../components/PredictionsTab';


const mapDispatchToProps = dispatch => (
  {
    doPrediction: form => dispatch(Action.doPrediction(form))
  }
);


export default connect(null, mapDispatchToProps)(PredictTab);
