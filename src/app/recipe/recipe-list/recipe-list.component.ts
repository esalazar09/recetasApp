import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  @Input() recipe : Recipe;
  recipeId: number;

  constructor() { }

  ngOnInit() {
  }

}
