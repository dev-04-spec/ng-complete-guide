import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Chicken piece fry',
      'Delicious',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-crispy-chicken-thighs-garlic-rosemary-1567793052.png?crop=0.670xw:1.00xh;0.0513xw,0&resize=640:*',
      [new Ingredient('Meat', 1), new Ingredient('Fresh Fries', 20)]
    ),
    new Recipe(
      'Chicken Curry',
      'Delicious',
      'https://i.ndtvimg.com/i/2017-12/malvani-chicken-curry_620x330_81514354104.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    ),
    new Recipe(
      'Mutton Curry',
      'Delicious',
      'https://www.indianhealthyrecipes.com/wp-content/uploads/2016/05/mutton-curry-1-500x500.jpg',
      [new Ingredient('Chapati', 3), new Ingredient('Gravy', 1)]
    ),
  ];
  getRecipes() {
    return this.recipes.slice();
  }
}
