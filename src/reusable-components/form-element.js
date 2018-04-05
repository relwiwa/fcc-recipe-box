import React from 'react';
import PropTypes from 'prop-types';

const FormElement = ({ children, label, requirement, valid }) => {
  const renderValidIcon = (validProperty) => {
    if (validProperty === null) {
      return null
    }
    else {
      return 'fa ' + (valid === true ? 'fa-check-square-o' : 'fa-square-o');
    }
  };

  return (
    <div className="form-element">
      <label>
        {label}
        {children}
      </label>
      <p className="help-text"><span className={'fa ' + renderValidIcon(valid)}></span> {requirement}</p>
    </div>
    
  );
}

FormElement.propTypes = {
  children: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  requirement: PropTypes.string.isRequired,
};

export default FormElement;
