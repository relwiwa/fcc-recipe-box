import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import React from 'react';
import PropTypes from 'prop-types';

import FormElement from '../../../reusable-components/form-container/form-element';

import { ingredientProperties, units } from '../specs/words';
import Ingredient from '../models/ingredient';
import Numerus from '../models/numerus';

const { ingredientDescription, ingredientQuantity, ingredientUnit } = ingredientProperties;

const ManageRecipeIngredients = ({ legend, placeholder, requirement, updateValue, valid, value }) => {
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
                min="1"
                onChange={(event) => prepareUpdatedValues(event.target.value, ingredientQuantity, index)}
                placeholder="Quantity"
                type="number"
                value={itemValues[ingredientQuantity]}
              />
            </div>
            <div className="cell small-6 medium-4">
              <select
                value={itemValues[ingredientUnit].key}
                onChange={(event) => prepareUpdatedValues(units[event.target.value], ingredientUnit, index)}
                style={{background: 'none'}}
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
            className={'button alert' + (disabled ? ' disabled' : '')}
            onClick={disabled ? null : (() => removeItem(index))}
            onKeyPress={disabled ? null : (() => removeItem(index))}
            tabIndex="0"
          ><FontAwesomeIcon icon="trash" /></a>
        </div>
      </div>
    );
  };

  return <FormElement
    legend={legend}
    requirement={requirement}
    valid={valid}
  >
    {value.map((item, index) => {
      const disabled = value.length === 1 ? true : false;
      return renderInputListItem(index, item, disabled);
    })}
    <div className="grid-x grid-padding-x">
      <div className="cell">
        <a
          className="button warning"
          onClick={() => updateValue([...value, new Ingredient()])}
          onKeyPress={() => updateValue([...value, new Ingredient()])}
          tabIndex="0"
        ><FontAwesomeIcon icon="plus" /> Add Item</a>
      </div>
    </div>
  </FormElement>;
};

ManageRecipeIngredients.propTypes = {
  legend: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  requirement: PropTypes.string.isRequired,
  updateValue: PropTypes.func.isRequired,
  valid: PropTypes.oneOf([true, false, null]),  
  value: PropTypes.array.isRequired,
};

export default ManageRecipeIngredients;
