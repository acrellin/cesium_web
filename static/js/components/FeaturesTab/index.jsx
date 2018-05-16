import React from 'react';
import PropTypes from 'prop-types';

import Expand from '../Expand';
import UploadFeaturesForm from '../../containers/UploadFeaturesForm';
import FeaturizeForm from '../../containers/FeaturizeForm';
import FeaturesetsTable from '../../containers/FeaturesetsTable';


let FeaturesTab = (props) => {
  const { featurePlotURL } = props;
  return (
    <div>
      <div>
        <Expand label=" Compute New Features" id="featsetFormExpander">
          <FeaturizeForm
            onSubmit={props.computeFeatures}
            selectedProject={props.selectedProject}
          />
        </Expand>
      </div>

      <div>
        <Expand label=" Upload Pre-Computed Features" id="uploadFeatsFormExpander">
          <UploadFeaturesForm
            onSubmit={props.uploadFeatures}
            selectedProject={props.selectedProject}
          />
        </Expand>
      </div>

      <FeaturesetsTable
        selectedProject={props.selectedProject}
        featurePlotURL={featurePlotURL}
      />

    </div>
  );
};
FeaturesTab.propTypes = {
  featurePlotURL: PropTypes.string.isRequired,
  computeFeatures: PropTypes.func.isRequired,
  uploadFeatures: PropTypes.func.isRequired,
  selectedProject: PropTypes.object
};
FeaturesTab.defaultProps = {
  selectedProject: {}
};

export default FeaturesTab;
