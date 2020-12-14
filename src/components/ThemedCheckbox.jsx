import React from 'react';
import PropTypes from 'prop-types';

import { Checkbox, Typography } from '@material-ui/core';

const ThemedCheckbox = ({onChangeHandler, label, value}) => {
  return (
    <React.Fragment>
      <Checkbox
        checked={value}
        color="primary"
        onChange={() => onChangeHandler(!value)}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <Typography noWrap>
          {label}
      </Typography>
    </React.Fragment>
  );
}

ThemedCheckbox.propTypes ={
  onChangeHandler: PropTypes.func,
  label: PropTypes.string,
  value: PropTypes.bool
}

ThemedCheckbox.defaultProps ={
  onChangeHandler: val => val,
  label: '',
  value: false
}

export default ThemedCheckbox;
