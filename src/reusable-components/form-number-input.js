import React from 'react';
import PropTypes from 'prop-types';

import FormElement from './form-element';

const FormNumberInput = ({ label, placeholder, requirement, updateValue, valid, value }) => {
  return (
    <FormElement
      label={label}
      requirement={requirement}
      valid={valid}
    >
      <input
        onChange={(event) => updateValue(event.target.value)}
        placeholder={placeholder}
        type="number"
        value={value}        
      />
    </FormElement>
  );
}

FormNumberInput.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  requirement: PropTypes.string.isRequired,
  updateValue: PropTypes.func.isRequired,
  valid: PropTypes.oneOf([true, false, null]),  
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default FormNumberInput;
