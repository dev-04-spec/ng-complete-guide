import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map ,tap} from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    return this.http
      .put('https://e-shopping-ng.firebaseio.com/recipes.json', recipes)
      .subscribe((response) => {
        console.log(response);
      });
  }
  fetchRecipes() {
    return this.http
      .get<Recipe[]>('https://e-shopping-ng.firebaseio.com/recipes.json')
      .pipe(
        map((recipes) => {
          //this map is rxjs operator
          return recipes.map((recipe) => { // this map is javascript keyword
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : []
            };
          });
        }),tap(recipes=>{

          this.recipeService.setRecipes(recipes);
        })
      )
      // .subscribe((recipes) => {
      //   console.log(recipes);
      // });
  }
}
