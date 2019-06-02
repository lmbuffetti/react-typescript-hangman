import * as React from 'react'
import IndexPage from '../index'

describe('Pages', () => {
    describe('Index', () => {
        it('should pass', () => {
            expect(<IndexPage />).toMatchSnapshot();
        });
    })
})