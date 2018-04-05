import FormRadioInput from '../reusable-components/form-radio-input';
import FormTextInput from '../reusable-components/form-text-input';
import FormTextarea from '../reusable-components/form-text-input';

import { FormTabElement } from './models';
import { manageRecipeTabTitles, recipeCategories, recipeProperties } from './words';

const { dessert, mainDish, salad, starter } = recipeCategories;
const { recipeCategory, recipeDescription, recipeImage, recipeTitle } = recipeProperties;
const { general, ingredients, preparation } = manageRecipeTabTitles;

const formTabElementOrder = {};
formTabElementOrder[general] = [recipeTitle, recipeDescription, recipeCategory, recipeImage];
formTabElementOrder[ingredients] = [];
formTabElementOrder[preparation] = [];

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
  'Enter Between 50 And 250 Characters',
  FormTextarea,
  ((elementContent) => {
    return ((elementContent.length >= 50 && elementContent.length <= 250) ? true : false);
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

formTabElementSpecs[recipeImage] = new FormTabElement(
  'Do You Want To Add An Image To Your Recipe?',
  null,
  'URL Of An Image Of Your Recipe',
  false,
  'Enter A Proper Image URL (Optional)',
  FormTextInput,
  ((elementContent) => {
    if (elementContent !== '') {
      const expression = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)(.*\.(?:png|jpg|jpeg|gif|svg))/gi;
      const regExp = new RegExp(expression);
      return (elementContent.match(regExp) !== null ? true : false);
    }
    else {
      return null;
    }
  }),
);

const formTabOrder = [general, ingredients, preparation];

export { formTabElementOrder, formTabElementSpecs, formTabOrder };
