import FontAwesomeIcon from '@fortawesome/react-fontawesome';
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
            className={'button secondary' + (categoryIsFiltered ? ' disabled' : '')}
            key={category}
            onClick={() => updateCategoryFilters(category)}
            onKeyPress={() => updateCategoryFilters(category)}
            style={{cursor: 'pointer'}}
            tabIndex="0"
          >
            {category}
          </a>;
        })}
        {!filtersVisible
          && <a
            className="button secondary"
            onClick={() => this.toggleFilterVisibility()}
            onKeyPress={() => this.toggleFilterVisibility()}
            tabIndex="0"
          >
            <FontAwesomeIcon icon="filter" /> <br className="hide-for-medium" />Filter <span className="show-for-medium">{filterDescription}</span>
          </a>
        }
        {filtersVisible
          && <a
            className="button secondary"
            onClick={() => this.toggleFilterVisibility()}
            onKeyPress={() => this.toggleFilterVisibility()}            
            tabIndex="0"
          >
            Hide Filters <FontAwesomeIcon icon="level-up-alt" />
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
