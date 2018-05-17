import React from 'react';
import PropTypes from 'prop-types';


const ModelInfo = props => (
  <table className="table">
    <thead>
      <tr>
        <th>Model Type</th>
        <th>Hyperparameters</th>
        <th>Training Data Score</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          {props.model.type}
        </td>
        <td>
          <table>
            <tbody>
              {
                Object.keys(props.model.params).map((param, idx) => (
                  <tr key={idx}>
                    <td>{param}</td>
                    <td style={{ paddingLeft: "5px" }}>{JSON.stringify(props.model.params[param])}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </td>
        <td>
          {props.model.train_score}
        </td>
      </tr>
    </tbody>
  </table>
);
ModelInfo.propTypes = {
  model: PropTypes.object.isRequired
};

export default ModelInfo;
