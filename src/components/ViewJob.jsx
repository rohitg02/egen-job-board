import React, { useContext, Fragment } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import ThemeContext from '../contexts/ThemeContext';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height: 250
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  posTop:{
    marginTop: 12,
  },
  onHover : {
    cursor: 'pointer'
  },
  logo: {
    height: '25px',
    width: '50px'
  },
  titleJob: {
    fontSize: '18px',
    fontWeight: 500,
    marginTop: 2,
    marginBottom: 2
  }
});

const ViewJob = ({job, onClickHandler}) => {
  const themeContext= useContext(ThemeContext);
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const { company_logo, created_at, type, title, company, location } = job;

  return (
    <Card
      id="viewJobCard"
      onClick={() => onClickHandler(job)}
      className={`${classes.onHover} ${themeContext.card.background} ${classes.root}`}
    >
      <CardContent>
        <Fragment>
          <img
           src={company_logo}
           className={classes.logo}
           alt="new"
           />
        </Fragment>
        <Typography className={`${classes.posTop} ${themeContext.card.text}`} variant="body2" component="p" color="textSecondary" >
          {created_at} {bull} {type}
        </Typography>
        <Typography className={`${classes.titleJob} ${themeContext.card.title}`} variant="subtitle1" component="h3">
          {title}
        </Typography>
        <Typography className={`${classes.pos} ${themeContext.card.text}`} variant="body2" component="p" color="textSecondary">
          {company}
        </Typography>
        <Typography variant="body2" component="p">
          <br />
        </Typography>
        <Typography className="cPurple" variant="body2" component="p">
          {location}
        </Typography>
      </CardContent>
    </Card>
  )
}


ViewJob.propTypes = {
  onClickHandler: PropTypes.func,
  job: PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
    url: PropTypes.string,
    created_at: PropTypes.string,
    company: PropTypes.string,
    company_url: PropTypes.string,
    location: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    how_to_apply: PropTypes.string,
    company_logo: PropTypes.string
  })
};

ViewJob.defaultProps = {
  onClickHandler: () => {},
  job: {
    id: "",
    type: "",
    url: "",
    created_at: "",
    company: "",
    company_url: "",
    location: "",
    title: "",
    description: "",
    how_to_apply: "",
    company_logo: ""
  }
};

export default ViewJob;
