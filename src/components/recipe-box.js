import React, { Component } from 'react';
import uuidv1 from 'uuid/v1';

import { startupRecipes } from '../specs/startup-recipes';
import { localStorageStoredRecipes, modes, recipeCategories, recipeProperties } from '../specs/words';

import AddRecipe from './add-recipe';
import EditRecipe from './edit-recipe';
import DisplayRecipe from './display-recipe';
import RecipeListView from './recipe-list-view';

const { starter, mainDish, salad, dessert } = recipeCategories;
const { addRecipe, displayRecipes, editRecipe, loadRecipes } = modes;

class RecipeBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCategoryFilters: [],
      currentRecipe: null,
      mode: loadRecipes,
    };

    this.allRecipes = {};

    this.addRecipe = this.addRecipe.bind(this);
    this.updateCategoryFilters = this.updateCategoryFilters.bind(this);
    this.updateRecipe = this.updateRecipe.bind(this);
  }

  componentDidMount() {
    const storedRecipes = this.getAllRecipesFromLocalStorage();
    if (storedRecipes === null) {
      this.allRecipes = startupRecipes;
      this.saveAllRecipesToLocalStorage();
    }
    else {
      this.allRecipes = JSON.parse(storedRecipes);
    }
    this.setState({
      mode: displayRecipes,
    });
  }

  addRecipe(newRecipe) {
    const allRecipesNew = {...this.allRecipes};
    const recipeId = this.createUniqueRecipeId();
    newRecipe[recipeProperties.recipeId] = recipeId;
    allRecipesNew[recipeId] = newRecipe;
    this.allRecipes = allRecipesNew;
    this.saveAllRecipesToLocalStorage();
    this.setState({
      currentRecipe: recipeId,
      mode: displayRecipes,
    });
  }

  createUniqueRecipeId() {
    let isUniqueId = false;
    let recipeId = null;
    while (!isUniqueId) {
      recipeId = uuidv1();
      if (this.allRecipes[recipeId] === undefined) {
        isUniqueId = true;
      }
    }
    return recipeId;
  }

  getAllRecipesFromLocalStorage() {
    return localStorage.getItem(localStorageStoredRecipes);
  }

  saveAllRecipesToLocalStorage() {
    localStorage.setItem(localStorageStoredRecipes, JSON.stringify(this.allRecipes));    
  }

  updateCategoryFilters(category) {
    const { currentCategoryFilters } = this.state;
    let categoryWasFiltered = false;
    let newCategoryFilters = [];
    currentCategoryFilters.map((currentCategoryFilter, index) => {
      if (category === currentCategoryFilter) {
        categoryWasFiltered = true;
      }
      else {
        newCategoryFilters.push(currentCategoryFilter);
      }
    });
    if (categoryWasFiltered === false) {
      newCategoryFilters.push(category);
    }
    this.setState({ currentCategoryFilters: newCategoryFilters });
  }

  updateRecipe(recipe) {
    const allRecipesNew = {...this.allRecipes};
    allRecipesNew[recipe.recipeId] = {...recipe};
    this.allRecipes = allRecipesNew;
    this.saveAllRecipesToLocalStorage();
    this.setState({
      mode: displayRecipes,
    });
    
  }

  render() {
    const { allRecipes, currentCategoryFilters, currentRecipe, mode } = this.state;

    return (
      <div className="recipe-box grid-container grid-container-padded">
        <h1 className="text-center">
          Recipe Box
        </h1>
        {mode === loadRecipes && <div className="text-center">
          <span className="fa fa-spinner fa-spin"></span> Recipes Are Being Loaded...
        </div>}
        {(currentRecipe && mode === displayRecipes) && <DisplayRecipe
          editCurrentRecipe={() => this.setState({ mode: editRecipe })}
          recipe={this.allRecipes[currentRecipe]}
          resetCurrentRecipe={() => this.setState({ currentRecipe: null })}
        />}
        {(!currentRecipe && mode === displayRecipes) && <RecipeListView
          currentCategoryFilters={currentCategoryFilters}
          recipes={this.allRecipes}
          recipeCategories={[starter.plural, mainDish.plural, salad.plural, dessert.plural]}
          updateCategoryFilters={(category) => this.updateCategoryFilters(category)}
          updateCurrentRecipe={(recipe) => this.setState({ currentRecipe: recipe })}
          updateMode={(mode) => this.setState({ mode: mode })}
        />}
        {mode === addRecipe && <AddRecipe
          addRecipe={(newRecipe) => this.addRecipe(newRecipe)}
          cancelAddRecipe={() => this.setState({ mode: displayRecipes })}
        />}
        {mode === editRecipe && <EditRecipe
          cancelEditRecipe={() => this.setState({ mode: displayRecipes })}
          recipe={this.allRecipes[currentRecipe]}
          updateRecipe={(newRecipe) => this.updateRecipe(newRecipe)}
        />}
      </div>
    );
  }

};

export default RecipeBox;
