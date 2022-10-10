import * as React from 'react'
import Timer from "../../components/Timer";
import {render} from '@testing-library/react';

test('Components', () => {
    const { container: app } = render(<Timer wrongLetter={['a', 'b', 'c', 'd', 'e', 'f', 'g']} reset={false} />);
    expect(app.querySelector('#timer').innerHTML).toEqual("");
});
