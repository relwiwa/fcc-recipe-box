import { Numerus } from './models';

export const filterDescription = 'Recipes';

export const recipeCategories = {
  dessert: new Numerus('Dessert', 'Desserts'),
  mainDish: new Numerus('Main Dish', 'Main Dishes'),
  salad: new Numerus('Salad', 'Salads'),
  starter: new Numerus('Starter', 'Starters'),
};

export const units = {
  piece: new Numerus('piece', 'pieces'),
  gram: new Numerus('gram', 'grams'),
  liter: new Numerus('liter', 'liters'),
};
