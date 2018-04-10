import FormRadioInput from '../reusable-components/form-radio-input';
import FormTextInput from '../reusable-components/form-text-input';
import FormTextInputList from '../reusable-components/form-text-input-list';
import FormTextarea from '../reusable-components/form-text-input';
import ManageRecipeIngredients from '../components/manage-recipe-ingredients';

import FormTabElement from '../models/form-tab-element';
import FormTabSpec from '../models/form-tab-specs';
import { ingredientProperties, recipeCategories, recipeProperties, formRecipeTabs } from './words';

const { ingredientDescription, ingredientQuantity, ingredientUnit } = ingredientProperties;
const { dessert, mainDish, salad, starter } = recipeCategories;
const { recipeCategory, recipeDescription, recipeImage, recipeIngredients, recipePreparation, recipeTitle } = recipeProperties;
const { general, ingredients, preparation } = formRecipeTabs;

const formTabElementOrder = {};
formTabElementOrder[general] = [recipeTitle, recipeDescription, recipeCategory];
formTabElementOrder[ingredients] = [recipeIngredients];
formTabElementOrder[preparation] = [recipePreparation];

const formTabElementSpecs = {};
formTabElementSpecs[recipeTitle] = new FormTabElement(
  'What Is The Title Of Your Recipe?',
  null,
  'Recipe Title',
  true,
  'Enter At Least 5 Characters',
  FormTextInput,
  ((elementContent) => {
    return ((elementContent.length >= 5) ? true : false);
  }),
);

formTabElementSpecs[recipeDescription] = new FormTabElement(
  'Add A Short Description Of Your Recipe',
  null,
  'Short Description Of Recipe',
  true,
  'Enter Between 25 And 150 Characters',
  FormTextarea,
  ((elementContent) => {
    return ((elementContent.length >= 25 && elementContent.length <= 150) ? true : false);
  }),
);

formTabElementSpecs[recipeCategory] = new FormTabElement(
  'Chose A Category For Your Recipe',
  [starter.plural, mainDish.plural, salad.plural, dessert.plural],
  null,
  true,
  'Chose One Recipe Category',
  FormRadioInput,
  ((elementContent) => {
    return (elementContent !== null) ? true: false;
  }),
);

formTabElementSpecs[recipePreparation] = new FormTabElement(
  'List The Steps To Prepare The Dish',
  null,
  'Recipe Preparation Step',
  true,
  'Enter At Least 10 Characters For Each Step',
  FormTextInputList,
  ((elementContents) => {
    if (elementContents.length <= 0) {
      return false;
    }
    else {
      let allValid = true;
      elementContents.map(elementContent => {
        if (elementContent.length < 10) {
          allValid = false;
        }
      });
      return allValid;        
    }
  }),
);

formTabElementSpecs[recipeIngredients] = new FormTabElement(
  'List All Of The Ingredients',
  null,
  'Recipe Ingredient',
  true,
  'Enter The Quantity, Unit, And Description For All Ingredients',
  ManageRecipeIngredients,
  ((elementContents) => {
    if (elementContents.length <= 0) {
      return false;
    }
    else {
      let allValid = true;
      elementContents.map(elementContent => {
        const quantityNumber = Number(elementContent[ingredientQuantity]);
        if (quantityNumber <= 0 || String(quantityNumber) !== elementContent[ingredientQuantity]) {
          allValid = false;
        }
        if (elementContent[ingredientUnit] === null) {
          allValid = false;
        }
        if (elementContent[ingredientDescription].length < 2) {
          allValid = false;
        }
      });
      return allValid;        
    }
  }),
);

const formTabSpecs = [
  new FormTabSpec(general, 'fa-info'),
  new FormTabSpec(ingredients, 'fa-shopping-bag'),
  new FormTabSpec(preparation, 'fa-cogs'),
];

export { formTabElementOrder, formTabElementSpecs, formTabSpecs };
