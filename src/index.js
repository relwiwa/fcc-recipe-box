import React from 'react';
import { render } from 'react-dom';

import RecipeBox from './components/recipe-box';
import './global-styles.scss';

render(
  <RecipeBox />,
  document.getElementById('root')
);
