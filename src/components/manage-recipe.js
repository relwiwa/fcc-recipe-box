import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FormContainer from '../reusable-components/form-container';
import FormRadioInput from '../reusable-components/form-radio-input';
import FormTextarea from '../reusable-components/form-textarea';
import FormTextInput from '../reusable-components/form-text-input';

import { recipeProperties } from '../specs/words';
import { formTabElementOrder, formTabElementSpecs, formTabSpecs } from '../specs/form-tabs';

class ManageRecipe extends Component {
  constructor(props) {
    super(props);
    const formTabs = {};
    formTabSpecs.map(formTab => {
      const { title } = formTab;
      formTabs[title] = {
        elements: {},
      };
      let tabValid = true;
      formTabElementOrder[title].map(formTabElement => {
        formTabs[title].elements[formTabElement] = {};
        formTabs[title].elements[formTabElement].value = props.recipe[formTabElement];
        const tabElementValid = formTabElementSpecs[formTabElement].validation(props.recipe[formTabElement]);
        formTabs[title].elements[formTabElement].valid = tabElementValid;
        if (tabElementValid === false) {
          tabValid = false;
        }
      });
      formTabs[title].valid = tabValid;
    });
    this.state = {
      currentTab: formTabSpecs[0].title,
      formTabs: formTabs,
    };

    this.updateValue = this.updateValue.bind(this);
  }

  updateValue(formElement, newValue) {
    const { currentTab, formTabs } = this.state;
    const newFormTabs = {...formTabs};
    newFormTabs[currentTab].elements[formElement].value = newValue;
    newFormTabs[currentTab].elements[formElement].valid = formTabElementSpecs[formElement].validation(newValue);
    let currentTabValid = true;
    formTabElementOrder[currentTab].map(element => {
      if (newFormTabs[currentTab].elements[element].valid === false) {
        currentTabValid = false;
      }
    });
    newFormTabs[currentTab].valid = currentTabValid;
    this.setState({
      formTabs: newFormTabs,
    });
  }    
  
  render() {
    const { saveRecipe } = this.props;
    const { currentTab, formTabs } = this.state;

    return (
      <div className="manage-recipe">
        <FormContainer
          currentTab={currentTab}
          formElements={formTabElementOrder[currentTab].map(formTabElement => {
            const props = formTabElementSpecs[formTabElement];
            const FormElementType = formTabElementSpecs[formTabElement].type;
            return <FormElementType
              key={formTabElement}
              {...props}
              updateValue={(valueToUpdate) => this.updateValue(formTabElement, valueToUpdate)}
              value={formTabs[currentTab].elements[formTabElement].value}
              valid={formTabs[currentTab].elements[formTabElement].valid}
            />;
          })}
          formTabSpecs={formTabSpecs.map(formTabSpec => {
            const props={...formTabSpec};
            props.valid = formTabs[formTabSpec.title].valid
            return props;
          })}
          saveFormInput={saveRecipe}
          updateCurrentTab={(tab) => this.setState({ currentTab: tab })}
        />
      </div>
    );
  }
}

ManageRecipe.defaultProps = {

}

ManageRecipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  saveRecipe: PropTypes.func.isRequired,
};

export default ManageRecipe;
