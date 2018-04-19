import FormInput from '../reusable-components/form-input';
import FormRadioInput from '../reusable-components/form-radio-input';
import FormTextInputList from '../reusable-components/form-text-input-list';
import FormTextarea from '../reusable-components/form-textarea';
import ManageRecipeIngredients from '../components/manage-recipe-ingredients';

import FormTabElement from '../models/form-tab-element';
import FormTabSpec from '../models/form-tab-specs';
import { formInputTypes, formRecipeTabs, ingredientProperties, recipeCategories, recipeProperties } from './words';

const { ingredientDescription, ingredientQuantity, ingredientUnit } = ingredientProperties;
const { dessert, mainDish, salad, starter } = recipeCategories;
const { recipeCategory, recipeDescription, recipeIngredients, recipePortions, recipePreparation, recipeTitle } = recipeProperties;
const { general, ingredients, preparation } = formRecipeTabs;

const formTabElementOrder = {};
formTabElementOrder[general] = [recipeTitle, recipeDescription, recipeCategory];
formTabElementOrder[ingredients] = [recipePortions, recipeIngredients];
formTabElementOrder[preparation] = [recipePreparation];

const formTabElementSpecs = {};
formTabElementSpecs[recipeTitle] = new FormTabElement(
  {
    type: formInputTypes.text,
  },
  'What Is The Title Of Your Recipe?',
  null,
  'Recipe Title',
  true,
  'Enter At Least 5 Characters',
  FormInput,
  ((elementContent) => {
    return ((elementContent.length >= 5) ? true : false);
  }),
);

formTabElementSpecs[recipeDescription] = new FormTabElement(
  null,
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
  null,
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
  null,
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

formTabElementSpecs[recipePortions] = new FormTabElement(
  {
    type: formInputTypes.number,
    min: '1',
  },
  'How Many Portions Are The Following Ingredients For?',
  null,
  'Number Of Portions',
  true,
  'Enter A Number Greater Or Equal To 1',
  FormInput,
  ((elementContents) => {
    if (elementContents <= 0) {
      return false;
    }
    else {
      return true;
    }
  }),
);

formTabElementSpecs[recipeIngredients] = new FormTabElement(
  null,
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
