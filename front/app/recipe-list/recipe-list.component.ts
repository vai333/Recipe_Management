import { Component, OnInit } from '@angular/core';
import  {Recipe} from '../recipe'
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {

  recipes : Recipe[];

  constructor(private recipeService: RecipeService,
  private router:Router) { }

  
  ngOnInit(): void {
  this.getRecipes();
  }
  private getRecipes(){
    this.recipeService.getRecipesList().subscribe(data => {
      this.recipes = data;
    });
  }

  recipeDetails(id:number){
    this.router.navigate(['recipe-details',id]);
  }

  updateRecipe(id:number){
    this.router.navigate(['update-recipe',id]);
  }

  deleteRecipe(id:number){
    this.recipeService.deleteRecipe(id).subscribe(data =>{
      console.log(data);
      this.getRecipes();
    })
  }


}
