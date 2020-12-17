import React from 'react';
import PropTypes from 'prop-types';

import LocationOnIcon from '@material-ui/icons/LocationOn';
import InputBase from '@material-ui/core/InputBase';

import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  locationIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  iconCurrentPosition: {
    marginLeft: 20,
    marginTop: 5
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


const ThemedLocationField = ({placeholder, value, onChangeHandler}) => {
  const classes = useStyles();

  return (
    <div className={classes.search}>
      <div className={`${classes.locationIcon} ${classes.hover}`}>
        <LocationOnIcon />
      </div>
      <InputBase
        id="searchLocationField"
        placeholder={placeholder}
        value={value}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        onChange={(evt) => onChangeHandler(evt.target.value)}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  )
}

ThemedLocationField.propTypes ={
  onChangeHandler: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string
}

ThemedLocationField.defaultProps ={
  onChangeHandler: () => {},
  placeholder: '',
  value: ''
}

export default ThemedLocationField;
