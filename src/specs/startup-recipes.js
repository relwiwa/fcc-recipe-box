import { Ingredient, Recipe } from './models';
import { recipeCategories, units } from './words';

const { dessert, mainDish, salad, starter } = recipeCategories;
const { kg, liter, piece } = units;

export const startupRecipes = {
  'abcdefgh-id': new Recipe(
    'abcdefgh-id',
    'Simple Mixed Salad',
    salad,
    'A simple mixed salad that will make you happy',
    [
      new Ingredient('1', piece, 'lettuce'),
      new Ingredient('2', piece, 'carrots'),
    ],
    [
      'This is the first step',
      'This is the second step',
    ],
    'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2004/1/23/1/ss1d27_mixed_green_salad.jpg.rend.hgtvcom.616.462.suffix/1386276604828.jpeg',
  ),
  'decdefgh-id': new Recipe(
    'deabcdefgh-id',
    'Another Simple Mixed Salad',
    salad,
    'Another simple mixed salad that will make you happy',
    [
      new Ingredient('1', piece, 'lettuce'),
      new Ingredient('2', piece, 'carrots'),
    ],
    [
      'This is the first step',
      'This is the second step',
    ],
    'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2004/1/23/1/ss1d27_mixed_green_salad.jpg.rend.hgtvcom.616.462.suffix/1386276604828.jpeg'
  ),
};
