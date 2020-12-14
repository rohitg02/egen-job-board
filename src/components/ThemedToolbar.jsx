import React from 'react';

import { AppBar, Toolbar, Typography } from '@material-ui/core';
import ToggleThemeSwitch from './ToggleThemeSwitch';

const ThemedToolbar = () => {
  return (
    <React.Fragment>
      <AppBar >
        <Toolbar className="try">
            <Typography className="toolbarStyle" variant="h6" noWrap>
              devjobs
            </Typography>
            <ToggleThemeSwitch />
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}

export default ThemedToolbar;
