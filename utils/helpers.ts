// Display the random word on the screen as underscores
export function displayWord(word: string): Array<string> {
    word = word.toLowerCase();
    const guessedWord: Array<string> = [];
    for (let i: number = 0; i < word.length; i++) {
        if (/[a-zA-Z]/g.test(word[i]) && i !== 0 && i !== word.length - 1) {
            // character at word[i] is a letter, replace with underscore
            guessedWord.push('_');
        } else {
            // character at word[i] is a symbol or number, do not replace
            guessedWord.push(word[i]);
        }
    }
    return guessedWord;
}

// Pick a random word from the array passed in, and return it
export function randomizeWord(words: Array<string>): string {
    return words[Math.floor(Math.random() * words.length)];
}
