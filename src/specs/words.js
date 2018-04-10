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
  recipeIngredients: 'recipeIngredients',
  recipePreparation: 'recipePreparation',
  recipeTitle: 'recipeTitle',
};

export const units = {
  bottle: new Numerus('Bottle', 'Bottles'),
  piece: new Numerus('Piece', 'Pieces'),
  gram: new Numerus('Gram', 'Grams'),
  liter: new Numerus('Liter', 'Liters'),
  pack: new Numerus('Pack', 'Packs'),
  pinch: new Numerus('Pinch', 'Pinches'),
  spoon: new Numerus('Spoon', 'Spoons'),
  teaSpoon: new Numerus('Tea Spoon', 'Tea Spoons'),
};
