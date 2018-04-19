import React from 'react';
import PropTypes from 'prop-types';

import FormElementRequirement from './form-element-requirement';

const FormElement = ({ children, legend, requirement, valid }) => {
  return (
    <div className="form-element">
      <fieldset className="fieldset">
      <legend>{legend}</legend>
        {children}
      </fieldset>
      <FormElementRequirement
        requirement={requirement}
        valid={valid}
      />
    </div>    
  );
};

FormElement.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  legend: PropTypes.string.isRequired,
  requirement: PropTypes.string.isRequired,
  valid: PropTypes.oneOf([true, false, null]),  
};

export default FormElement;
