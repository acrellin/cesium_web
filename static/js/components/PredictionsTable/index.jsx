import React from 'react';
import PropTypes from 'prop-types';

import FoldableRow from '../FoldableRow';
import DownloadPredCSV from '../DownloadPredictionResults';
import PredictionResults from '../PredictionResults';
import DeletePrediction from '../../containers/DeletePrediction';
import { reformatDatetime } from '../../utils';


let PredictionsTable = props => (
  <table className="table">
    <thead>
      <tr>
        <th style={{ width: '15em' }}>Data Set Name</th>
        <th style={{ width: '15em' }}>Model Name</th>
        <th style={{ width: '25em' }}>Created</th>
        <th style={{ width: '15em' }}>Status</th>
        <th style={{ width: '15em' }}>Actions</th>
        <th style={{ width: 'auto' }} />{ /* extra column, used to capture expanded space */ }
      </tr>
    </thead>

    {
      props.predictions.map((prediction, idx) => {
        const done = prediction.finished;
        const status = done ? <td>Completed {reformatDatetime(prediction.finished)}</td> : <td>In progress</td>;

        const foldedContent = done && (
          <tr key={`pred${idx}`}>
            <td colSpan={6}>
              <PredictionResults prediction={prediction} />
            </td>
          </tr>
        );

        return (
          <FoldableRow key={idx}>
            <tr key={`row${idx}`}>
              <td>{prediction.dataset_name}</td>
              <td style={{ textDecoration: 'underline' }}>{prediction.model_name}</td>
              <td>{reformatDatetime(prediction.created_at)}</td>
              {status}
              <td>
                {
                  done &&
                  <DownloadPredCSV ID={prediction.id} />
                }
                &nbsp;&nbsp;
                <DeletePrediction ID={prediction.id} />
              </td>
              <td />
            </tr>
            {foldedContent}
          </FoldableRow>
        );
      })
    }

  </table>
);
PredictionsTable.propTypes = {
  predictions: PropTypes.arrayOf(PropTypes.object)
};
PredictionsTable.defaultProps = {
  predictions: null
};

export default PredictionsTable;
