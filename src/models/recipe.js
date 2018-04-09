import Ingredient from './ingredient';

export default class Recipe {
  constructor(recipeId = null, recipeTitle = '', recipeCategory = null, recipeDescription = '', recipeIngredients = [new Ingredient()], recipePreparation = [''], recipeImage = '') {
    this.recipeCategory = recipeCategory;
    this.recipeDescription = recipeDescription;
    this.recipeId = recipeId;
    this.recipeImage = recipeImage;
    this.recipeIngredients = recipeIngredients;
    this.recipePreparation = recipePreparation;
    this.recipeTitle = recipeTitle;
  }
}
