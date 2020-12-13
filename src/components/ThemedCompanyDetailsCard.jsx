import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

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

const ThemedCompanyDetailsCard = ({job}) => {
  const themeContext= useContext(ThemeContext);
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Card className={`${classes.onHover} ${themeContext.cardBackgroundColor} ${classes.root}`}>
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

ThemedCompanyDetailsCard.propTypes = {
    job: PropTypes.isRequired 
};

export default ThemedCompanyDetailsCard;
