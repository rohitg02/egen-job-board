import React from 'react';
import { shallow } from '../../enzyme';

import ToggleThemeSwitch from '../../components/ToggleThemeSwitch';
import ThemeContext from '../../contexts/ThemeContext';
import light from '../../themes/light';

describe('ToggleThemeSwitch component', () => {

    it('should render ToggleThemeSwitch component', () => {
      const wrapper = shallow(<ToggleThemeSwitch />);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render ToggleThemeSwitch component with context and set the check to false', () => {
      const contextValue = {
        ...light,
        toggleTheme: jest.fn()
      }
      let useContextMock = React.useContext = jest.fn();
      useContextMock.mockReturnValue(contextValue);
      const wrapper = shallow(<ToggleThemeSwitch />, useContextMock);
      expect(wrapper.find('#themeSwitch').props().checked).toEqual(false);
    });

});
