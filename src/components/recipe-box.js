import React, { Component } from 'react';

import { startupRecipes } from '../specs/startup-recipes';
import { recipeCategories } from '../specs/words';

import RecipeListView from './recipe-list-view';
import DisplayRecipe from './display-recipe';

const { starter, mainDish, salad, dessert } = recipeCategories;

class RecipeBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allRecipes: {},
      currentCategoryFilters: [],
      currentRecipe: null,
    };

    this.updateCategoryFilters = this.updateCategoryFilters.bind(this);
  }

  componentDidMount() {
    this.setState({
      allRecipes: startupRecipes,
//      currentRecipe: 'deabcdefgh-id',
    });
  }

  updateCategoryFilters(category) {
    const { currentCategoryFilters } = this.state;
    let categoryWasFiltered = false;
    const newCategoryFilters = currentCategoryFilters.map(currentCategoryFilter => {
      if (category === currentCategoryFilter) {
        categoryWasFiltered = true;
      }
      else {
        return currentCategoryFilter;
      }
    });
    if (categoryWasFiltered === false) {
      newCategoryFilters.push(category);
    }
    this.setState({ currentCategoryFilters: newCategoryFilters });
  }

  render() {
    const { allRecipes, currentCategoryFilters, currentRecipe } = this.state;

    return (
      <div className="recipe-box grid-container grid-container-padded">
        <h1 className="text-center">
          Recipe Box
        </h1>
        {currentRecipe && <DisplayRecipe
          recipe={allRecipes[currentRecipe]}
          resetCurrentRecipe={() => this.setState({ currentRecipe: null })}
        />}
        {!currentRecipe && <RecipeListView
          currentCategoryFilters={currentCategoryFilters}
          recipes={allRecipes}
          recipeCategories={[starter.plural, mainDish.plural, salad.plural, dessert.plural]}
          updateCategoryFilters={(category) => this.updateCategoryFilters(category)}
          updateCurrentRecipe={(recipe) => this.setState({ currentRecipe: recipe })}
        />}
      </div>
    );
  }

};

export default RecipeBox;
