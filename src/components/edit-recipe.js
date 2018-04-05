import React from 'react';
import PropTypes from 'prop-types';

import ManageRecipe from './manage-recipe';

const EditRecipe = ({ recipe, updateRecipe }) => {
  return (
    <div className="add-recipe">
      <ManageRecipe
        recipe={recipe}
        saveRecipe={updateRecipe}
      />
    </div>
  );
}

EditRecipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  updateRecipe: PropTypes.func.isRequired,
};

export default EditRecipe;
