import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import ThemedLocationField from './ThemedLocationField';
import ThemedSearchField from './ThemedSearchField';
import ThemedCheckbox from './ThemedCheckbox';

import ThemeContext from '../contexts/ThemeContext';

import { connect } from 'react-redux';
import { fetchJobs } from '../actions/jobResultsActions';
import { updateFilter } from '../actions/searchBarActions';

class SearchBar extends Component{

  componentDidMount() {
    this.applyFilters();
  }

  handleChange = val => {
    const { setFilter } = this.props;
    setFilter(val);
  }

  generateUrlFilters = () => {
    const { filters } = this.props;
    let filterString = '';

    for (let property in filters) {

      if(filters[property] && filters[property] !== '') {
        filterString = `${filterString}${property}=${filters[property]}&`;
      }
    }

    return filterString;
  }

  applyFilters = () => {
    const { fetchJobs } = this.props;
    let urlFilters = this.generateUrlFilters();
    if(urlFilters !== '')
      urlFilters = `?${urlFilters.slice(0, urlFilters.length - 1)}`;

    fetchJobs(urlFilters);
  }

  render() {
    const { filters: { description, location, full_time } } = this.props;
    return (
      <React.Fragment>
        <ThemeContext.Consumer>
          {
            (theme)=> {
              return (
              <Card className={`${theme.cardBackgroundColor}`}>
                <ThemedSearchField
                  value={description}
                  onChangeHandler={val=> this.handleChange({description: val})}
                  placeholder="Filter by title, companies…"
                />
                <ThemedLocationField
                  value={location}
                  onChangeHandler={val=> this.handleChange({location: val})}
                  placeholder="Filter by location"
                />
                <ThemedCheckbox
                  onChangeHandler={val=> this.handleChange({full_time: val})}
                  value={full_time}
                  label="Full time Only"
                />
                <Button variant="contained" color="primary" onClick={this.applyFilters}>
                  Search
                </Button>
              </Card>
            )}
          }
        </ThemeContext.Consumer>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchJobs: (urlFilters) => dispatch(fetchJobs(urlFilters)),
  setFilter: (filterval) => dispatch(updateFilter(filterval))
});

const mapStateToProps = state => ({
  filters: state.searchBarReducer
});

SearchBar.propTypes = {
  fetchJobs: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
