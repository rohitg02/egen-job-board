import React from 'react';
import { Container, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
//Box,
import SearchBar from './SearchBar';
import ViewJob from './ViewJob';

import { setJobDetail } from '../actions/jobResultsActions';

const Dashboard = ({getJobs, setJob}) => {
  const jobs = getJobs();
  const history = useHistory();

  const handleChange = (jobSelected) => {
    setJob(jobSelected);
    history.push('/job');
  }

  return (
    <React.Fragment>
      <Container>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <SearchBar />
          </Grid>
          {
            jobs &&
            <Grid container spacing={3}>
              {
                jobs.map((jobDetails) =>
                  <Grid key={jobDetails.id} item xl={4} lg={4} md={4} sm={6} xs={12}>
                    <ViewJob job={jobDetails} onClickHandler={val => handleChange(val)} />
                  </Grid>
                )
              }
            </Grid>
          }
          {
            !jobs && <div>No Jobs found</div>
          }
      </Container>
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  getJobs: () => state.jobResultsReducer.jobs,
});

const mapDispatchToProps = dispatch => ({
  setJob: (jobSelected) => dispatch(setJobDetail(jobSelected)),
});

Dashboard.propTypes = {
  getJobs: PropTypes.func,
  setJob: PropTypes.func.isRequired
}

Dashboard.defaultProps = {
  getJobs: () => [],
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
