import Ingredient from '../models/ingredient';
import Recipe from '../models/recipe';
import { recipeCategories, units } from './words';

const { dessert, mainDish, salad, starter } = recipeCategories;
const { kg, liter, piece } = units;

export const startupRecipes = {
  'abcdefgh-id': new Recipe(
    'abcdefgh-id',
    'Simple Mixed Salad',
    salad.plural,
    'A simple mixed salad that will make you happy',
    [
      new Ingredient('1', piece.singular, 'lettuce'),
      new Ingredient('2', piece.plural, 'carrots'),
    ],
    [
      'This is the first first first first first step',
      'This is the second second second second step',
    ],
  ),
  'deabcdefgh-id': new Recipe(
    'deabcdefgh-id',
    'Another Simple Mixed Salad',
    salad.plural,
    'Another simple mixed salad that will make you happy',
    [
      new Ingredient('1', piece.singular, 'lettuce'),
      new Ingredient('2', piece.plural, 'carrots'),
      new Ingredient('5', piece.plural, 'pumpkins'),
    ],
    [
      'This is the first first first first first step',
      'This is the second step This is the second step This is the second step This is the second step This is the second step This is the second step',
      'This is the third third third third third step',
    ],
  ),
};
