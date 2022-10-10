import * as React from 'react'
import Hangman from "../../components/Hangman";
import {render, screen} from '@testing-library/react';

test('Components', () => {
    const { container: checkNoError } = render(<Hangman wrongLetter={['a']} />);
    expect(checkNoError.querySelector('#rEyes').outerHTML).toEqual('<g id="rEyes"><circle cx="193" cy="80" r="4"></circle><circle cx="207" cy="80" r="4"></circle></g>');

    const { container: checkError } = render(<Hangman wrongLetter={['a', 'b', 'c', 'd', 'e', 'f', 'g']} />);
    expect(checkError.querySelector('#xEyes').outerHTML).toEqual('<g id="xEyes"><line x1="190" y1="78" x2="196" y2="84"></line><line x1="204" y1="78" x2="210" y2="84"></line><line x1="190" y1="84" x2="196" y2="78"></line><line x1="204" y1="84" x2="210" y2="78"></line></g>');

});

describe('componentWillReceiveProps()', () => {
    it('call logUserId once', () => {
        let wrongLetter = ['a', 'b'];
        const { rerender } = render(<Hangman wrongLetter={wrongLetter}/>);

        expect(screen.getByTestId('neck').outerHTML).toEqual('<line data-testid="neck" id="neck" x1="200" y1="100" x2="200" y2="150"></line>');

        wrongLetter = ['a', 'b', 'c'];
        // triggers componentWillReceiveProps
        rerender(<Hangman wrongLetter={wrongLetter}/>);
        expect(screen.getByTestId('armL').outerHTML).toEqual('<line data-testid="armL" id="armL" x1="200" y1="120" x2="170" y2="140"></line>');
        // PASS!
        //expect(logUserId).to.be.calledOnce.and.calledWith(wrongLetter);
    })
});
