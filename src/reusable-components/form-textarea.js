import React from 'react';
import PropTypes from 'prop-types';

import FormElement from './form-element';

const FormTextarea = ({ label, placeholder, requirement, updateValue, valid, value }) => {
  return (
    <FormElement
      label={label}
      requirement={requirement}
      valid={valid}
    >
      <textarea
        onChange={(event) => updateValue(event.target.value)}
        placeholder={placeholder}
        type="textarea"
        value={value}
      />
    </FormElement>
  );
}

FormTextarea.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  requirement: PropTypes.string.isRequired,
  updateValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default FormTextarea;
