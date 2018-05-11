import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import DatasetInfo from '../../components/DatasetInfo';
import DeleteDataset from '../../containers/DeleteDataset';
import FoldableRow from '../FoldableRow';
import { reformatDatetime } from '../../utils';


const DatasetTable = props => (
  <table className="table">
    <thead>
      <tr>
        <th>Name</th><th>Uploaded</th><th>Actions</th>
      </tr>
    </thead>

    {
      props.datasets.map((dataset, idx) => {
        const foldedContent = (
          <tr key={`dsinfo_${idx}`}>
            <td colSpan={6}>
              <DatasetInfo dataset={dataset} />
            </td>
          </tr>
        );

        return (
          <FoldableRow key={`ds_${idx}`}>
            <tr key={dataset.id}>
              <td>{dataset.name}</td>
              <td>{reformatDatetime(dataset.created_at)}</td>
              <td><DeleteDataset ID={dataset.id} /></td>
            </tr>
            {foldedContent}
          </FoldableRow>
        );
      })
    }

  </table>
);
DatasetTable.propTypes = {
  datasets: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default DatasetTable;
