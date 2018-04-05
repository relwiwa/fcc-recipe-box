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
        onChange={updateValue}
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
  value: PropTypes.string.isRequired,
};

export default FormTextInput;
