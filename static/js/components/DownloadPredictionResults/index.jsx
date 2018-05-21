import React from 'react';
import PropTypes from 'prop-types';


const DownloadPredCSV = props => (
  <a
    style={{ display: "inline-block" }}
    href={`/predictions/${props.ID}/download`}
  >
    Download
  </a>
);
DownloadPredCSV.propTypes = {
  ID: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default DownloadPredCSV;
