import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import DisplayRecipeIngredients from './display-recipe-ingredients';
import ModalDialogue from '../reusable-components/modal-dialogue';

class DisplayRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  render () {
    const { showModal } = this.state;
    const { deleteCurrentRecipe, editCurrentRecipe, recipe, resetCurrentRecipe } = this.props;
    const { recipeDescription, recipeIngredients, recipePortions, recipePreparation, recipeTitle } = recipe;

    return (
      <Fragment>
        {showModal && <ModalDialogue
          closeModal={() => this.setState({ showModal: false })}
        >
          <div>
            <p className="text-center">Are you sure you want to delete this recipe?</p>
            <div className="button-group expanded stacked-for-small">
              <a
                className="button warning"
                onClick={deleteCurrentRecipe}
                onKeyPress={deleteCurrentRecipe}
                tabIndex="0"
              >Yes, Delete Recipe</a>
              <a
                className="button secondary"
                onClick={() => this.setState({ showModal: false })}
                onKeyPress={() => this.setState({ showModal: false })}
                tabIndex="0"
              >No, Cancel</a>
            </div>
          </div>
        </ModalDialogue>}
        <div className="display-recipe grid-x grid-margin-y align-center">
          <div className="cell callout primary text-center" style={{background: '#1779ba', color: '#d7ecfa'}}>
            <h1>{recipeTitle}</h1>
            <hr />
            <div className="grid-x grid-margin-y grid-margin-x align-middle align-center">
              <div className="cell">{recipeDescription}</div>
            </div>
            <hr />
            <DisplayRecipeIngredients
              recipeIngredients={recipeIngredients}
              recipePortions = {recipePortions}
            />
            <hr />
            <div className="grid-x grid-padding-x grid-margin-x grid-margin-y">
              <h2 className="cell"><FontAwesomeIcon icon="cogs" /> Preparation <FontAwesomeIcon icon="cogs" /></h2>
              <div className="cell">
                <div className="grid-x grid-margin-x grid-margin-y">
                  {recipePreparation.map((step, index) => (
                    <div key={index} className="cell medium-6 large-4 callout primary">
                      <h4>Step {index + 1}</h4>
                      <p>{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="cell small-11">
            <div className="button-group align-right">
              <a
                className="button warning"
                onClick={() => this.setState({ showModal: true })}
                onKeyPress={() => this.setState({ showModal: true })}
                tabIndex="0"
              >
                <FontAwesomeIcon icon="trash" /> Delete
              </a>
              <a
                className="button secondary"
                onClick={editCurrentRecipe}
                onKeyPress={editCurrentRecipe}
                tabIndex="0"
              >
                <FontAwesomeIcon icon="edit" /> Edit
              </a>
              <a
                className="button"
                onClick={() => resetCurrentRecipe()}
                onKeyPress={() => resetCurrentRecipe()}
                tabIndex="0"
              >
                Go Back <FontAwesomeIcon icon="level-up-alt" />
              </a>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
};

DisplayRecipe.propTypes = {
  deleteCurrentRecipe: PropTypes.func.isRequired,
  editCurrentRecipe: PropTypes.func.isRequired,
  recipe: PropTypes.object.isRequired,
  resetCurrentRecipe: PropTypes.func.isRequired,
};

export default DisplayRecipe;
