import React, { Fragment } from 'react';
import { Container, Grid } from '@material-ui/core';
import { connect } from 'react-redux';
//Box,
import ThemedCompanyDetailsCard from './ThemedCompanyDetailsCard';

const ViewJobDetails = ({ jobDetails }) => {
  console.log('jobDetails', jobDetails);
  return (
    <Fragment>
      <Container>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <ThemedCompanyDetailsCard />
          </Grid>
          {
            jobDetails &&
            <Grid container spacing={3}>
              {
                <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>

                </Grid>
              }
            </Grid>
          }
          {
            !jobDetails && <div>No Jobs found</div>
          }
      </Container>
    </Fragment>
  );
}

const mapStateToProps = state => ({
  jobDetails: state.jobResultsReducer.jobDetail
});

export default connect(mapStateToProps, null)(ViewJobDetails);
