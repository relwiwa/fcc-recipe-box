import React from 'react';
import PropTypes from 'prop-types';

import RecipeList from './recipe-list';
import RecipeListControls from './recipe-list-controls';
import RecipeListItem from './recipe-list-item';

import { filterDescription, recipeProperties } from '../specs/words';
const { recipeId, recipeDescription, recipeTitle } = recipeProperties;

const RecipeListView = ({ currentCategoryFilters = [], recipeCategories = [], recipes = {}, updateCategoryFilters, updateCurrentRecipe, updateMode }) => {
  const amountOfRecipes = Object.keys(recipes).length;

  const renderRecipeListControls = () => {
    return <RecipeListControls
      currentCategoryFilters={currentCategoryFilters}
      filterDescription={filterDescription}
      recipeCategories={recipeCategories}
      updateCategoryFilters={updateCategoryFilters}
      updateMode={updateMode}
    />;
  }

  return (
    <div className="recipe-list-view">
      {renderRecipeListControls()}
      {amountOfRecipes === 0 && <div className="callout primary text-center">
        There are no more recipes in your Recipe Box.
      </div>}
      {amountOfRecipes > 0 && <RecipeList>
        {Object.keys(recipes).map(key => {
          if (currentCategoryFilters.indexOf(recipes[key].recipeCategory) < 0) {
            return <RecipeListItem
              key={recipes[key][recipeId]}
              description={recipes[key][recipeDescription]}
              id={recipes[key][recipeId]}
              title={recipes[key][recipeTitle]}
              updateCurrentRecipe={updateCurrentRecipe}
            />
          }
        })}
      </RecipeList>}
      {amountOfRecipes > 0 && renderRecipeListControls()}
    </div>
  );
};

RecipeListView.propTypes = {
  currentCategoryFilters: PropTypes.array.isRequired,
  recipeCategories: PropTypes.array.isRequired,
  recipes: PropTypes.object.isRequired,
  updateCategoryFilters: PropTypes.func.isRequired,
  updateCurrentRecipe: PropTypes.func.isRequired,
  updateMode: PropTypes.func.isRequired,
};

export default RecipeListView;
