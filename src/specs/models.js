
export class Ingredient {
  constructor(quantity, unit, description) {
    this.description = description;  
    this.quantity = quantity;
    this.unit = unit;
  }
}

export class Recipe {
  constructor(recipeId, recipeTitle, recipeCategory, recipeDescription, recipeIngredients, recipeSteps, recipeImage) {
    this.recipeCategory = recipeCategory;
    this.recipeDescription = recipeDescription;
    this.recipeId = recipeId;
    this.recipeImage = recipeImage;
    this.recipeIngredients = recipeIngredients;
    this.recipeSteps = recipeSteps;
    this.recipeTitle = recipeTitle;
  }
}

export class Numerus {
  constructor(singular, plural) {
    this.plural = plural;
    this.singular = singular;
  }
}
