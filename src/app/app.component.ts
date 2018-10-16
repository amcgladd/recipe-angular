import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recipes: Recipe[] = [
    new Recipe('Chocolate Chip Cookie Recipe', ['1 cup butter', '1 cup white sugar', '1 cup packed brown sugar', '2 eggs'], ['Preheat oven to 350 degrees (175 degrees C)', 'Cream together the butter, sugar, and brown sugar and beat until smooth']),
    new Recipe('Basic Mashed Potatoes Recipe', ['2 lbs baking potatoes', '2 tbsp butter', '1 cup milk'], ['Bring a pot of salted water to a boil. Add potatoes and cook until tender but still firm, about 15 minutes; drain', 'In a small saucepan heat butter and milk over low heat until butter is melted. Using a potato masher or electric beater, slowly blend milk mixture into potatoes until smooth and creamy. Season with salt and pepper to taste']),
    new Recipe('Spaghetti Recipe', ['1 lb ground beef', '1 jar of tomato sauce', '1 pack of spaghetti'], ['Combine ground beef, onion, garlic, and green pepper in a large saucepan. Cook and stir until meat is brown and vegetables are tender. Drain grease', 'Stir diced tomatoes, tomato sauce, and tomato paste into the pan. Season with oregano, basil, salt, and pepper. Simmer spaghetti sauce for 1 hour, stirring occasionally'])
  ];

  selectedRecipe = null;

  showDetails(clickedRecipe) {
    this.selectedRecipe = clickedRecipe;
    console.log(this.selectedRecipe);
  }

  finishedViewing() {
    this.selectedRecipe = null;
  }

  editRecipeField = null;

  editRecipe(chosenRecipe) {
    this.editRecipeField = "hello";
  }

  finishedEditing() {
    this.editRecipeField = null;
  }

}
