import React from 'react';
import { shallow } from '../../enzyme';

import ThemedLocationField from '../../components/ThemedLocationField';

describe('ThemedLocationField', () => {
    const props = {
      onChangeHandler: jest.fn(x => x),
      placeholder: 'Filter by Location',
      value: ''
    };

    it('should render ThemedLocationField component and match the snapshot', () => {
        const wrapper = shallow(<ThemedLocationField />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should have default onChangeHandler', () => {
      expect(ThemedLocationField.defaultProps.onChangeHandler).toBeDefined();
    });

    it('should render ThemedSearchField component with props and match the snapshot', () => {
        const wrapper = shallow(<ThemedLocationField {...props} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should respond to field change by calling handler', () => {
        const wrapper = shallow(<ThemedLocationField {...props} />);
        const event = { target: { value: 'new york' } };
        wrapper.find("#searchLocationField").simulate('change', event);
        expect(props.onChangeHandler).toHaveBeenCalled();
    });
});
