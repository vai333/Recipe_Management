import {NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { UpdateRecipeComponent } from './update-recipe/update-recipe.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';

const routes: Routes = [
  {path:'recipes',component : RecipeListComponent},
  {path:'create-recipe',component:CreateRecipeComponent},
  {path:'',redirectTo:'recipes',pathMatch:'full'},
  {path:'update-recipe/:id',component:UpdateRecipeComponent},
  {path:'recipe-details/:id',component:RecipeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
