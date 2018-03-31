import { Numerus } from './models';

export const recipeCategories = {
  dessert: 'dessert',
  mainDish: 'mainDish',
  salad: 'salad',
  starter: 'starter',
};

export const units = {
  piece: new Numerus('piece', 'pieces'),
  gram: new Numerus('gram', 'grams'),
  liter: new Numerus('liter', 'liters'),
};
