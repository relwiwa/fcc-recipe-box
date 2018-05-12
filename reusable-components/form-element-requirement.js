import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import React from 'react';
import PropTypes from 'prop-types';

const FormElementRequirement = ({ requirement, valid }) => {
  const renderValidIcon = (validProperty) => {
    if (validProperty === null) {
      return null
    }
    else {
      return valid === true ? 'check-square' : 'square';
    }
  };

  return (
    <p className="help-text"><FontAwesomeIcon icon={['far', renderValidIcon(valid)]} /> {requirement}</p>
  );
};

FormElementRequirement.propTypes = {
  requirement: PropTypes.string.isRequired,
  valid: PropTypes.oneOf([true, false, null]),  
};

export default FormElementRequirement;
