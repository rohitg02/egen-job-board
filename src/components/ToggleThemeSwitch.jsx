import React, { useContext }  from 'react';

import { Switch } from '@material-ui/core';
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded';
import Brightness2RoundedIcon from '@material-ui/icons/Brightness2Rounded';
import ThemeContext from '../contexts/ThemeContext';
//Grid,
const ToggleThemeSwitch = () => {
  const sampleContext= useContext(ThemeContext);
  return (
    <React.Fragment>
      <WbSunnyRoundedIcon/>
        <Switch
           checked={sampleContext.theme === 'light' ? false : true }
           onChange={sampleContext.toggleTheme}
           size="small"
           name="toggleTheme"
           color="white"
           backgroundColor="white"
           inputProps={{ 'aria-label': 'secondary checkbox' }}
         />
       <Brightness2RoundedIcon/>
    </React.Fragment>
  );
}

export default ToggleThemeSwitch;
