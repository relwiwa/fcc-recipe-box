import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import FormElement from '../reusable-components/form-element';

import { ingredientProperties, units } from '../specs/words';
import Ingredient from '../models/ingredient';

const { ingredientDescription, ingredientQuantity, ingredientUnit } = ingredientProperties;

const ManageRecipeIngredients = ({ label, placeholder, requirement, updateValue, valid, value }) => {
  const prepareUpdatedValues = (newValue, itemProperty, index) => {
    const newValues = [...value];
    newValues[index][itemProperty] = newValue;
    updateValue(newValues);
  };

  const removeItem = (index) => {
    let newValues = [...value].splice(0, index);
    newValues = newValues.concat([...value].splice(index  + 1));
    updateValue(newValues);
  };

  const renderInputListItem = (index, itemValues, disabled) => {

    return (
      <div key={index} className="grid-x grid-margin-x">
        <div className="cell small-10 large-11">
          <div className="grid-x grid-margin-x">
            <div className="cell small-6 medium-2">
              <input
                min="0"
                onChange={(event) => prepareUpdatedValues(event.target.value, ingredientQuantity, index)}
                placeholder="Quantity"
                type="number"
                value={itemValues[ingredientQuantity]}
              />
            </div>
            <div className="cell small-6 medium-4">
              <select
                value={itemValues[ingredientUnit]}
                onChange={(event) => prepareUpdatedValues(event.target.value, ingredientUnit, index)}
                style={{backgroundImage: 'none'}}
              >
                {Object.keys(units).map(key => <option
                  key={key}
                  value={key}
                >
                  {(itemValues[ingredientQuantity] <= 1 || !itemValues[ingredientQuantity]) ? units[key].singular : units[key].plural}
                </option>)}
              </select>
            </div>
            <div className="cell small-12 medium-6">
            <input
                onChange={(event) => prepareUpdatedValues(event.target.value, ingredientDescription, index)}
                placeholder="Ingredient Description"
                type="text"
                value={itemValues[ingredientDescription]}
              />
            </div>
          </div>
        </div>
        <div className="cell small-2 large-1 align-self-middle text-right">
          <a
            onClick={disabled ? null : (() => removeItem(index))}
            className={'button alert' + (disabled ? ' disabled' : '')}
          ><span className="fa fa-trash-o"></span></a>
        </div>
      </div>
    );
  };

  return <Fragment>
    <FormElement
      label={label}
      requirement={requirement}
      valid={valid}
    >
      {value.map((item, index) => {
        const disabled = value.length === 1 ? true : false;
        return renderInputListItem(index, item, disabled);
      })}
    </FormElement>
    <div className="grid-x grid-padding-x">
      <div className="cell text-right">
        <a
          className="button warning"
          onClick={() => updateValue([...value, new Ingredient()])}
        ><span className="fa fa-plus"></span> Add</a>
      </div>
    </div>
  </Fragment>;
}

ManageRecipeIngredients.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  requirement: PropTypes.string.isRequired,
  updateValue: PropTypes.func.isRequired,
  valid: PropTypes.oneOf([true, false, null]),  
  value: PropTypes.array.isRequired,
};

export default ManageRecipeIngredients;
