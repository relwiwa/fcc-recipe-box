import Ingredient from '../models/ingredient';
import Recipe from '../models/recipe';
import { recipeCategories, units } from './words';

const { dessert, mainDish, salad, starter } = recipeCategories;
const { bottle, gram, liter, pack, piece, spoon, teaSpoon } = units;

export const startupRecipes = {
  '1ad19e0e-3c37-11e8-b467-0ed5f89f718b': new Recipe(
    '1ad19e0e-3c37-11e8-b467-0ed5f89f718b',
    'Ma Po Tofu',
    mainDish.plural,
    'A traditional Chinese dish prepared with Tofu and meat. It is spicy indeed.',
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
      'Add the sauce thickener',
      'Add the rest of the spring onions',
    ],
  ),
};
