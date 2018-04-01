import React, { Component } from 'react';

import { startupRecipes } from '../specs/startup-recipes';
import { recipeCategories } from '../specs/words';

import RecipeListView from './recipe-list-view';

const { starter, mainDish, salad, dessert } = recipeCategories;

class RecipeBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allRecipes: {},
      currentCategoryFilters: [],
    };

    this.updateCategoryFilters = this.updateCategoryFilters.bind(this);
  }

  componentDidMount() {
    this.setState({ allRecipes: startupRecipes });
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
    const { allRecipes, currentCategoryFilters } = this.state;

    return (
      <div className="recipe-box grid-container grid-container-padded">
        <h1 className="text-center">
          Recipe Box
        </h1>
        <RecipeListView
          currentCategoryFilters={currentCategoryFilters}
          recipes={allRecipes}
          recipeCategories={[starter.plural, mainDish.plural, salad.plural, dessert.plural]}
          updateCategoryFilters={(category) => this.updateCategoryFilters(category)}
        />
      </div>
    );
  }

};

export default RecipeBox;
