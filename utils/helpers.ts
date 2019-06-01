/*
// TIMER GAME
export function loadTimer() {
    setInterval(() => {
        if (wrongGuessed.length < 7) {
            let guessInput: HTMLElement = <HTMLInputElement>document.getElementById('timer');
            guessInput.innerHTML = `${num}s`;
            if (num === 0) {
                strikeout('');
                num = 30;
            }
            num--;
        }
    },1000);
}

// SUBMIT FORM
export function sendLetter (event: any) {
    let guess: string = event;
    let idButton = <HTMLInputElement>document.getElementById(`button_${event}`);
    if (idButton) {
        idButton.disabled = true;
    }
    if (guessed.indexOf(guess) !== -1) {
        alert('You have already guessed the letter ' + guess);
        return;
    }
    if (word.toLowerCase().indexOf(guess) === -1) {
        // guess is incorrect
        strikeout(guess);
    } else {
        // guessed letter exists in word
        correctGuess(word, guess);
        if (guessedWord.indexOf('_') === -1) winGame();
    }
    guessed.push(guess);
    // clear the input
    num = 30;
    if (strikes === 6) gameOver();
    return event;
}
*/
// Display the random word on the screen as underscores
export function displayWord(word: string): Array<string> {
    word = word.toLowerCase();
    const guessedWord: Array<string> = [];
    for (let i = 0; i < word.length; i++) {
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
/*
export function correctGuess(word: string, guess: string) {
    let w = word.toLowerCase();
    for(let i = 0; i < w.length; i++) {
        if(w[i] === guess) {
            guessedWord[i] = guess;
        }
    }
    const randomWord: HTMLElement | null = document.getElementById('randomWord');
    if(randomWord) {
        randomWord.innerHTML = guessedWord.join(" ");
    }
    return guess;
}

export function strikeout(guess: string) {
    strikes++;
    const strikesHTML: HTMLElement | null = document.getElementById('strikes');
    if(strikesHTML) strikesHTML.innerHTML += 'X ';
    const door1: HTMLElement = <HTMLElement>document.getElementById('door1');
    let valDoor1X: number | string = 0;
    let valDoor1Y: number | string = 0;
    if (door1) {
        valDoor1X = door1.getAttribute('x2') || 0;
        valDoor1Y = door1.getAttribute('y2') || 0;
    }
    const door1Y: number = +valDoor1Y + 5;
    const door1X: number = +valDoor1X - 2;
    const door2: HTMLElement = <HTMLElement>document.getElementById('door2');
    let valDoor2X: number | string = 0;
    let valDoor2Y: number | string = 0;
    if (door2) {
        valDoor2X = door2.getAttribute('x1') || 0;
        valDoor2Y = door2.getAttribute('y1') || 0;
    }
    const door2Y: number = +valDoor2Y + 5;
    const door2X: number = +valDoor2X + 2;
    if (door1) {
        door1.setAttribute('y2', door1Y.toString());
        door1.setAttribute('x2', door1X.toString());
    }
    if (door2) {
        door2.setAttribute('y1', door2Y.toString());
        door2.setAttribute('x1', door2X.toString());
    }
    wrongGuessed.push(guess);
    if (wrongGuessed.length >= 7) {
        const rEyes: HTMLElement = <HTMLElement>document.getElementById('rEyes');
        const xEyes: HTMLElement = <HTMLElement>document.getElementById('xEyes');
        rEyes.setAttribute('class', 'hide');
        xEyes.setAttribute('class', '');
        const rope: HTMLElement = <HTMLElement>document.getElementById('rope');
        const body: HTMLElement = <HTMLElement>document.getElementById('body');
        door1.setAttribute('y2', '300');
        door1.setAttribute('x2', '150');
        door2.setAttribute('y1', '300');
        door2.setAttribute('x1', '250');
        rope.setAttribute('y2', '150');
        body.style.transform = "translate(0px,90px)";
        let elems: any = document.getElementsByClassName('btnLetter');
        for(let i = 0; i < elems.length; i++) {
            elems[i].disabled = true;
        }
    }
    return guess;
}

export function winGame() {
    return 'You win the game';
}

function gameOver() {
    const randomWord: HTMLElement | null = document.getElementById('randomWord');
    if(randomWord) {
        randomWord.innerHTML = guessedWord.join(" ");
    }
}
*/