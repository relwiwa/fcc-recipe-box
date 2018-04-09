import React from 'react';
import PropTypes from 'prop-types';

import { ingredientProperties } from '../specs/words';
const { ingredientDescription, ingredientQuantity, ingredientUnit } = ingredientProperties;

const DisplayRecipe = ({ deleteCurrentRecipe, editCurrentRecipe, recipe = {}, resetCurrentRecipe }) => {
  const { recipeDescription, recipeImage, recipeIngredients, recipeTitle, recipePreparation } = recipe;

  return (
    <div className="display-recipe grid-x grid-margin-y align-center">
      <div className="cell callout primary text-center" style={{background: '#1779ba', color: '#d7ecfa'}}>
        <h1>{recipeTitle}</h1>
        <hr />
        <div className="grid-x grid-margin-y grid-margin-x align-middle align-center">
          <div className="cell medium-6 medium-order-2 large-7">{recipeDescription}</div>
          <div className="cell medium-6 medium-order-1 large-5">
            <div className="grid-x align-center medium-align-left">
              <div className="cell small-8 medium-10 large-12">
                <img src={recipeImage} title={'Image of ' + recipeTitle} alt={'Image of ' + recipeTitle} style={{borderRadius: '100%', boxShadow: '0px 0px 10px'}} />
              </div>
            </div>
          </div>      
        </div>
        <hr />
        <div className="grid-x grid-margin-x grid-margin-y">
          <h2 className="cell"><span className="fa fa-shopping-bag"></span> Ingredients <span className="fa fa-shopping-bag"></span></h2>
          {recipeIngredients.map((ingredient, index) => (
            <div key={index} className="callout primary cell small-6 medium-4">
              {ingredient[ingredientQuantity]} {ingredient[ingredientUnit]} {ingredient[ingredientDescription]}
            </div>
          ))}
        </div>
        <hr />
        <div className="grid-x grid-padding-x grid-margin-x grid-margin-y">
          <h2 className="cell"><span className="fa fa-cogs"></span> Preparation <span className="fa fa-cogs"></span></h2>
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
            onClick={deleteCurrentRecipe}
          >
            <span className="fa fa-trash-o"></span> Delete
          </a>
          <a
            className="button secondary"
            onClick={editCurrentRecipe}
          >
            <span className="fa fa-edit"></span> Edit
          </a>
          <a
            className="button"
            onClick={() => resetCurrentRecipe()}          
          >
            Go Back <span className="fa fa-level-up"></span>
          </a>
        </div>
      </div>
    </div>
  );
};

DisplayRecipe.propTypes = {
  deleteCurrentRecipe: PropTypes.func.isRequired,
  editCurrentRecipe: PropTypes.func.isRequired,
  recipe: PropTypes.object.isRequired,
  resetCurrentRecipe: PropTypes.func.isRequired,
};

export default DisplayRecipe;
