import React from 'react';
import PropTypes from 'prop-types';

import { reformatDatetime } from '../../utils';
import Plot from '../Plot';
import FoldableRow from '../FoldableRow';
import DeleteFeatureset from '../../containers/DeleteFeatureset';


const FeaturesetsTable = props => (
  <div>
    <h4>Feature Sets</h4>
    <table className="table">
      <thead>
        <tr>
          <th style={{ width: '15em' }}>Name</th>
          <th style={{ width: '15em' }}>Created</th>
          <th style={{ width: '15em' }}>Status</th>
          <th style={{ width: '15em' }}>Actions</th>
          <th style={{ width: 'auto' }} />{ /* extra column for spacing */ }
        </tr>
      </thead>

      {
        props.featuresets.map((featureset, idx) => {
          const done = featureset.finished;
          const foldedContent = done && (
            <tr key={`plot${featureset.id}`}>
              <td colSpan={4}>
                <Plot url={`${props.featurePlotURL}/${featureset.id}`} />
              </td>
            </tr>);

          const status = done ? <td>Completed {reformatDatetime(featureset.finished)}</td> : <td>In progress</td>;

          return (
            <FoldableRow key={idx}>
              <tr key={featureset.id}>
                <td>{featureset.name}</td>
                <td>{reformatDatetime(featureset.created_at)}</td>
                {status}
                <td><DeleteFeatureset ID={featureset.id} /></td>
              </tr>
              {foldedContent}
            </FoldableRow>
          );
        })
      }

    </table>
  </div>
);
FeaturesetsTable.propTypes = {
  featuresets: PropTypes.arrayOf(PropTypes.object).isRequired,
  featurePlotURL: PropTypes.string
};
FeaturesetsTable.defaultProps = {
  featurePlotURL: null
};

export default FeaturesetsTable;
