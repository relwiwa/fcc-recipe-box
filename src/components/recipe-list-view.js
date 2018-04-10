import React from 'react';
import PropTypes from 'prop-types';

import RecipeList from './recipe-list';
import RecipeListControls from './recipe-list-controls';
import RecipeListItem from './recipe-list-item';

import { filterDescription, recipeProperties } from '../specs/words';
const { recipeCategory, recipeId, recipeDescription, recipeTitle } = recipeProperties;

const RecipeListView = ({ currentCategoryFilters = [], recipeCategories = [], recipes = {}, updateCategoryFilters, updateCurrentRecipe, updateMode }) => {
  const getFilteredRecipes = (allRecipes, filters) => {
    const filteredRecipes = {};
    Object.keys(allRecipes).map(recipeId => {
      if (filters.indexOf(allRecipes[recipeId][recipeCategory]) < 0) {
        filteredRecipes[recipeId] = allRecipes[recipeId];
      }
    });
    return filteredRecipes;
  };

  const renderRecipeListControls = () => {
    return <RecipeListControls
      currentCategoryFilters={currentCategoryFilters}
      filterDescription={filterDescription}
      recipeCategories={recipeCategories}
      updateCategoryFilters={updateCategoryFilters}
      updateMode={updateMode}
    />;
  }

  const filteredRecipes = getFilteredRecipes(recipes, currentCategoryFilters);
  const amountOfRecipes = Object.keys(recipes).length;
  const amountOfFilteredRecipes = Object.keys(filteredRecipes).length;

  return (
    <div className="recipe-list-view">
      {renderRecipeListControls()}
      {amountOfRecipes === 0 && <div className="callout primary text-center">
        There are no more recipes in your Recipe Box.
      </div>}
      {amountOfRecipes !== 0 && amountOfFilteredRecipes === 0 && <div className="callout primary text-center">
        There are no recipes according to your filter selection.
      </div>}
      {amountOfRecipes > 0 && <RecipeList>
        {Object.keys(filteredRecipes).map(key => {
          return <RecipeListItem
            key={recipes[key][recipeId]}
            description={recipes[key][recipeDescription]}
            id={recipes[key][recipeId]}
            title={recipes[key][recipeTitle]}
            updateCurrentRecipe={updateCurrentRecipe}
          />
        })}
      </RecipeList>}
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
