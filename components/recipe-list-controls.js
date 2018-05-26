import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import CategoryFilter from '../../../reusable-components/category-filter';
import IconButton from '../../../reusable-components/icon-button';

import { modes } from '../specs/words';

const RecipeListControls = ({ currentCategoryFilters, filterDescription, recipeCategories, updateCategoryFilters, updateMode }) => {
  return (
    <div className="recipe-list-controls grid-x grid-margin-x align-middle">
      <div className="cell small-7 medium-9">
        <CategoryFilter
          currentCategoryFilters={currentCategoryFilters}
          filterCategories={recipeCategories}
          filterDescription={filterDescription}
          updateCategoryFilters={updateCategoryFilters}
        />
      </div>
      <div className="cell small-5 medium-3 button-group expanded">
        <IconButton
          faIcon="plus"
          foundationClass="warning"
          onClick={() => updateMode(modes.addRecipe)}
          onKeyPress={() => updateMode(modes.addRecipe)}
          tabIndex="0"
          text={<Fragment><br className="show-for-small-only" /> Add Recipe</Fragment>}
        />
      </div>
    </div>
  );
};

RecipeListControls.defaultValues = {
  currentCategoryFilters: [],
  filterDescription: '',
  recipeCategories: [],
  updateCategoryFilters: (() => {}),
  updateMode: (() => {}),
}

RecipeListControls.propTypes = {
  currentCategoryFilters: PropTypes.array.isRequired,
  filterDescription: PropTypes.string,
  recipeCategories: PropTypes.array.isRequired,
  updateCategoryFilters: PropTypes.func.isRequired,
  updateMode: PropTypes.func.isRequired,
};

export default RecipeListControls;
