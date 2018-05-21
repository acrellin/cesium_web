import React from 'react';
import PropTypes from 'prop-types';

import Expand from '../Expand';
import PredictForm from '../../containers/PredictForm';
import PredictionsTable from '../../containers/PredictionsTable';


const PredictTab = props => (
  <div>
    <Expand label="Predict Targets" id="predictFormExpander">
      <PredictForm
        onSubmit={props.doPrediction}
        selectedProject={props.selectedProject}
      />
    </Expand>
    <br />
    <PredictionsTable selectedProject={props.selectedProject} />
  </div>
);
PredictTab.propTypes = {
  doPrediction: PropTypes.func.isRequired,
  selectedProject: PropTypes.object
};
PredictTab.defaultProps = {
  selectedProject: null
};

export default PredictTab;
