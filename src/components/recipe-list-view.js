import React from 'react';
import PropTypes from 'prop-types';

import RecipeList from './recipe-list';
import CategoryFilter from '../reusable-components/category-filter';
import RecipeListItem from './recipe-list-item';

import { filterDescription } from '../specs/words';

const RecipeListView = ({ currentCategoryFilters = [], recipeCategories = [], recipes = {}, updateCategoryFilters = (() => {}) }) => {

  return (
    <div className="recipe-list-view">
      <div className="grid-x grid-margin-x align-middle">
        <div className="cell small-8">
          <CategoryFilter
            currentCategoryFilters={currentCategoryFilters}
            filterCategories={recipeCategories}
            filterDescription={filterDescription}
            updateCategoryFilters={updateCategoryFilters}
          />
        </div>
        <div className="cell small-4 button-group expanded">
          <a className="button success">Add Recipe</a>
        </div>
      </div>
      <RecipeList>
        {Object.keys(recipes).map(key => {
          if (currentCategoryFilters.indexOf(recipes[key].category) < 0) {
            return <RecipeListItem
              key={recipes[key].id}
              description={recipes[key].description}
              image={recipes[key].image}
              title={recipes[key].recipeTitle}
            />
          }
        })}
      </RecipeList>
    </div>
  );
};

RecipeListView.propTypes = {
  currentCategoryFilters: PropTypes.array.isRequired,
  recipeCategories: PropTypes.array.isRequired,
  recipes: PropTypes.object.isRequired,
  updateCategoryFilters: PropTypes.func.isRequired,
};

export default RecipeListView;
