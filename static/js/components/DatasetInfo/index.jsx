import React from 'react';
import PropTypes from 'prop-types';


const DatasetInfo = props => (
  <table className="table">
    <thead>
      <tr>
        <th>Time Series File Names</th>
        <th>Meta Features</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          {props.dataset.files.join(', ')}
        </td>
        <td>
          {props.dataset.meta_features.join(', ')}
        </td>
      </tr>
    </tbody>
  </table>
);
DatasetInfo.propTypes = {
  dataset: PropTypes.object.isRequired
};

export default DatasetInfo;
