import React from 'react';
import { shallow } from '../../enzyme';

import ThemedCheckbox from '../../components/ThemedCheckbox';

describe('ThemedCheckbox component', () => {

  it('should render ThemedCheckbox component', () => {
    const wrapper = shallow(<ThemedCheckbox />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default onChangeHandler', () => {
    expect(ThemedCheckbox.defaultProps.onChangeHandler).toBeDefined();
  });

});
