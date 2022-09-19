import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from './recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  
  private baseURL = 'http://localhost:8080/api/v1/recipes';

  constructor(private httpClient : HttpClient) { }

  getRecipesList() : Observable<Recipe[]>{
    return this.httpClient.get<Recipe[]>(`${this.baseURL}`);
  }

  createRecipe(recipe:Recipe): Observable<object>{
    return this.httpClient.post(`${this.baseURL}`,recipe);
  }

  getRecipeById(id:number): Observable<Recipe>{
    return this.httpClient.get<Recipe>(`${this.baseURL}`);
  }
  
  updateRecipe(id:number,recipe:Recipe): Observable<object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,recipe);
  }

  deleteRecipe(id:number): Observable<object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
