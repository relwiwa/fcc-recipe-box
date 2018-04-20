import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import FormElement from './form-element';

const FormRadioInput = ({ legend, options, requirement, updateValue, valid, value }) => {
  return <FormElement
      legend={legend}
      requirement={requirement}
      valid={valid}
    >
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
    </FormElement>;
};

FormRadioInput.propTypes = {
  legend: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  requirement: PropTypes.string.isRequired,
  updateValue: PropTypes.func.isRequired,
  valid: PropTypes.oneOf([true, false, null]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default FormRadioInput;
