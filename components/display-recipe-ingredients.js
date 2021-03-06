import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
    return <FontAwesomeIcon
      icon={faClass}
      onClick={onClickFunction}
      onKeyPress={onClickFunction}
      style={{cursor: cursorValue}}
      tabIndex="0"
    />;
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
      <div className="grid-x grid-padding-x grid-margin-x grid-margin-y">      
        <h2 className="cell"><FontAwesomeIcon icon="shopping-bag" /> Ingredients <FontAwesomeIcon icon="shopping-bag" /></h2>
        <h4 className="cell">
          {this.renderChangePortionButton('minus-circle', currentPortions > 1 ? () => this.decrementPortion() : null)} {currentPortions} Portion{currentPortions > 1 ? 's' : null} {this.renderChangePortionButton('plus-circle', () => this.incrementPortion())}
        </h4>
        <div className="cell">
          <div className="grid-x grid-margin-x grid-margin-y">
            {recipeIngredients.map((ingredient, index) => (
              <div key={index} className="callout cell small-6 medium-4">
                {this.renderIngredient(ingredient[ingredientQuantity], ingredient[ingredientUnit], ingredient[ingredientDescription])}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

DisplayRecipeIngredients.propTypes = {
  recipeIngredients: PropTypes.array.isRequired,
  recipePortions: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default DisplayRecipeIngredients;
