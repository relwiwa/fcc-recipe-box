import Ingredient from '../models/ingredient';
import Recipe from '../models/recipe';
import { recipeCategories, units } from './words';

const { dessert, mainDish, salad, starter } = recipeCategories;
const { bottle, gram, liter, pack, piece, pinch, spoon, teaSpoon } = units;

export const startupRecipes = {
  '1ad19e0e-3c37-11e8-b467-0ed5f89f718b': new Recipe(
    '1ad19e0e-3c37-11e8-b467-0ed5f89f718b',
    'Ma Po Tofu',
    mainDish.plural,
    'A traditional Chinese dish prepared with Tofu and meat. It is spicy indeed',
    [
      new Ingredient('4', piece.plural, 'Spring Onions'),
      new Ingredient('1', piece.singular, 'Ginger'),
      new Ingredient('500', gram.plural, 'Minced Meat'),
      new Ingredient('500', gram.plural, 'Tofu'),
      new Ingredient('1', pack.singular, 'Ma Po Tofu Sauce'),
      new Ingredient('1', spoon.plural, 'Sauce Thickener'),
      new Ingredient('2', spoon.plural, 'Rice Wine'),
      new Ingredient('2', spoon.plural, 'Oil'),
    ],
    [
      'Cut the spring onions into pieces',
      'Cut the ginger into small pieces',
      'Cut the tofu into square pieces',
      'Put the oil into a pan. When it is hot, put part of the spring onions along with the ginger in it',
      'After a while, put the minced meat into the pan too',
      'After 2 minutes, pour the rice wine into the pan',
      'Put the tofu sauce along with the tofu itself in the pan. Put water into the pan too, until everything is covered by it',
      'Put water into the pan until everything is covered by it.',
      'Cover the pan and cook for 10 minutes',
      'Add the sauce thickener to the pan',
      'Add the rest of the spring onions',
    ],
  ),
  'b0be8fbc-3c96-11e8-b467-0ed5f89f718b': new Recipe(
    'b0be8fbc-3c96-11e8-b467-0ed5f89f718b',
    'Snow Peas In Lemon Butter',
    starter.plural,
    'An easy to prepare, vegetarian starter dish',
    [
      new Ingredient('400', gram.plural, 'Snow Peas'),
      new Ingredient('1', piece.singular, 'Lemon'),
      new Ingredient('2', spoon.plural, 'Butter'),
      new Ingredient('1', pinch.singular, 'Salt'),
      new Ingredient('1', pinch.singular, 'Pepper'),
      new Ingredient('1', pinch.singular, 'Sugar'),
    ],
    [
      'Rub off the lemon peel, before you squeeze the juice from it',
      'Wash the snow peas and dry them. Cut off the endings on each side',
      'Put the butter in a pan and heat it on medium heat',
      'Put half of the lemon peel into the pan',
      'Put the snow peas in the pan and get the lemon butter on them',
      'Cover the pan and steam them for 8 to 10 minutes',
      'Put the salt, pepper, lemon juice and sugar into the pan',
      'Cover it all with the rest of the lemon peel',
    ],
  ),
  '34df8178-3c99-11e8-b467-0ed5f89f718b': new Recipe(
    '34df8178-3c99-11e8-b467-0ed5f89f718b',
    'Mixed Salad With Mushrooms',
    salad.plural,
    'A nice and easy to prepare mixed salad. The warm mushrooms along with some black olives make it special',
    [
      new Ingredient('0.5', piece.singular, 'Lettuce'),
      new Ingredient('1', piece.singular, 'Carrot'),
      new Ingredient('0.5', piece.singular, 'Pepper'),
      new Ingredient('80', gram.plural, 'Corn'),
      new Ingredient('250', gram.plural, 'Mushrooms'),
      new Ingredient('10', piece.plural, 'Black Olives'),
      new Ingredient('2', spoon.plural, 'Olive Oil'),
      new Ingredient('2', spoon.plural, 'Balsamico Vinegar'),
      new Ingredient('2', pinch.plural, 'Pepper'),
      new Ingredient('2', spoon.plural, 'Oil'),
    ],
    [
      'Wash all of the vegetables before you use them',
      'Tear the lettuce into small pieces and put it in the salad bowl',
      'Cut the pepper into stripes and put it in the salad bowl along with the corn',
      'Cut the mushrooms into slices',
      'Put oil into a pan and heat it.',
      'Put the mushrooms along with pepper in it. Fry them for 10 to 12 minutes',
      'Meanwhile peel the carrot, cut it into small pieces and put it in the bowl',
      'Cut the olives in half and put them in the bowl',
      'Put the olive oil and balsamico vinegar into the salad bowl and mix everything',
      'Put the warm mushrooms in the salad bowl',
    ],
  ),
};
