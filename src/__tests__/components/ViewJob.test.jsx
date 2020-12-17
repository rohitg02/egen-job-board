import React from 'react';
import { shallow } from '../../enzyme';

import ViewJob from '../../components/ViewJob';
import ThemeContext from '../../contexts/ThemeContext';
import light from '../../themes/light';


const mockJob = {
  "id": "b1691d49-ee1d-4793-9c1d-7a10a9b8b84a",
  "type": "Full Time",
  "url": "https://jobs.github.com/positions/b1691d49-ee1d-4793-9c1d-7a10a9b8b84a",
  "created_at": "Mon Dec 07 19:23:19 UTC 2020",
  "company": "EME Hive",
  "company_url": "http://emehive.co",
  "location": "New York City",
  "title": "Infrastructure Engineer for Social Livestreaming App",
  "description": "<p>WHO WE ARE</p>",
  "how_to_apply": "<p>Email your resume and cover letter to</p>",
  "company_logo": "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbFNTIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f8a7d57b1091ad6c57a6d522d8b280372a303ce8/Screen%20Shot%202020-12-07%20at%202.22.26%20PM.png"
};

describe('ViewJob component', () => {
  it('should render ViewJob component', () => {
    const wrapper = shallow(<ViewJob />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default click handler', () => {
    const wrapper = shallow(<ViewJob />);
    expect(ViewJob.defaultProps.onClickHandler).toBeDefined();
  });

  it('should call onClickHandler', () => {
    const props = {
      job: mockJob,
      onClickHandler: jest.fn((val) => val)
    };
    const wrapper = shallow(<ViewJob {...props} />);
    wrapper.find('#viewJobCard').simulate('click');
    expect(props.onClickHandler).toHaveBeenCalled();
  });
});
