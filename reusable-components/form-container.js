import React from 'react';
import PropTypes from 'prop-types';

import FormNavigation from './form-navigation';
import FormTabs from './form-tabs';

const FormContainer = ({ allTabsValid, cancelFormInput, currentTab, currentTabValid, formElements, formTabSpecs, saveFormInput, updateCurrentTab }) => {
  return (
    <form className="form-container">
      <FormTabs
        currentTab={currentTab}
        currentTabValid={currentTabValid}
        formTabSpecs={formTabSpecs}
        updateCurrentTab={updateCurrentTab}
      />
      {formElements}
      <FormNavigation
        allTabsValid={allTabsValid}
        cancelFormInput={cancelFormInput}
        currentTab={currentTab}
        currentTabValid={currentTabValid}
        formTabSpecs={formTabSpecs}
        saveFormInput={saveFormInput}
        updateCurrentTab={updateCurrentTab}
      />
    </form>
  );
}

FormContainer.propTypes = {
  allTabsValid: PropTypes.bool.isRequired,
  cancelFormInput: PropTypes.func.isRequired,
  currentTab: PropTypes.string.isRequired,
  currentTabValid: PropTypes.bool.isRequired,
  formElements: PropTypes.array.isRequired,
  formTabSpecs: PropTypes.array.isRequired,
  saveFormInput: PropTypes.func.isRequired,
  updateCurrentTab: PropTypes.func.isRequired,
};

export default FormContainer;
