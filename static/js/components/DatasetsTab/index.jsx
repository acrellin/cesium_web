import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { FormComponent, Form, TextInput, FileInput, SubmitButton } from '../Form/index';
import DatasetForm from '../../containers/DatasetForm';
import DatasetTable from '../../containers/DatasetTable';
import Expand from '../Expand';


const DatasetsTab = props => (
  <div className="datasetsTab">

    <Expand label="Upload new dataset" id="newDatasetExpander">
      <DatasetForm selectedProject={props.selectedProject} />
    </Expand>

    <DatasetTable selectedProject={props.selectedProject} />

  </div>
);
DatasetsTab.propTypes = {
  selectedProject: PropTypes.object.isRequired
};

export default DatasetsTab;
