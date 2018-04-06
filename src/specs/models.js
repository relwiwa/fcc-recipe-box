
export class FormTabElement {
  constructor(label, options, placeholder, required, requirement, type, validation) {
    if (options !== null) {
      this.options = options;
    }
    this.label = label;
    this.placeholder = placeholder;
    this.required = required;
    this.requirement = requirement;
    this.type = type;
    this.validation = validation;
  }
}

export class FormTabSpec {
  constructor(title, icon) {
    this.title = title;
    this.icon = icon;
  }
}

export class Ingredient {
  constructor(quantity, unit, description) {
    this.description = description;  
    this.quantity = quantity;
    this.unit = unit;
  }
}

export class Recipe {
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

export class Numerus {
  constructor(singular, plural) {
    this.plural = plural;
    this.singular = singular;
  }
}
