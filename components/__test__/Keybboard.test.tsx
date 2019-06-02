import * as React from 'react'
import Keyboard from "../Keyboard";

describe('Components', () => {
    it('should pass', () => {
        expect(<Keyboard />).toMatchSnapshot();
    });
});