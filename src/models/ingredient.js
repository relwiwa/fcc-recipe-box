import { units } from '../specs/words';

export default class Ingredient {
  constructor(ingredientQuantity = '', ingredientUnit = units, ingredientDescription = '') {
    this.ingredientDescription = ingredientDescription;  
    this.ingredientQuantity = ingredientQuantity;
    this.ingredientUnit = ingredientUnit;
  }
}
