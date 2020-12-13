import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import ThemeContext from '../contexts/ThemeContext';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
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
  onHover : {
    cursor: 'pointer'
  }
});

const ViewJob = ({job, onClickHandler}) => {
  const themeContext= useContext(ThemeContext);
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Card onClick={() => onClickHandler(job)} className={`${classes.onHover} ${themeContext.cardBackgroundColor} ${classes.root}`}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {job.title}
        </Typography>
        <Typography variant="h5" component="h2">
          {job.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {bull}
        </Typography>
        <Typography variant="body2" component="p">
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        {job.location}
      </CardActions>
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
  onClickHandler: val => val,
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
