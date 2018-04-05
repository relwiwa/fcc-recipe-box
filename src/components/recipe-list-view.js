import React from 'react';
import PropTypes from 'prop-types';

import RecipeList from './recipe-list';
import RecipeListControls from './recipe-list-controls';
import RecipeListItem from './recipe-list-item';

import { filterDescription } from '../specs/words';

const RecipeListView = ({ currentCategoryFilters = [], recipeCategories = [], recipes = {}, updateCategoryFilters = (() => {}), updateCurrentRecipe = (() => {}), updateMode = (() => {}) }) => {

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
      <RecipeList>
        {Object.keys(recipes).map(key => {
          if (currentCategoryFilters.indexOf(recipes[key].category) < 0) {
            return <RecipeListItem
              key={recipes[key].recipeId}
              description={recipes[key].recipeDescription}
              id={recipes[key].recipeId}
              image={recipes[key].recipeImage}
              title={recipes[key].recipeTitle}
              updateCurrentRecipe={updateCurrentRecipe}
            />
          }
        })}
      </RecipeList>
      {renderRecipeListControls()}
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
