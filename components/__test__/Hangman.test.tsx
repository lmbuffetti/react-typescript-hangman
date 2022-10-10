import * as React from 'react'
import renderer from 'react-test-renderer';
import Hangman from "../Hangman";

test('Components', () => {
    const hangman = renderer.create(<Hangman wrongLetter={['a']} />);

    const checkNoError = renderer.create(<Hangman wrongLetter={['a']} />);
    expect(checkNoError.find('#rEyes').html()).toEqual('<g id="rEyes"><circle cx="193" cy="80" r="4"></circle><circle cx="207" cy="80" r="4"></circle></g>');

    const checkError = renderer.create(<Hangman wrongLetter={['a', 'b', 'c', 'd', 'e', 'f', 'g']} />);
    expect(checkError.find('#xEyes').html()).toEqual('<g id="xEyes"><line x1="190" y1="78" x2="196" y2="84"></line><line x1="204" y1="78" x2="210" y2="84"></line><line x1="190" y1="84" x2="196" y2="78"></line><line x1="204" y1="84" x2="210" y2="78"></line></g>');

    expect(hangman.toJSON()).toMatchSnapshot();

});

describe('componentWillReceiveProps()', () => {
    it('call logUserId once', () => {
        let wrongLetter = ['a', 'b'];
        const component = renderer.create(<Hangman wrongLetter={['a']}/>);
        // resetting call count from componentWillMount()
        wrongLetter = ['a', 'b', 'c'];
        // triggers componentWillReceiveProps
        component.setProps({ wrongLetter });
        // PASS!
        //expect(logUserId).to.be.calledOnce.and.calledWith(wrongLetter);
    })
});
