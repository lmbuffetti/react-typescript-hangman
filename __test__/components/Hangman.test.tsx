import * as React from 'react'
import Hangman from "../../components/Hangman";
import {render, screen} from '@testing-library/react';

test('Components', () => {
    const { container: checkNoError } = render(<Hangman wrongLetter={['a']} />);
    expect(checkNoError.querySelector('#rEyes')).toBeTruthy();

    const { container: checkError } = render(<Hangman wrongLetter={['a', 'b', 'c', 'd', 'e', 'f', 'g']} />);
    expect(checkError.querySelector('#xEyes')).toBeTruthy();

});

describe('componentWillReceiveProps()', () => {
    it('call logUserId once', () => {

        let wrongLetter = ['a'];
        const { rerender } = render(<Hangman wrongLetter={wrongLetter}/>);
        expect(screen.getByTestId('head')).toBeTruthy();

        wrongLetter = ['a', 'b'];
        rerender(<Hangman wrongLetter={wrongLetter}/>);
        expect(screen.getByTestId('neck')).toBeTruthy();

        wrongLetter = ['a', 'b', 'c'];
        rerender(<Hangman wrongLetter={wrongLetter}/>);
        expect(screen.getByTestId('armL')).toBeTruthy();

        wrongLetter = ['a', 'b', 'c', 'd'];
        rerender(<Hangman wrongLetter={wrongLetter}/>);
        expect(screen.getByTestId('armR')).toBeTruthy();

        wrongLetter = ['a', 'b', 'c', 'd', 'e'];
        rerender(<Hangman wrongLetter={wrongLetter}/>);
        expect(screen.getByTestId('legL')).toBeTruthy();

        wrongLetter = ['a', 'b', 'c', 'd', 'e', 'f'];
        rerender(<Hangman wrongLetter={wrongLetter}/>);
        expect(screen.getByTestId('legR')).toBeTruthy();

        wrongLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
        rerender(<Hangman wrongLetter={wrongLetter}/>);
        expect(screen.getByTestId('xEyes')).toBeTruthy();
    })
});
