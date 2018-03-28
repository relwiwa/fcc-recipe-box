import React from 'react';
import PropTypes from 'prop-types';

const RecipeList = ({children}) => {
  return (
    <div className="recipe-list">
      {children !== undefined && <div className="grid-x grid-padding-x grid-margin-x small-up-1 medium-up-3">{children}</div>}
      {children === undefined && <div>---</div>}
    </div>
  );
};

export default RecipeList;
