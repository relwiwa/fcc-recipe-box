import React from 'react';
import PropTypes from 'prop-types';

const RecipeListItem = ({ description = '', id = '', image, title = '', updateCurrentRecipe = (() => {}) }) => {
  return (
    <div
      className="recipe-list-item cell callout align-self-stretch text-center"
      style={{background: '#1779ba', color: '#d7ecfa'}}
      onClick={() => updateCurrentRecipe(id)}
    >
      <div className="grid-x grid-margin-x grid-margin-y align-center">
        <div className="cell small-8 medium-10">
          {image !== undefined && <img src={image} style={{borderRadius: '100%', boxShadow: '0px 0px 10px'}}/>}
        </div>
        <h4 className="cell">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

RecipeListItem.propTypes = {
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  updateCurrentRecipe: PropTypes.func.isRequired,
};

export default RecipeListItem;
