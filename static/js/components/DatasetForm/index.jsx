import React from 'react';
import PropTypes from 'prop-types';

import { Form, TextInput, FileInput, SubmitButton } from '../Form';
import CesiumTooltip from '../Tooltip';


const DatasetForm = (props) => {
  const { fields: { datasetName, headerFile, tarFile },
          error, handleSubmit, submitting } = props;

  const description = {
    fontStyle: 'italic',
    paddingBottom: '1em'
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} error={error}>
        <TextInput label="Dataset Name" {...datasetName} />
        <FileInput
          label="Header File"
          {...headerFile}
          data-tip
          data-for="headerfileTooltip"
        />

        <div style={description}>
          {'Format: comma-separated with columns "filename" (of a time series from the uploaded archive), "label" (class label or numerical value), and any metafeatures (numerical).'}
        </div>

        <FileInput
          label="Data Tarball"
          {...tarFile}
          data-tip
          data-for="tarfileTooltip"
        />
        <div style={description}>
          {'Format: zipfile or tarfile containing time series files, each of which is comma-separated with columns "time", "value", "error" (optional).'}
        </div>

        <SubmitButton label="Upload Dataset" disabled={submitting} />
      </Form>

      <CesiumTooltip
        id="headerfileTooltip"
        text={["filename,label", <br />, "ts1.dat,class_A", <br />, "..."]}
      />
      <CesiumTooltip
        id="tarfileTooltip"
        text={[
          "Each file in tarball should be formatted as follows",
          <br />, "(column titles are optional)", <br />, <br />,
          "time,value,error", <br />,
          "125912.23,12.31604,0.279105", <br />,
          "..."]}
      />

    </div>
  );
};
DatasetForm.propTypes = {
  fields: PropTypes.object.isRequired,
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
};
DatasetForm.defaultProps = {
  error: ""
};

export default DatasetForm;
