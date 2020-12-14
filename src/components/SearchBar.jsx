import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


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
        <ThemeContext.Consumer>
          {
            (theme)=> {
              return (
                <div>
                <Grid container className={`jCenter`}>
                  <Grid item
                    className={`${theme.card.background} ${theme.card.text}  cardHeader`}
                    xl={10} lg={10} md={10} sm={12} xs={12}
                  >
                    <Grid item className="borderRight" xl={10} lg={10} md={12} sm={12} xs={12}>
                      <ThemedSearchField
                        value={description}
                        onChangeHandler={val=> this.handleChange({description: val})}
                        placeholder="Filter by title, companies…"
                      />
                    </Grid>
                    <Grid item className="borderRight" xl={10} lg={10} md={12} sm={12} xs={12}>
                      <ThemedLocationField
                        value={location}
                        onChangeHandler={val=> this.handleChange({location: val})}
                        placeholder="Filter by location"
                      />
                    </Grid>
                    <Grid item className="inlineFlex mTP" xl={12} lg={12} md={12} sm={12} xs={12}>
                      <ThemedCheckbox
                        onChangeHandler={val=> this.handleChange({full_time: val})}
                        value={full_time}
                        label="Full time Only"
                      />
                    </Grid>
                    <Grid item xl={2} lg={2} md={2} sm={12} xs={12}>
                      <Button variant="contained" color="primary" onClick={this.applyFilters}>
                        Search
                      </Button>
                    </Grid>
                  </Grid>
                  </Grid>
                </div>
            )}
          }
        </ThemeContext.Consumer>
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
  setFilter: PropTypes.func.isRequired,
  filters: PropTypes.shape({
    location: PropTypes.string,
    full_time: PropTypes.bool,
    description: PropTypes.string,
    lat: PropTypes.string,
    long: PropTypes.string
  }),
};

SearchBar.defaultProps = {
  filters: {
    location: '',
    full_time: false,
    description: '',
    lat: '',
    long: ''
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
