import Numerus from '../models/numerus';

export const filterDescription = 'Recipes';

export const formRecipeTabs = {
  general: 'General',
  ingredients: 'Ingredients',
  preparation: 'Preparation',
};

export const ingredientProperties = {
  ingredientDescription: 'ingredientDescription',
  ingredientQuantity: 'ingredientQuantity',
  ingredientUnit: 'ingredientUnit',
};

export const localStorageStoredRecipes = 'storedRecipes';

export const modes = {
  addRecipe: 'addRecipe',
  displayRecipes: 'displayRecipes',
  editRecipe: 'editRecipe',
  loadRecipes: 'loadRecipes',
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
  recipePreparation: 'recipePreparation',
  recipeTitle: 'recipeTitle',
};

export const units = {
  piece: new Numerus('piece of', 'pieces of'),
  gram: new Numerus('gram', 'grams'),
  liter: new Numerus('liter', 'liters'),
};
