import * as React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render, screen} from '@testing-library/react'
import DisplayWord from '../../components/DisplayWord'

test('Components', () => {
    const { container } = render(<DisplayWord word={['a', 'b', 'c']} />);
    expect(container.querySelector('#displayWord')).toBeTruthy();
    expect(screen.getAllByRole('span')[0]).toHaveTextContent('a');
});

it('check Display Word on end game', ()=> {
    const { container } = render(<DisplayWord word={['a', 'c']} />);
    expect(container.querySelector('span').classList.contains('wrongWord')).toBe(false);
});

it('check Display Word on end game', ()=> {
    const { container } = render(<DisplayWord word={['a', 'b', 'c']} lose={true} />);
    expect(container.querySelector('span').classList.contains('wrongWord')).toBe(true);
});
