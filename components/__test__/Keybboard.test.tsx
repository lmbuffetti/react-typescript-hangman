import * as React from 'react'
import renderer from 'react-test-renderer';
import Keyboard from "../Keyboard";

test('Components', () => {
    const app = renderer.create(<Keyboard keys={['a']} />);
    expect(app.find('button').text()).toEqual("a");

    expect(app.toJSON()).toMatchSnapshot();

});
