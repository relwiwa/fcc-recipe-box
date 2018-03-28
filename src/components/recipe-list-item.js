import React from 'react';
import PropTypes from 'prop-types';

const RecipeListItem = ({ description, image, title }) => {
  return (
    <div className="recipe-list-item cell card align-self-stretch">
        <div className="card-section">
          {image !== undefined && <img src={image} style={{borderRadius: '100%'}}/>}
        </div>
        <div className="card-section">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
    </div>
  );
};

RecipeListItem.propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default RecipeListItem;
