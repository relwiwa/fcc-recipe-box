import React, { Component } from 'react';

import { startupRecipes } from '../specs/startup-recipes';
import { modes, recipeCategories } from '../specs/words';

import AddRecipe from './add-recipe';
import EditRecipe from './edit-recipe';
import DisplayRecipe from './display-recipe';
import RecipeListView from './recipe-list-view';

const { starter, mainDish, salad, dessert } = recipeCategories;
const { addRecipe, displayRecipes, editRecipe } = modes;

class RecipeBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allRecipes: {},
      currentCategoryFilters: [],
      currentRecipe: null,
      mode: displayRecipes,
    };

    this.addRecipe = this.addRecipe.bind(this);
    this.updateCategoryFilters = this.updateCategoryFilters.bind(this);
    this.updateRecipe = this.updateRecipe.bind(this);
  }

  componentDidMount() {
    this.setState({
      allRecipes: startupRecipes,
//      currentRecipe: 'deabcdefgh-id',
      mode: addRecipe,
    });
  }

  addRecipe(newRecipe) {
    const { allRecipes } = this.state;
    allRecipesNew = [...allRecipes];
    allRecipesNew.push(newRecipes);
    this.setState({ allRecipes: allRecipesNew });
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

  updateRecipe() {

  }

  render() {
    const { allRecipes, currentCategoryFilters, currentRecipe, mode } = this.state;

    return (
      <div className="recipe-box grid-container grid-container-padded">
        <h1 className="text-center">
          Recipe Box
        </h1>
        {(currentRecipe && mode === displayRecipes) && <DisplayRecipe
          editCurrentRecipe={() => this.setState({ mode: editRecipe })}
          recipe={allRecipes[currentRecipe]}
          resetCurrentRecipe={() => this.setState({ currentRecipe: null })}
        />}
        {(!currentRecipe && mode === displayRecipes) && <RecipeListView
          currentCategoryFilters={currentCategoryFilters}
          recipes={allRecipes}
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
          recipe={allRecipes[currentRecipe]}
          updateRecipe={(newRecipe) => this.updateRecipe(newRecipe)}
        />}
      </div>
    );
  }

};

export default RecipeBox;
