import React from 'react';
import PropTypes from 'prop-types';

import ManageRecipe from './manage-recipe';

const EditRecipe = ({ cancelEditRecipe, recipe, updateRecipe }) => {
  return (
    <div className="add-recipe">
      <ManageRecipe
        cancelFormInput={cancelEditRecipe}
        recipe={recipe}
        saveRecipe={updateRecipe}
      />
    </div>
  );
}

EditRecipe.propTypes = {
  cancelEditRecipe: PropTypes.func.isRequired,
  recipe: PropTypes.object.isRequired,
  updateRecipe: PropTypes.func.isRequired,
};

export default EditRecipe;
