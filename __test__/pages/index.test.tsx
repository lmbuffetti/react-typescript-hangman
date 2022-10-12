import * as React from 'react'
import { render, screen, act } from '@testing-library/react';
import IndexPages from "../../pages";

test('Components', async () => {
    const { container } = render(<IndexPages />);
    expect(container.querySelector('#wrapper')).toBeTruthy();

    await act( async () => {
        const keys = 'abcdefghijklmnopqrstuvwxyz'.split('');
        keys.forEach((key) => {
            screen.getByRole(`btn${key}`).click();
        });
    });
});
