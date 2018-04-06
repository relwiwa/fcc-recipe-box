import { Numerus } from './models';

export const filterDescription = 'Recipes';

export const formRecipeTabs = {
  general: 'General',
  ingredients: 'Ingredients',
  preparation: 'Preparation',
};

export const modes = {
  addRecipe: 'addRecipe',
  displayRecipes: 'displayRecipes',
  editRecipe: 'editRecipe',
};

export const recipeCategories = {
  dessert: new Numerus('Dessert', 'Desserts'),
  mainDish: new Numerus('Main Dish', 'Main Dishes'),
  salad: new Numerus('Salad', 'Salads'),
  starter: new Numerus('Starter', 'Starters'),
};

export const recipeProperties = {
  recipeCategory: 'recipeCategory',
  recipeDescription: 'recipeDescription',
  recipeId:  'recipeId',
  recipeImage: 'recipeImage',
  recipeIngredients: 'recipeIngredients',
  recipeSteps: 'recipeSteps',
  recipeTitle: 'recipeTitle',
};

export const units = {
  piece: new Numerus('piece of', 'pieces of'),
  gram: new Numerus('gram', 'grams'),
  liter: new Numerus('liter', 'liters'),
};
