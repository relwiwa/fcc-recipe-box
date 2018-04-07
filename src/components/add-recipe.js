import React from 'react';
import PropTypes from 'prop-types';

import Ingredient from '../models/ingredient';
import Recipe from '../models/recipe';
import ManageRecipe from './manage-recipe';

const AddRecipe = ({ addRecipe, cancelAddRecipe }) => {
  return (
    <div className="add-recipe">
      <ManageRecipe
        cancelFormInput={cancelAddRecipe}
        recipe={new Recipe(null, '', null, '', [new Ingredient()], [], '')}
        saveRecipe={addRecipe}
      />
    </div>
  );
}

AddRecipe.propTypes = {
  addRecipe: PropTypes.func.isRequired,
  cancelAddRecipe: PropTypes.func.isRequired,
};

export default AddRecipe;
