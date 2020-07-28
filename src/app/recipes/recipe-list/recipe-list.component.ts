import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Chicken piece fry',
      'Delicious',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-crispy-chicken-thighs-garlic-rosemary-1567793052.png?crop=0.670xw:1.00xh;0.0513xw,0&resize=640:*'
    ),
    new Recipe(
      'Chicken Curry',
      'Delicious',
      'https://i.ndtvimg.com/i/2017-12/malvani-chicken-curry_620x330_81514354104.jpg'
    ),
    new Recipe(
      'Mutton Curry',
      'Delicious',
      'https://www.indianhealthyrecipes.com/wp-content/uploads/2016/05/mutton-curry-1-500x500.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
