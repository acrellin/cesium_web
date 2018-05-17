import React from 'react';
import PropTypes from 'prop-types';

import Expand from '../Expand';
import ModelsTable from '../../containers/ModelsTable';
import NewModelForm from '../../containers/NewModelForm';


const ModelsTab = props => (
  <div>
    <Expand label="Create New Model" id="newModelExpander">
      <NewModelForm selectedProject={props.selectedProject} />
    </Expand>

    <ModelsTable selectedProject={props.selectedProject} />
  </div>
);
ModelsTab.propTypes = {
  selectedProject: PropTypes.object
};
ModelsTab.defaultProps = {
  selectedProject: null
};

export default ModelsTab;
