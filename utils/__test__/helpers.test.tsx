import { randomizeWord, displayWord } from '../helpers'

test('should return a string', async () => {
    expect(randomizeWord(['test'])).toEqual('test');
});

test('should return a string', async () => {
    expect(displayWord('test')).toEqual(['t', '_', '_', 't']);
});
