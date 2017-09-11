import React from 'react';
import { connect } from 'react-redux';

import DatasetInfo from '../containers/DatasetInfo';
import DeleteDataset from '../containers/DeleteDataset';

export let DatasetTable = props => (
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
  datasets: React.PropTypes.arrayOf(React.PropTypes.object)
};

export default DatasetTable;
