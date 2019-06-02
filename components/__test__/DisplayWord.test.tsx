import * as React from 'react'
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import DisplayWord from '../DisplayWord'

test('Components', () => {
    const app = shallow(<DisplayWord word={['a']} />);
    expect(app.find('span').text()).toEqual("a");

    expect(toJSON(app)).toMatchSnapshot();
});

it('check Display Word on end game', ()=> {
    const app = shallow(<DisplayWord word={['a']} />);
    expect(app.find('#displayWord').find('span').hasClass('wrongWord')).toEqual(false);
});

it('check Display Word on end game', ()=> {
    const app = shallow(<DisplayWord word={['a']} lose={true} />);
    expect(app.find('#displayWord').find('span').hasClass('wrongWord')).toEqual(true);
});