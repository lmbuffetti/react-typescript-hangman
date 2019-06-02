import * as React from 'react'
import Hangman from '../Hangman'

describe('Components', () => {
    it('should pass', () => {
        expect(<Hangman />).toMatchSnapshot();
    });
});