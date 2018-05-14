import React from 'react';
import PropTypes from 'prop-types';

import { SelectInput, Form } from '../Form/index';


let ProjectSelector = ({ projects, label, style, fields }) => {
  const project_list = projects.map(proj => (
    {
      id: proj.id,
      label: proj.name
    }
  ));

  return (
    <div style={style}>
      <Form onSubmit={form => null}>
        <SelectInput
          label={label}
          options={project_list}
          {...fields.project}
        />
      </Form>
    </div>
  );
};
ProjectSelector.propTypes = {
  fields: PropTypes.object.isRequired,
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  style: PropTypes.object,
  label: PropTypes.string.isRequired
};
ProjectSelector.defaultProps = {
  style: {}
};


export default ProjectSelector;
