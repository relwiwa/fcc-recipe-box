import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FormContainer from '../reusable-components/form-container';
import FormRadioInput from '../reusable-components/form-radio-input';
import FormTextarea from '../reusable-components/form-textarea';
import FormTextInput from '../reusable-components/form-text-input';
import FormTextInputList from '../reusable-components/form-text-input-list';

import { formTabElementOrder, formTabElementSpecs, formTabSpecs } from '../specs/form-tabs';

class ManageRecipe extends Component {
  constructor(props) {
    super(props);

    const formFieldsValidity = {};
    Object.keys(formTabElementSpecs).map(formTabElement => {
      formFieldsValidity[formTabElement] = formTabElementSpecs[formTabElement].validation(props.recipe[formTabElement]);
    });

    this.state = {
      currentTab: formTabSpecs[0].title,
      formFieldsValues: {...props.recipe},
      formFieldsValidity: formFieldsValidity,
    };

    this.getAllTabsValidity = this.getAllTabsValidity.bind(this);
    this.getCurrentTabsValidity = this.getCurrentTabsValidity.bind(this);
    this.updateValue = this.updateValue.bind(this);
  }

  getAllTabsValidity() {
    const { formFieldsValidity } = this.state;
    let allTabsValid = true;
    Object.keys(formFieldsValidity).map(formField => {
      if (formFieldsValidity[formField] === false) {
        allTabsValid = false;
      }
    });
    return allTabsValid;
  }

  getCurrentTabsValidity() {
    const { currentTab, formFieldsValidity } = this.state;
    let currentTabValid = true;
    formTabElementOrder[currentTab].map(formTabElement => {
      if (formFieldsValidity[formTabElement] === false) {
        currentTabValid = false;
      }
    });
    return currentTabValid;
  }

  updateValue(formElement, newValue) {
    const { currentTab, formFieldsValidity, formFieldsValues } = this.state;
    const newFormFieldsValidity = {...formFieldsValidity};
    const newFormFieldsValues = {...formFieldsValues};
    newFormFieldsValues[formElement] = newValue;
    newFormFieldsValidity[formElement] = formTabElementSpecs[formElement].validation(newValue);
    this.setState({
      formFieldsValidity: newFormFieldsValidity,
      formFieldsValues: newFormFieldsValues,
    });
  }    
  
  render() {
    const { cancelFormInput, saveRecipe } = this.props;
    const { currentTab, formFieldsValidity, formFieldsValues } = this.state;

    return (
      <div className="manage-recipe">
        <FormContainer
          allTabsValid={this.getAllTabsValidity()}
          cancelFormInput={cancelFormInput}
          currentTab={currentTab}
          currentTabValid={this.getCurrentTabsValidity()}
          formElements={formTabElementOrder[currentTab].map(formTabElement => {
            const props = formTabElementSpecs[formTabElement];
            const FormElementType = formTabElementSpecs[formTabElement].type;
            return <FormElementType
              key={formTabElement}
              {...props}
              updateValue={(valueToUpdate) => this.updateValue(formTabElement, valueToUpdate)}
              value={formFieldsValues[formTabElement]}
              valid={formFieldsValidity[formTabElement]}
            />;
          })}
          formTabSpecs={formTabSpecs}
          saveFormInput={saveRecipe}
          updateCurrentTab={(tab) => this.setState({ currentTab: tab })}
        />
      </div>
    );
  }
}

ManageRecipe.propTypes = {
  cancelFormInput: PropTypes.func.isRequired,
  recipe: PropTypes.object.isRequired,
  saveRecipe: PropTypes.func.isRequired,
};

export default ManageRecipe;
