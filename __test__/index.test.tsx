import * as React from 'react'
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import IndexPages from "../pages/index";


test('Components', () => {
    const checkbox = shallow(<IndexPages />);

    expect(toJSON(checkbox)).toMatchSnapshot();

});

it('should clickButton', ()=>{
    const app = shallow(<IndexPages />);
    expect(app.state('val')).toEqual('');
    app.instance().setState({'word': 'test'});
    app.instance().setState({'displayWord': ['t', '_', '_', 't']});
    app.instance().clickButton('e');
    expect(app.state('val')).toEqual('e');
    expect(app.state('chooseLetter')).toEqual(['e']);
    expect(app.state('reset')).toEqual(true);
    expect(app.state('displayWord')).toEqual(['t', 'e', '_', 't']);
    expect(app.state('win')).toEqual(false);
});

it('should setError', ()=>{
    const app = shallow(<IndexPages />);
    expect(app.state('wrongLetter')).toEqual([]);
    app.instance().setError('a');
    expect(app.state('wrongLetter')).toEqual(['a']);

    const appError = shallow(<IndexPages />);
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
    const app = shallow(<IndexPages />);
    app.instance().setState({'win': true});
    expect(app.find('.endGameResult').text()).toEqual('You Win');
    app.instance().setState({'win': false, 'lose': true});
    expect(app.find('.endGameResult').text()).toEqual('You Lose');
})