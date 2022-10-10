import * as React from 'react'
import { render } from '@testing-library/react';
import IndexPages from "../../pages";

test('Components', () => {
    const { container } = render(<IndexPages />);
    expect(container.querySelector('#wrapper')).toBeTruthy();
});
