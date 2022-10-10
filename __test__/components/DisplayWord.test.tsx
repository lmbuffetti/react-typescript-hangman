import * as React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render, screen} from '@testing-library/react'
import DisplayWord from '../../components/DisplayWord'

test('Components', () => {
    render(<DisplayWord word={['a']} />);
    expect(screen.getByRole('span')).toHaveTextContent('a');
});

it('check Display Word on end game', ()=> {
    const { container } = render(<DisplayWord word={['a']} />);
    expect(container.querySelector('span').classList.contains('wrongWord')).toBe(false);
});

it('check Display Word on end game', ()=> {
    const { container } = render(<DisplayWord word={['a']} lose={true} />);
    expect(container.querySelector('span').classList.contains('wrongWord')).toBe(true);
});
