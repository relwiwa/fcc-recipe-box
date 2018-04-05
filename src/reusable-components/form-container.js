import React from 'react';
import PropTypes from 'prop-types';

const FormContainer = (props) => {
  let allValid = true;
  props.children.map(child => {
    if (child.props.valid === false) {
      allValid = false;
    }
  });

  return (
    <form className="form-container">
      {props.children}
      {allValid && <div>
        <a className="button">All Good</a>
      </div>}
    </form>
  );
}

FormContainer.propTypes = {

};

export default FormContainer;
