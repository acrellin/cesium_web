import { connect } from 'react-redux';

import PredictionsTable from '../../components/PredictionsTable';


const mapStateToProps = (state, ownProps) => {
  const filteredPredictions = state.predictions.filter(pred =>
    (pred.project_id === ownProps.selectedProject.id));
  return {
    predictions: filteredPredictions
  };
};

export default connect(mapStateToProps)(PredictionsTable);
