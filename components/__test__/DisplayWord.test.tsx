import * as React from 'react'
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import DisplayWord from '../DisplayWord'

test('Components', () => {
    const checkbox = shallow(<DisplayWord word={['a']} />);
    expect(checkbox.find('span').text()).toEqual("a");

    expect(toJSON(checkbox)).toMatchSnapshot();
});
