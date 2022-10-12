import * as React from 'react'
import Timer from "../../components/Timer";
import {render} from '@testing-library/react';

test('Components', () => {
    const { container: app, rerender } = render(<Timer wrongLetter={['a', 'b', 'c', 'd', 'e', 'f']} reset={false} />);
    expect(app.querySelector('#timer')).toBeTruthy();

    rerender(<Timer wrongLetter={[]} reset={true} />);
    expect(app.querySelector('#timer')).toBeTruthy();

});
