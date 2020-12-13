import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import ThemedLocationField from './ThemedLocationField';
import ThemedSearchField from './ThemedSearchField';
import ThemedCheckbox from './ThemedCheckbox';

import ThemeContext from '../contexts/ThemeContext';

import { connect } from 'react-redux';
import {fetchJobs} from '../actions/jobResultsActions';

class SearchBar extends Component{
  constructor(props) {
    super(props);

    this.state = {
      location: '',
      full_time: false,
      description: '',
    }
  }

  componentDidMount() {
    const { fetchJobs } = this.props;
    fetchJobs();
  }

  handleChange = val => {
    this.setState({...val});
  }

  generateUrlFilters = () => {
    const filters = {...this.state};
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
    const { description, location, full_time } = this.state;
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
});

export default connect(null, mapDispatchToProps)(SearchBar);
