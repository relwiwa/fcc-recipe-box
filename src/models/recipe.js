import Ingredient from './ingredient';

export default class Recipe {
  constructor(recipeId = null, recipeTitle = '', recipeCategory = null, recipeDescription = '', recipePortions = null, recipeIngredients = [new Ingredient()], recipePreparation = ['']) {
    this.recipeCategory = recipeCategory;
    this.recipeDescription = recipeDescription;
    this.recipeId = recipeId;
    this.recipeIngredients = recipeIngredients;
    this.recipePortions = recipePortions;
    this.recipePreparation = recipePreparation;
    this.recipeTitle = recipeTitle;
  }
}
