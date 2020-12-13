import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';

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
