import * as React from 'react'
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Keyboard from "../Keyboard";

test('Components', () => {
    const checkbox = shallow(<Keyboard keys={['a']} />);
    expect(checkbox.find('button').text()).toEqual("a");

    expect(toJSON(checkbox)).toMatchSnapshot();

});