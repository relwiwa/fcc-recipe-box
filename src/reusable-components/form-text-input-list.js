import React from 'react';
import PropTypes from 'prop-types';

import FormElement from './form-element';

const FormTextInputList = ({ legend, placeholder, requirement, updateValue, valid, value }) => {
  const prepareUpdatedValues = (newValue, index) => {
    const newValues = [...value];
    newValues[index] = newValue;
    updateValue(newValues);
  };

  const removeItem = (index) => {
    let newValues = [...value].splice(0, index);
    newValues = newValues.concat([...value].splice(index  + 1));
    updateValue(newValues);
  };

  const renderInputListItem = (index, itemValue, disabled) => {
    return <div className="grid-x" key={index}>
      <div className="cell small-9 medium-11">
        <div className="input-group">
          <span className="input-group-label">{index + 1}</span>
          <input
            className="input-group-field"
            onChange={(event) => prepareUpdatedValues(event.target.value, index)}
            placeholder={placeholder}
            type="text"
            value={itemValue}
          />
        </div>
      </div>
      <div className="cell small-3 medium-1 text-right">
        <a
          className={'button alert' + (disabled ? ' disabled' : '')}
          onClick={disabled ? null : (() => removeItem(index))}
          onKeyPress={disabled ? null : (() => removeItem(index))}
          tabIndex="0"
        ><span className="fa fa-trash-o"></span></a>
      </div>
    </div>
  };

  return <FormElement
    legend={legend}
    requirement={requirement}
    valid={valid}
  >
    {value.map((item, index) => renderInputListItem(index, item, value.length <= 1 ? true : false))}
    <div className="grid-x grid-padding-x">
      <div className="cell">
        <a
          className="button warning"
          onClick={() => updateValue([...value, ''])}
          onKeyPress={() => updateValue([...value, ''])}
          tabIndex="0"
        ><span className="fa fa-plus"></span> Add Item</a>
      </div>
    </div>
  </FormElement>;
}

FormTextInputList.propTypes = {
  legend: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  requirement: PropTypes.string.isRequired,
  updateValue: PropTypes.func.isRequired,
  valid: PropTypes.oneOf([true, false, null]),  
  value: PropTypes.array.isRequired,
};

export default FormTextInputList;
