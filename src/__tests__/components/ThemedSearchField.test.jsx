import React from 'react';
import { shallow } from '../../enzyme';

import ThemedSearchField from '../../components/ThemedSearchField';

describe('ThemedSearchField', () => {
    const props = {
      onChangeHandler: jest.fn(x => x),
      placeholder: 'Filter by title, companies…',
      value: ''
    };

    it('should render ThemedSearchField component and match the snapshot', () => {
        const wrapper = shallow(<ThemedSearchField />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should have default onChangeHandler', () => {
      expect(ThemedSearchField.defaultProps.onChangeHandler).toBeDefined();
    });

    it('should render ThemedSearchField component with props and match the snapshot', () => {
        const wrapper = shallow(<ThemedSearchField {...props} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should respond to field change by calling handler', () => {
        const wrapper = shallow(<ThemedSearchField {...props} />);
        const event = { target: { value: 'java' } };
        wrapper.find("#searchField").simulate('change', event);
        expect(props.onChangeHandler).toHaveBeenCalled();
    });
});
