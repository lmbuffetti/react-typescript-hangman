import * as React from 'react'
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Keyboard from "../Keyboard";

test('Components', () => {
    const app = shallow(<Keyboard keys={['a']} />);
    expect(app.find('button').text()).toEqual("a");

    expect(toJSON(app)).toMatchSnapshot();

});