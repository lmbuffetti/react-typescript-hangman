import * as React from 'react'
import renderer from 'react-test-renderer';
import Timer from '../Timer'

test('Components', () => {
    const app = renderer.create(<Timer wrongLetter={['a', 'b', 'c', 'd', 'e', 'f', 'g']} reset={false} />);
    expect(app.text()).toEqual("");

    expect(app.toJSON()).toMatchSnapshot();
});

it('should test interval functions', ()=>{
    jest.useFakeTimers();
    const app = renderer.create(<Timer />);
    expect(app.state('timer')).toEqual(30);
    app.instance().componentDidMount();
    jest.advanceTimersByTime(5000);
    expect(app.state('timer')).toEqual(20);
    jest.useRealTimers();
})
