import { randomizeWord, displayFormatWord } from '../../utils/helpers'

test('should return a string', async () => {
    expect(randomizeWord(['test'])).toEqual('test');
});

test('should return a string', async () => {
    expect(displayFormatWord('test')).toEqual(['t', '_', '_', 't']);
});
