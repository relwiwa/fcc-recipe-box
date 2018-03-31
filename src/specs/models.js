
export class Ingredient {
  constructor(quantity, unit, description) {
    this.quantity = quantity;
    this.unit = unit;
    this.description = description;  
  }
}

export class Recipe {
  constructor(id, recipeTitle, category, description, ingredients, steps, image) {
    this.id = id;
    this.recipeTitle = recipeTitle;
    this.category = category;
    this.description = description;
    this.ingredients = ingredients;
    this.steps = steps;
    this.image = image;
  }
}

export class Numerus {
  constructor(singular, plural) {
    this.singular = singular;
    this.plural = plural;
  }
}
