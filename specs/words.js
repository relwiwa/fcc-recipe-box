import Numerus from '../models/numerus';

export const filterDescription = 'Recipes';

export const formInputTypes = {
  number: 'number',
  text: 'text',
};

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
  dessert: new Numerus('dessert', 'Dessert', 'Desserts'),
  mainDish: new Numerus('mainDish', 'Main Dish', 'Main Dishes'),
  salad: new Numerus('salad', 'Salad', 'Salads'),
  starter: new Numerus('starter', 'Starter', 'Starters'),
};

export const recipeProperties = {
  recipeCategory: 'recipeCategory',
  recipeDescription: 'recipeDescription',
  recipeId:  'recipeId',
  recipeIngredients: 'recipeIngredients',
  recipePortions: 'recipePortions',
  recipePreparation: 'recipePreparation',
  recipeTitle: 'recipeTitle',
};

export const units = {
  bottle: new Numerus('bottle', 'Bottle', 'Bottles'),
  piece: new Numerus('piece', 'Piece', 'Pieces'),
  gram: new Numerus('gram', 'Gram', 'Grams'),
  liter: new Numerus('liter', 'Liter', 'Liters'),
  pack: new Numerus('pack', 'Pack', 'Packs'),
  pinch: new Numerus('pinch', 'Pinch', 'Pinches'),
  spoon: new Numerus('spoon', 'Spoon', 'Spoons'),
  teaSpoon: new Numerus('teaSpoon', 'Tea Spoon', 'Tea Spoons'),
};
