import React from 'react';
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

export default ThemedCheckbox;
