import React from 'react';
import PropTypes from 'prop-types';

import FormTabs from './form-tabs';

const FormContainer = ({ currentTab, formElements, formTabSpecs, saveFormInput, updateCurrentTab }) => {
  /*let allValid = true;
  formElements.map(formElement => {
    if (formElement.props.valid === false) {
      allValid = false;
    }
  });*/

  let allTabsValid = null;
  formTabSpecs.map(formTabSpec => {
    if (formTabSpec.valid === true && allTabsValid === null) {
      allTabsValid = true;
    }
    if (formTabSpec.valid === false) {
      allTabsValid = false;
    }
  });

  return (
    <form className="form-container">
      <FormTabs
        currentTab={currentTab}
        formTabSpecs={formTabSpecs}
        updateCurrentTab={updateCurrentTab}
      />
      {formElements}
      {<div className="text-right">
        <a
          className={'button' + (allTabsValid ? '' : ' disabled')}
          onClick={allTabsValid ? saveFormInput : null}
        >Save Input</a>
      </div>}
    </form>
  );
}

FormContainer.propTypes = {
  currentTab: PropTypes.string.isRequired,
  formElements: PropTypes.array.isRequired,
  formTabSpecs: PropTypes.array.isRequired,
  saveFormInput: PropTypes.func.isRequired,
  updateCurrentTab: PropTypes.func.isRequired,
};

export default FormContainer;
