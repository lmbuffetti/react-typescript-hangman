import * as React from 'react'
import DisplayWord from "../DisplayWord";

describe('Components', () => {
    it('should pass', () => {
        expect(<DisplayWord />).toMatchSnapshot();
    });
});