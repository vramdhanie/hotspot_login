import React from 'react';
import Counter from './counter';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const wrapper = shallow(<Counter/>);
})
