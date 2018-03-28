import React, { Component } from 'react';

import { startupRecipes } from '../specs/startup-recipes';

import RecipeListView from './recipe-list-view';

class RecipeBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allRecipes: {},
    };
  }

  componentDidMount() {
    this.setState({ allRecipes: startupRecipes });
  }

  render() {
    const { allRecipes } = this.state;

    return (
      <div className="recipe-box grid-container grid-container-padded">
        <h1 className="text-center">
          Recipe Box
        </h1>
        <RecipeListView
          recipes={allRecipes}
        />
      </div>
    );
  }

};

export default RecipeBox;
