import * as React from 'react'
import {render, screen} from '@testing-library/react';
import Keyboard from "../../components/Keyboard";

test('Components', () => {
    render(<Keyboard keys={['a']} />);
    expect(screen.getByRole("btna")).toBeTruthy();

});
