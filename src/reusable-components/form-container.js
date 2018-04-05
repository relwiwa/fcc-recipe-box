import React from 'react';
import PropTypes from 'prop-types';

const FormContainer = ({ formElements }) => {
  let allValid = true;
  formElements.map(formElement => {
    if (formElement.props.valid === false) {
      allValid = false;
    }
  });

  return (
    <form className="form-container">
      {formElements}
      {allValid && <div>
        <a className="button">All Good</a>
      </div>}
    </form>
  );
}

FormContainer.propTypes = {
  formElements: PropTypes.array.isRequired,
};

export default FormContainer;
