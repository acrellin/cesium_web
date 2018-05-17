import React from 'react';
import PropTypes from 'prop-types';

import ModelInfo from '../ModelInfo';
import DeleteModel from '../../containers/DeleteModel';
import Download from '../Download';
import { reformatDatetime } from '../../utils';
import FoldableRow from '../FoldableRow';


const ModelsTable = props => (
  <table className="table">
    <thead>
      <tr>
        <th>Name</th><th>Created</th><th>Status</th><th>Actions</th>
      </tr>
    </thead>

    {
      props.models.map((model, idx) => {
        const done = model.finished;
        const status = done ? <td>Completed {reformatDatetime(model.finished)}</td> : <td>In progress</td>;

        const foldedContent = done && (
          <tr key={`modelinfo_${idx}`}>
            <td colSpan={6}>
              <ModelInfo model={model} />
            </td>
          </tr>
        );

        return (
          <FoldableRow key={`model_${idx}`}>
            <tr key={model.id}>
              <td>{model.name}</td>
              <td>{reformatDatetime(model.created_at)}</td>
              {status}
              <td>
                {
                  done &&
                  <Download url={`/models/${model.id}/download`} />
                }
                &nbsp;&nbsp;
                <DeleteModel ID={model.id} />
              </td>
            </tr>
            {foldedContent}
          </FoldableRow>
        );
      })
    }

  </table>
);
ModelsTable.propTypes = {
  models: PropTypes.arrayOf(PropTypes.object)
};
ModelsTable.defaultProps = {
  models: null
};

export default ModelsTable;
