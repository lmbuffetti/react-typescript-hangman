import * as React from 'react'
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Timer from '../Timer'

test('Components', () => {
    const app = shallow(<Timer wrongLetter={['a', 'b', 'c', 'd', 'e', 'f', 'g']} reset={false} />);
    expect(app.text()).toEqual("30");

    expect(toJSON(app)).toMatchSnapshot();
});

it('should test interval functions', ()=>{
    jest.useFakeTimers();
    const app = shallow(<Timer />);
    expect(app.state('timer')).toEqual(30);
    app.instance().componentDidMount();
    jest.advanceTimersByTime(5000);
    expect(app.state('timer')).toEqual(20);
    jest.useRealTimers();
})