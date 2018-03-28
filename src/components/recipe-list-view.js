import React from 'react';
import PropTypes from 'prop-types';

import RecipeList from './recipe-list';
import RecipeListItem from './recipe-list-item';

const RecipeListView = ({recipes = {}}) => {
  return (
    <div className="recipe-list-view">
      <RecipeList>
        {Object.keys(recipes).map(key => {
          return <RecipeListItem
            key={recipes[key].id}
            description={recipes[key].description}
            image={recipes[key].image}
            title={recipes[key].recipeTitle}
          />
        })}
      </RecipeList>
    </div>
  );
};

RecipeListView.propTypes = {
  recipes: PropTypes.object.isRequired,
};

export default RecipeListView;
