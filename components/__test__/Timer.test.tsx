import * as React from 'react'
import Timer from '../Timer'

describe('Components', () => {
    it('should pass', () => {
        expect(<Timer />).toMatchSnapshot();
    });
});
