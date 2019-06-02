import * as React from 'react'
import IndexPage from '../pages/index'

describe('Pages', () => {
    describe('Index', () => {
        it('should pass', () => {
            expect(<IndexPage />).toMatchSnapshot();
        });
    })
})