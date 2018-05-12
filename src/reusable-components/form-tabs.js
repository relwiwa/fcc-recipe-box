import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import React from 'react';
import PropTypes from 'prop-types';

const FormTabs = ({ currentTab, currentTabValid, formTabSpecs, updateCurrentTab }) => {
  return (
    <div className="grid-x grid-margin-x align-middle">
      <div className="cell button-group expanded">
        {formTabSpecs.map(tab => (
          <a
            className={'button ' + (tab.title === currentTab ? '' : 'disabled')}
            key={tab.title}
            onClick={(tab.title === currentTab || !currentTabValid) ? null : () => updateCurrentTab(tab.title)}
            onKeyPress={(tab.title === currentTab || !currentTabValid) ? null : () => updateCurrentTab(tab.title)}
            style={currentTabValid ? { cursor: 'pointer' } : null }
            tabIndex="0"
          >
            <FontAwesomeIcon icon={tab.icon} /><br className="hide-for-medium" /> {tab.title}
          </a>
        ))}
      </div>
    </div>
  );
};

FormTabs.propTypes = {
  currentTab: PropTypes.string.isRequired,
  currentTabValid: PropTypes.bool.isRequired,
  formTabSpecs: PropTypes.array.isRequired,
  updateCurrentTab: PropTypes.func.isRequired,
};

export default FormTabs;
