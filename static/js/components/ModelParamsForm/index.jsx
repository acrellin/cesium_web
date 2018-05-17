import React from 'react';
import PropTypes from 'prop-types';

import { TextInput, CheckBoxInput } from '../Form';


const ModelParamsForm = (props) => {
  const style = {
  };

  const { model } = { ...props };

  return (
    <div style={style}>
      <h3>{model.name}</h3>
      {model.params.map((param, idx) => {
         const pProps = props[param.name];
         if (param.type === 'bool') {
           return <CheckBoxInput key={idx} label={param.name} {...(pProps)} />;
         } else {
           return <TextInput key={idx} label={param.name} {...(pProps)} />;
         }
      })}
    </div>
  );
};

export default ModelParamsForm;
