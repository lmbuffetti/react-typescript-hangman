import * as React from 'react'
import axios from 'axios';
import Keyboard from '../components/Keyboard'
import Hangman from '../components/Hangman'
import Timer from '../components/Timer'
import DisplayWord from '../components/DisplayWord'
import '../assets/styles/main.scss'
import { randomizeWord, displayWord } from '../utils/helpers'


interface IState {
    word: string | null,
    words: Array<string>,
    displayWord: Array<string>,
    wrongLetter: Array<string>,
    chooseLetter: Array<string>,
    timer: number,
    reset: boolean,
    disabledKey: boolean,
    val: string,
    win: boolean,
    lose: boolean,
    loading: boolean,
}

interface IProps {}


class IndexPage extends React.Component<IProps, IState> {
    constructor(public props: any) {
        super(props);

        this.state = {
            words: [],
            word: '',
            displayWord: [],
            wrongLetter: [],
            chooseLetter: [],
            timer: 30,
            reset: false,
            disabledKey: false,
            val: '',
            win: false,
            lose: false,
            loading: true,
        };
        this.restartGame = this.restartGame.bind(this);
    }

    componentDidMount() {
        const self = this;
        return axios.get('https://api.myjson.com/bins/r1ilv')
            .then((response) => {
                // handle success
                const words = response.data.filter((val: string) => val.length >= 5 && val.length < 15);
                const word = randomizeWord(words) || '';
                self.setState({
                    words,
                    word,
                    displayWord: displayWord(word),
                    loading: false,
                });
            })
            .catch((error) => {
                // handle error
                console.log(error);
            });
    }

    clickButton(val: string) {
        const { word, chooseLetter, wrongLetter } = this.state;
        let { displayWord } = this.state;
        let letter: Array<string> = chooseLetter;
        let win: boolean = false;
        if (word && word.indexOf(val) !== -1) {
            let w: string = word.toLowerCase();
            for(let i: number = 0; i < w.length; i++) {
                if(w[i] === val) {
                    displayWord[i] = val;
                }
            }
            if (displayWord.indexOf('_') === -1) {
                this.gameOver();
                win = true;
            }
        } else {
            this.setError(val);
            if (wrongLetter.length >= 7) {
                displayWord = word.split('');
            }
        }
        letter.push(val);
        this.setState({
            displayWord,
            chooseLetter: letter,
            reset: true,
            val,
            win,
        });
    }

    setError(val: string) {
        const { wrongLetter } = this.state;
        wrongLetter.push(val);
        let lose: boolean = false;
        if (wrongLetter.length >= 7) {
            this.gameOver();
            lose = true;
        }
        this.setState({
            wrongLetter,
            lose
        })
    }

    gameOver() {
        const { word } = this.state;
        this.setState({
            disabledKey: true,
            displayWord: word.split(''),
        })
    }

    restartGame() {
        const { words } = this.state;
        const word = randomizeWord(words) || '';
        this.setState({
            word,
            displayWord: displayWord(word),
            loading: false,
            disabledKey: false,
            wrongLetter: [],
            lose: false,
            win: false,
            chooseLetter: [],
            reset: true,
        });
    }

    render() {
        const {
            displayWord, chooseLetter, reset, disabledKey, wrongLetter, win, lose, loading,
        } = this.state;
        return(
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
                    handle={(val) => this.setState({reset: val})}
                    setError={this.setError.bind(this, '')}
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
                                onClick={this.restartGame}
                            >
                                Restart new game
                            </button>
                        </div>
                    ) : (
                        <Keyboard
                            letters={chooseLetter}
                            wrongLetter={wrongLetter}
                            click={(val) => this.clickButton(val)}
                            disabledKey={disabledKey}
                        />
                    )
                }
            </div>
        );
    }
}

export default IndexPage;
