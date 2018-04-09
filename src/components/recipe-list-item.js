import React from 'react';
import PropTypes from 'prop-types';

const RecipeListItem = ({ description = '', id = '', title = '', updateCurrentRecipe }) => {
  return (
    <div
      className="recipe-list-item cell callout align-self-stretch text-center"
      style={{background: '#1779ba', color: '#d7ecfa', cursor: 'pointer'}}
      onClick={() => updateCurrentRecipe(id)}
    >
      <div className="grid-x grid-margin-x grid-margin-y align-center">
        <h4 className="cell">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

RecipeListItem.propTypes = {
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  updateCurrentRecipe: PropTypes.func.isRequired,
};

export default RecipeListItem;
