import * as React from 'react'
import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils';
import {render, screen} from '@testing-library/react';
import IndexPages from "../pages/index";

test('Components', () => {
    render(<IndexPages />);
    const app = renderer
      .create(<IndexPages />)
      .toJSON();
    expect(app).toMatchSnapshot();

});

it('should clickButton', ()=>{
    const app = ReactTestUtils.renderIntoDocument(<IndexPages />);
    expect(app.state('val')).toEqual('');
    app.setState({'word': 'test'});
    app.setState({'displayWord': ['t', '_', '_', 't']});
    app.clickButton('e');
    expect(app.state('val')).toEqual('e');
    expect(app.state('chooseLetter')).toEqual(['e']);
    expect(app.state('reset')).toEqual(true);
    expect(app.state('displayWord')).toEqual(['t', 'e', '_', 't']);
    expect(app.state('win')).toEqual(false);
});

it('should setError', ()=>{
    const app = renderer.create(<IndexPages />);
    expect(app.state('wrongLetter')).toEqual([]);
    app.instance().setError('a');
    expect(app.state('wrongLetter')).toEqual(['a']);

    const appError = renderer.create(<IndexPages />);
    expect(appError.state('wrongLetter')).toEqual([]);
    appError.instance().setError('a');
    appError.instance().setError('b');
    appError.instance().setError('c');
    appError.instance().setError('d');
    appError.instance().setError('e');
    appError.instance().setError('f');
    appError.instance().setError('g');
    expect(appError.state('wrongLetter')).toEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g']);
});

it('should check message end game', ()=>{
    const app = renderer.create(<IndexPages />);
    app.instance().setState({'win': true, 'loading': false});
    expect(app.find('.endGameResult').text()).toEqual('Congratulationyou win the game!Restart new game');
    app.instance().setState({'win': false, 'lose': true});
    expect(app.find('.endGameResult').text()).toEqual('Game Overyou lose the game!Restart new game');
});

it('should check preload', ()=>{
    const app = renderer.create(<IndexPages />);
    expect(app.find('#loading').exists()).toBe(true);
});

it('should check hide preload', ()=>{
    const app = renderer.create(<IndexPages />);
    app.instance().setState({'loading': false});
    expect(app.find('#loading').exists()).toBe(false);
});
