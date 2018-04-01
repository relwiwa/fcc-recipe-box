import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CategoryFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filtersVisible: false,
    };
  }

  toggleFilterVisibility() {
    this.setState({
      filtersVisible: !this.state.filtersVisible,
    });
  }

  render() {
    const { currentCategoryFilters, filterCategories, filterDescription } = this.props;
    const { updateCategoryFilters } = this.props;
    const { filtersVisible } = this.state;

    return (
      <div className="category-filter button-group stacked-for-small">
        {filtersVisible && filterCategories.map(category => {
          const categoryIsFiltered = currentCategoryFilters.indexOf(category) < 0 ? false : true;
          return <a
            className={'button' + (categoryIsFiltered ? ' disabled' : '')}
            key={category}
            onClick={() => updateCategoryFilters(category)}
            style={{cursor: 'pointer'}}
          >
            {category}
          </a>;
        })}
        {!filtersVisible
          && <a
            className="button secondary"
            onClick={() => this.toggleFilterVisibility()}
          >
            Filter {filterDescription}
          </a>
        }
        {filtersVisible
          && <a
            className="button secondary"
            onClick={() => this.toggleFilterVisibility()}
          >
            Hide Filters
          </a>
        }
      </div>
    );
  }
}

CategoryFilter.defaultProps = {
  currentCategoryFilters: [],
  filterCategories: [],
  filterDescription: '',
  updateCategoryFilters: (() => {}),
};

CategoryFilter.propTypes = {
  currentCategoryFilters: PropTypes.array.isRequired,
  filterCategories: PropTypes.array.isRequired,
  filterDescription: PropTypes.string,
  updateCategoryFilters: PropTypes.func.isRequired,
};

export default CategoryFilter;
