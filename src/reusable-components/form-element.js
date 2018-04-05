import React from 'react';
import PropTypes from 'prop-types';

import FormElementRequirement from './form-element-requirement';

const FormElement = ({ children, label, requirement, valid }) => {
  return (
    <div className="form-element">
      <label style={{fontSize: '16px'}}>
        {label}
        {children}
      </label>
      <FormElementRequirement
        requirement={requirement}
        valid={valid}
      />
    </div>    
  );
};

FormElement.propTypes = {
  children: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  requirement: PropTypes.string.isRequired,
  valid: PropTypes.oneOf([true, false, null]),  
};

export default FormElement;
