import React from 'react';
import PropTypes from 'prop-types';

const FormElementRequirement = ({ requirement, valid }) => {
  const renderValidIcon = (validProperty) => {
    if (validProperty === null) {
      return null
    }
    else {
      return 'fa ' + (valid === true ? 'fa-check-square-o' : 'fa-square-o');
    }
  };

  return (
    <p className="help-text"><span className={'fa ' + renderValidIcon(valid)}></span> {requirement}</p>
  );
}

FormElementRequirement.propTypes = {
  requirement: PropTypes.string.isRequired,
  valid: PropTypes.oneOf([true, false, null]),  
};

export default FormElementRequirement;
