import Ingredient from './ingredient';

export default class Recipe {
  constructor(recipeId = null, recipeTitle = '', recipeCategory = null, recipeDescription = '', recipeIngredients = [new Ingredient()], recipePreparation = ['']) {
    this.recipeCategory = recipeCategory;
    this.recipeDescription = recipeDescription;
    this.recipeId = recipeId;
    this.recipeIngredients = recipeIngredients;
    this.recipePreparation = recipePreparation;
    this.recipeTitle = recipeTitle;
  }
}
