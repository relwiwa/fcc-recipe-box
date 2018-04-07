export default class Recipe {
  constructor(recipeId, recipeTitle, recipeCategory, recipeDescription, recipeIngredients, recipePreparation, recipeImage) {
    this.recipeCategory = recipeCategory;
    this.recipeDescription = recipeDescription;
    this.recipeId = recipeId;
    this.recipeImage = recipeImage;
    this.recipeIngredients = recipeIngredients;
    this.recipePreparation = recipePreparation;
    this.recipeTitle = recipeTitle;
  }
}
