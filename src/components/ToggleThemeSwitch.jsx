import React, { useContext }  from 'react';

import { Switch } from '@material-ui/core';
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded';
import Brightness2RoundedIcon from '@material-ui/icons/Brightness2Rounded';
import ThemeContext from '../contexts/ThemeContext';

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
         />
       <Brightness2RoundedIcon/>
    </React.Fragment>
  );
}
//chnage color white prop
export default ToggleThemeSwitch;
