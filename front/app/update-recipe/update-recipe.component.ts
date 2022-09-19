import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-recipe',
  templateUrl: './update-recipe.component.html',
  styleUrls: ['./update-recipe.component.css']
})
export class UpdateRecipeComponent implements OnInit {

  id: number;
  recipe: Recipe = new Recipe();
  constructor(private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.recipeService.getRecipeById(this.id).subscribe(data => {
      this.recipe = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.recipeService.updateRecipe(this.id, this.recipe).subscribe( _data =>{
      this.goToRecipeList();
    }
    , error => console.log(error));
  }

 goToRecipeList(){
    this.router.navigate(['/recipes']);
  }
}