import React from 'react';
import PropTypes from 'prop-types';

const DisplayRecipe = ({ recipe = {}, resetCurrentRecipe = (() => {}) }) => {
  const { description, image, ingredients, recipeTitle, steps } = recipe;

  return (
    <div className="display-recipe grid-x grid-margin-y align-center">
      <div className="cell callout primary large-10 text-center" style={{background: '#1779ba', color: '#d7ecfa'}}>
        <h1>{recipeTitle}</h1>
        <hr />
        <div className="grid-x grid-margin-y grid-margin-x align-middle">
          <div className="cell medium-6 medium-order-2">{description}</div>
          <div className="cell medium-6 medium-order-1">
            <div className="grid-x">
              <div className="cell small-8 medium-10">
                <img src={image} title={'Image of ' + recipeTitle} alt={'Image of ' + recipeTitle} style={{borderRadius: '100%', boxShadow: '0px 0px 10px'}} />
              </div>
            </div>
          </div>      
        </div>
        <hr />
        <div className="grid-x grid-margin-x grid-margin-y">
          <h2 className="cell"><span className="fa fa-shopping-bag"></span> Ingredients <span className="fa fa-shopping-bag"></span></h2>
          {ingredients.map((ingredient, index) => (
            <div key={index} className="callout primary cell small-6 medium-4">
              {ingredient.quantity} {ingredient.unit} {ingredient.description}
            </div>
          ))}
        </div>
        <hr />
        <div className="grid-x grid-padding-x grid-margin-x grid-margin-y">
          <h2 className="cell"><span className="fa fa-cogs"></span> Preparation <span className="fa fa-cogs"></span></h2>
          <div className="cell">
            <div className="grid-x grid-margin-x grid-margin-y">
              {steps.map((step, index) => (
                <div key={index} className="cell medium-6 large-4 callout primary">
                  <h4>Step {index + 1}</h4>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="cell large-10">
        <div className="button-group align-right">
          <a
            className="button secondary"
          >
            Edit
          </a>
          <a
            className="button"
            onClick={() => resetCurrentRecipe()}          
          >
            Go Back
          </a>
        </div>
      </div>
    </div>
  );
};

DisplayRecipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  resetCurrentRecipe: PropTypes.func.isRequired,
};

export default DisplayRecipe;
