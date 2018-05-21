import React from 'react';
import PropTypes from 'prop-types';

import { contains } from '../../utils';


const PredictionResults = (props) => {
  const { model_type, results, isProbabilistic } = { ...props.prediction };

  const firstResult = results ? results[Object.keys(results)[0]] : null;
  const classes = (firstResult && firstResult.prediction) ?
                  Object.keys(firstResult.prediction) : null;

  let modelHasClass = contains(['RidgeClassifierCV'], model_type);
  const modelHasTarget = contains(['RandomForestRegressor',
                                   'LinearRegressor',
                                   'BayesianARDRegressor',
                                   'BayesianRidgeRegressor'],
                                  model_type);
  if (model_type === 'LinearSGDClassifier') {
    modelHasClass = !isProbabilistic;
  }

  const hasTrueTargetLabel = p => (p && p.label);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Time Series</th>
          {hasTrueTargetLabel(firstResult) && <th>True Class/Target</th>}

          {isProbabilistic &&
           classes.map((classLabel, idx) => ([
             <th key="0">Predicted Class</th>,
             <th key="1">Probability</th>
           ]))
          }

          {modelHasClass && <th>Predicted Class</th>}
          {modelHasTarget && <th>Predicted Target</th>}
        </tr>
      </thead>

      <tbody>
        {results && Object.keys(results).map((fname, idx) => {
           const result = results[fname];
           const classesSorted = classes.sort((a, b) => (result.prediction[b] - result.prediction[a]));

           return (
             <tr key={idx}>

               <td>{fname}</td>

               {
                 [hasTrueTargetLabel(result) && <td key="pt">{result.label}</td>,

                  isProbabilistic &&
                   classesSorted.map((classLabel, idx2) => ([
                     <td key="cl0">{classLabel}</td>,
                     <td key="cl1">{result.prediction[classLabel]}</td>
                   ])),

                  modelHasClass && <td key="rp">{result.prediction}</td>,

                  modelHasTarget && <td key="rp">{result.prediction}</td>
                 ]}

             </tr>
           );
        })}
      </tbody>
    </table>
  );
};
PredictionResults.propTypes = {
  prediction: PropTypes.object.isRequired
};

export default PredictionResults;
