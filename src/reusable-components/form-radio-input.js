import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import FormElement from './form-element';
import FormElementRequirement from './form-element-requirement';

const FormRadioInput = ({ label, options, requirement, updateValue, valid, value }) => {
  return <Fragment>
    <fieldset className="fieldset">
      <legend>{label}</legend>
      {options.map(option => {
        return <Fragment key={option}>
          <input
            id={option}
            onChange={() => updateValue(option)}
            checked={option === value ? true : false}
            type="radio"
          />
          <label htmlFor={option}>{option}</label>
        </Fragment>
      })}
    </fieldset>
    <FormElementRequirement
      requirement={requirement}
      valid={valid}
    />
  </Fragment>;
}

FormRadioInput.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  requirement: PropTypes.string.isRequired,
  updateValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default FormRadioInput;
