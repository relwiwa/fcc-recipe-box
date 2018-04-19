import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ingredientProperties } from '../specs/words';
const { ingredientDescription, ingredientQuantity, ingredientUnit } = ingredientProperties;

class DisplayRecipeIngredients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPortions: props.recipePortions,
    };
  }

  decrementPortion() {
    const { currentPortions } = this.state;
    this.setState({ currentPortions: currentPortions - 1 });    
  }

  incrementPortion() {
    const { currentPortions } = this.state;
    this.setState({ currentPortions: currentPortions + 1 });
  }

  renderChangePortionButton(faClass, onClickFunction) {
    const cursorValue = onClickFunction === null ? null : 'pointer';
    return (<span
      className={`fa ${faClass}`}
      onClick={onClickFunction}
      onKeyPress={onClickFunction}
      style={{color: '#d7ecfa', background: '#1779ba', cursor: cursorValue}}
      tabIndex="0"
    ></span>);
  }

  renderIngredient(quantity, unit, description) {
    const { recipePortions: originalPortions } = this.props;
    const { currentPortions } = this.state;
    const factor = currentPortions / originalPortions;
    quantity *= factor;
    const remainder = quantity % 1;
    const quantityString = remainder === 0 ? quantity : `${Math.floor(quantity)}.${remainder.toString().substr(2, 1)}`;
    return <span>{quantityString} {quantity > 1 ? unit.plural : unit.singular} of {description}</span>
  }

  render() {
    const { recipeIngredients } = this.props;
    const { currentPortions } = this.state;

    return (
      <div className="grid-x grid-margin-x grid-margin-y">      
        <h2 className="cell"><span className="fa fa-shopping-bag"></span> Ingredients <span className="fa fa-shopping-bag"></span></h2>
        <h4 className="cell">
          {this.renderChangePortionButton('fa-minus-circle', currentPortions > 1 ? () => this.decrementPortion() : null)} {currentPortions} Portion{currentPortions > 1 ? 's' : null} {this.renderChangePortionButton('fa-plus-circle', () => this.incrementPortion())}
        </h4>
        {recipeIngredients.map((ingredient, index) => (
          <div key={index} className="callout primary cell small-6 medium-4">
            {this.renderIngredient(ingredient[ingredientQuantity], ingredient[ingredientUnit], ingredient[ingredientDescription])}
          </div>
        ))}
      </div>
    );
  }
}

DisplayRecipeIngredients.propTypes = {
  recipeIngredients: PropTypes.array.isRequired,
  recipePortions: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default DisplayRecipeIngredients;
