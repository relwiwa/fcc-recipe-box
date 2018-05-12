import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import React from 'react';
import PropTypes from 'prop-types';

const FormNavigation = ({ allTabsValid, cancelFormInput, currentTab, currentTabValid, formTabSpecs, saveFormInput, updateCurrentTab }) => {
  const isFirstTab = formTabSpecs[0].title === currentTab;
  const isLastTab = formTabSpecs[formTabSpecs.length - 1].title === currentTab;
  let currentTabNumber;
  formTabSpecs.map((formTabSpec, index) => {
    if (formTabSpec.title === currentTab) {
      currentTabNumber = index;
    }
  });

  return (
    <div className="form-navigation grid-x grid-padding-x">
      <div className="cell medium-6">
        <div className="button-group expanded">
          <a
            className={'button ' + ((isFirstTab || !currentTabValid) ? 'disabled' : null)}
            onClick={(isFirstTab || !currentTabValid) ? null : () => updateCurrentTab(formTabSpecs[currentTabNumber - 1].title)}
            onKeyPress={(isFirstTab || !currentTabValid) ? null : () => updateCurrentTab(formTabSpecs[currentTabNumber - 1].title)}
            tabIndex="0"
          ><FontAwesomeIcon icon="angle-left" /> Previous</a>
          <a
            className={'button ' + ((isLastTab || !currentTabValid) ? 'disabled' : null)}
            onClick={(isLastTab || !currentTabValid)  ? null : () => updateCurrentTab(formTabSpecs[currentTabNumber + 1].title)}
            onKeyPress={(isLastTab || !currentTabValid)  ? null : () => updateCurrentTab(formTabSpecs[currentTabNumber + 1].title)}
            tabIndex="0"
          >Next <FontAwesomeIcon icon="angle-right" /></a>
        </div>
      </div>
      <div className="cell medium-6">
        <div className="button-group align-right expanded">
          <a
            className="button secondary"
            onClick={cancelFormInput}
            onKeyPress={cancelFormInput}
            tabIndex="0"
          ><FontAwesomeIcon icon="times" /> Cancel</a>
          <a
            className={'button success' + (allTabsValid ? '' : ' disabled')}
            onClick={allTabsValid ? saveFormInput : null}
            onKeyPress={allTabsValid ? saveFormInput : null}
            tabIndex="0"
          ><FontAwesomeIcon icon="save" /> Save Input</a>
        </div>
      </div>
    </div>
  );
};

FormNavigation.propTypes = {
  allTabsValid: PropTypes.bool.isRequired,
  cancelFormInput: PropTypes.func.isRequired,
  currentTab: PropTypes.string.isRequired,
  currentTabValid: PropTypes.bool.isRequired,
  formTabSpecs: PropTypes.array.isRequired,
  saveFormInput: PropTypes.func.isRequired,
  updateCurrentTab: PropTypes.func.isRequired,
};

export default FormNavigation;
