import React from 'react';
import PropTypes from 'prop-types';

import FormElement from './form-element';

const FormInput = ({ attributes, legend, placeholder, requirement, updateValue, valid, value }) => {
  return (
    <FormElement
      legend={legend}
      requirement={requirement}
      valid={valid}
    >
      <input
        onChange={(event) => updateValue(event.target.value)}
        placeholder={placeholder}
        {...attributes}
        value={value}        
      />
    </FormElement>
  );
};

FormInput.propTypes = {
  attributes: PropTypes.object,
  legend: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  requirement: PropTypes.string.isRequired,
  updateValue: PropTypes.func.isRequired,
  valid: PropTypes.oneOf([true, false, null]),  
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default FormInput;
