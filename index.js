import React from 'react';
import { render } from 'react-dom';

import '../../styles/global-styles.scss';
import '../../config/font-awesome';

import RecipeBox from './components/recipe-box';

render(
  <RecipeBox />,
  document.getElementById('root')
);
