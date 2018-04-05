import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FormContainer from '../reusable-components/form-container';
import FormRadioInput from '../reusable-components/form-radio-input';
import FormTextarea from '../reusable-components/form-textarea';
import FormTextInput from '../reusable-components/form-text-input';

import { manageRecipeTabTitles, recipeProperties } from '../specs/words';
import { formTabElementOrder, formTabElementSpecs, formTabOrder } from '../specs/form-tabs';

const { general, ingredients, preparation } = manageRecipeTabTitles;
const { recipeDescription, recipeImage, recipeTitle } = recipeProperties;

class ManageRecipe extends Component {
  constructor(props) {
    super(props);
    const formTabs = {};
    formTabOrder.map(formTab => {
      formTabs[formTab] = {};
      formTabElementOrder[formTab].map(formTabElement => {
        formTabs[formTab][formTabElement] = {};
        formTabs[formTab][formTabElement].value = props.recipe[formTabElement];
        formTabs[formTab][formTabElement].valid = formTabElementSpecs[formTabElement].required === true ? false : null;
      });
    });
    this.state = {
      currentTab: general,
      formTabs: formTabs,
    };

    this.updateValue = this.updateValue.bind(this);
  }

  updateValue(formElement, newValue) {
    const { currentTab, formTabs } = this.state;
    const newFormTabs = {...formTabs};
    newFormTabs[currentTab][formElement].value = newValue;
    newFormTabs[currentTab][formElement].valid = formTabElementSpecs[formElement].validation(newValue);
    this.setState({
      formTabs: newFormTabs,
    });
  }    
  
  render() {
    const { cancelManageRecipe } = this.props;
    const { currentTab, formTabs } = this.state;

    return (
      <div className="manage-recipe">
        <FormContainer
          formElements={formTabElementOrder[currentTab].map(formTabElement => {
            const props = formTabElementSpecs[formTabElement];
            const FormElementType = formTabElementSpecs[formTabElement].type;
            return <FormElementType
              key={formTabElement}
              {...props}
              updateValue={(valueToUpdate) => this.updateValue(formTabElement, valueToUpdate)}
              value={formTabs[currentTab][formTabElement].value}
              valid={formTabs[currentTab][formTabElement].valid}
            />;
          })}
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
