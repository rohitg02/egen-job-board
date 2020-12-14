import React, { useContext } from 'react';
import { Grid, Card, CardContent, Typography, Box, Button, Link } from '@material-ui/core';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';

import ThemeContext from '../contexts/ThemeContext';

const useStyles = makeStyles({
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  cardHeader: {
    display: 'inline-flex',
    width: 'inherit',
    marginTop: '50px',
    borderRadius: '5px',
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
    padding: 5,
    backgroundColor: 'white',
    position: 'fixed',
    zIndex: 2000,
  },
  posTop:{
    marginTop: 12,
  },
  logo: {
    height: '75px',
    width: '75px'
  },
  mAuto: {
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  mTop180: {
    marginTop: '180px'
  },
  jCenter: {
    'justify-content': 'center'
  },
  mWidth: {
    maxWidth: 1280
  },
  pTop50: {
    paddingTop: 60
  },
  titleJob: {
    fontWeight: 600,
    marginTop: 2,
    marginBottom: 2
  },
  pT30: {
    paddingTop: 30
  }
});
//className={`${classes.dFlex} ${classes.p0}`
const ViewJobDetails = ({ jobDetails }) => {
  const classes = useStyles();
  const themeContext= useContext(ThemeContext);
  const bull = <span className={classes.bullet}>•</span>;
  const { company_logo, company, company_url, created_at,
    type, title, location, description, how_to_apply } = jobDetails;

  return (
    <div>
    <Grid container className={`${classes.jCenter}`}>
      <Grid item
        className={`${classes.cardHeader} ${themeContext.card.background} ${themeContext.card.title}`}
        xl={10} lg={10} md={10} sm={12} xs={12}
      >
        <Grid item xl={1} lg={1} md={1} sm={12} xs={12}>
          <img
           src={company_logo}
           className={classes.logo}
           alt="new"
           />
        </Grid>
        <Grid item xl={10} lg={9} md={9} sm={12} xs={12}>
          <Typography className={`${classes.posTop} ${themeContext.card.cWhite}`}>
            {company}
          </Typography>
          <Typography className={`${classes.posTop} cPurple`} variant="body2" component="p" color="textSecondary" >
            {company_url}
          </Typography>
        </Grid>
        <Grid item  className={classes.pT30} xl={1} lg={2} md={2} sm={12} xs={12}>
          <Typography >
            <Link target="_blank" rel="noreferrer" href={company_url} onClick={()=>{}}>
              Company Site
            </Link>
          </Typography>
        </Grid>
      </Grid>
      <Grid item className={`${classes.mAuto} ${classes.mTop180}`} xl={10} lg={10} md={10} sm={12} xs={12}>
        <Card>
          <CardContent className={`${themeContext.card.background} ${themeContext.card.text}`}>
            <Box display="flex">
              <Box p={1} flexGrow={1}>
                <Typography className={`${themeContext.card.text} ${classes.posTop}`}  variant="body2" component="p" color="textSecondary">
                  {created_at} {bull} {type}
                </Typography>
                <Typography className={classes.titleJob} variant="h5" component="h3">
                  {title}
                </Typography>
                <Typography className={`cPurple ${classes.posTop}`} variant="body2" component="p" color="textSecondary">
                  {location}
                </Typography>
              </Box>
              <Box p={1} className={classes.pTop50}>
                <Button variant="contained" color="primary" onClick={()=>{}}>
                  Apply Now
                </Button>
              </Box>
            </Box>
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </CardContent>
        </Card>
        <br/>
        <Card className="purpleBg">
          <CardContent className="purpleBg cWhite">
            <Typography className={classes.titleJob}>
                How to Apply
            </Typography>
              <div dangerouslySetInnerHTML={{ __html: how_to_apply }} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    </div>
  );
}

const mapStateToProps = state => ({
  jobDetails: state.jobResultsReducer.jobDetail
});

export default connect(mapStateToProps, null)(ViewJobDetails);
