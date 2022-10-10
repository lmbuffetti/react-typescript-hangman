import React, { useState, useEffect } from 'react'
import Keyboard from '../components/Keyboard'
import Hangman from '../components/Hangman'
import Timer from '../components/Timer'
import DisplayWord from '../components/DisplayWord'
import { randomizeWord, displayFormatWord } from '../utils/helpers'

const IndexPage = () => {
    const [words, setWords] = useState([]);
    const [word, setWord] = useState('');
    const [displayWord, setDisplayWord] = useState([]);
    const [wrongLetter, setWrongLetter] = useState([]);
    const [chooseLetter, setChooseLetter] = useState([]);
    const [disabledKey, setDisabledKey] = useState(false);
    const [reset, setReset] = useState(false);
    const [win, setWin] = useState(false);
    const [lose, setLose] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (process.env.NODE_ENV !== 'test') {
            fetch('https://raw.githubusercontent.com/bevacqua/correcthorse/master/wordlist.json')
              .then((response) => response.json())
              .then((data) => {
                  const words = data.filter((val: string) => val.length >= 5 && val.length < 15);
                  const word = randomizeWord(words) || '';
                  setWord(word);
                  setWords([]);
                  setDisplayWord(displayFormatWord(word));
                  setLoading(false)
              });
        }
    }, []);

    const clickButton = (val: string) => {
        console.log(val, word);
        let letter: Array<string> = chooseLetter;
        let winGame: boolean = false;
        let displayWordGame = displayWord;
        if (word && word.indexOf(val) !== -1) {
            let w: string = word.toLowerCase();
            for(let i: number = 0; i < w.length; i++) {
                if(w[i] === val) {
                    displayWordGame[i] = val;
                }
            }
            if (displayWordGame.indexOf('_') === -1) {
                gameOver();
                winGame = true;
            }
        } else {
            setError(val);
            if (wrongLetter.length >= 7) {
                displayWordGame = word.split('');
            }
        }
        letter.push(val);
        setDisplayWord(displayWordGame);
        setChooseLetter(letter);
        setReset(true);
        setWin(winGame);
    }

    const setError = (val: string) => {
        const wrongLetterGame = [...wrongLetter];
        wrongLetterGame.push(val);
        let loseGame: boolean = false;
        if (wrongLetter.length >= 7) {
            gameOver();
            loseGame = true;
        }
        setWrongLetter(wrongLetterGame);
        setLose(loseGame);
    }

    const gameOver = () => {
        setDisabledKey(true);
        setDisplayWord(word.split(''));
    }

    const restartGame = () => {
        const wordGame = randomizeWord(words) || '';
        setWord(wordGame);
        setDisplayWord(displayFormatWord(wordGame));
        setLoading(false);
        setDisabledKey(false);
        setWrongLetter([]);
        setLose(false);
        setWin(false);
        setChooseLetter([]);
        setReset(false);
    }

    return (
      <div id="wrapper">
          {
            loading && (
              <div id="loading">
                  <div id="loading-center">
                      <div id="loading-center-absolute">
                          <div className="object" id="object_four" />
                          <div className="object" id="object_three" />
                          <div className="object" id="object_two" />
                          <div className="object" id="object_one" />
                      </div>
                  </div>
              </div>
            )
          }
          <Timer
            reset={reset}
            wrongLetter={wrongLetter}
            handle={(val) => setReset(val)}
            setError={(val: string) => setError(val)}
          />
          <Hangman
            wrongLetter={wrongLetter}
          />
          <DisplayWord word={displayWord} lose={lose} />
          {
              (win || lose) ? (
                <div className="endGameResult">
                    {
                      win && (
                        <span>
                            Congratulation<br />
                            you win the game!
                        </span>
                      )
                    }
                    {
                      lose && (
                        <span>
                            Game Over<br />
                            you lose the game!
                        </span>
                      )
                    }

                    <button
                      type="button"
                      onClick={() => restartGame()}
                    >
                        Restart new game
                    </button>
                </div>
              ) : (
                <Keyboard
                  click={(val) => clickButton(val)}
                  disabledKey={disabledKey}
                  letters={chooseLetter}
                  wrongLetter={wrongLetter}
                />
              )
          }
      </div>
    );
}

export default IndexPage;
