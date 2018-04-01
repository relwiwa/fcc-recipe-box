import React from 'react';
import PropTypes from 'prop-types';

import CategoryFilter from '../reusable-components/category-filter';

const RecipeListControls = ({ currentCategoryFilters = [], filterDescription = '', recipeCategories = [], updateCategoryFilters = (() => {}) }) => {
  return (
    <div className="recipe-list-controls grid-x grid-margin-x align-middle">
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
  );
};

RecipeListControls.propTypes = {
  currentCategoryFilters: PropTypes.array.isRequired,
  filterDescription: PropTypes.string,
  recipeCategories: PropTypes.array.isRequired,
  updateCategoryFilters: PropTypes.func.isRequired,
};

export default RecipeListControls;
