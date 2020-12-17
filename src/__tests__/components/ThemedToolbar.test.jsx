import React from 'react';
import { shallow } from '../../enzyme';

import ThemedToolbar from '../../components/ThemedToolbar';

describe('ThemedToolbar component', () => {

    it('should render ThemedToolbar component', () => {
      const wrapper = shallow(<ThemedToolbar />);
      expect(wrapper).toMatchSnapshot();
    });
});
