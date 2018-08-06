import React from 'react';
import { shallow } from 'enzyme';
import Image from './image';

it('should render without crashing', () => {
  const wrapper = shallow(<Image/>);
});
