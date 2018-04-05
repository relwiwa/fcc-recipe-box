import React from 'react';
import PropTypes from 'prop-types';

import FormElement from './form-element';

const FormTextInput = ({ label, placeholder, requirement, updateValue, valid, value }) => {
  return (
    <FormElement
      label={label}
      requirement={requirement}
      valid={valid}
    >
      <input
        onChange={(event) => updateValue(event.target.value)}
        placeholder={placeholder}
        type="text"
        value={value}        
      />
    </FormElement>
  );
}

FormTextInput.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  requirement: PropTypes.string.isRequired,
  updateValue: PropTypes.func.isRequired,
  valid: PropTypes.oneOf([true, false, null]),  
  value: PropTypes.string.isRequired,
};

export default FormTextInput;
