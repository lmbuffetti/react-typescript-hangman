import * as React from 'react'
import axios from 'axios';
import Keyboard from '../components/Keyboard'
import Hangman from '../components/Hangman'
import Timer from '../components/Timer'
import DisplayWord from '../components/DisplayWord'
import '../styles/main.scss'
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
        };
    }

    componentWillMount(): void {
        const self = this;
        axios.get('https://api.myjson.com/bins/r1ilv')
            .then((response) => {
                // handle success
                const words = response.data.filter((val: string) => val.length >= 5 && val.length < 15);
                const word = randomizeWord(words) || '';
                self.setState({
                    words,
                    word,
                    displayWord: displayWord(word),
                });
            })
            .catch((error) => {
                // handle error
                console.log(error);
            });
    }

    clickButton(val: string) {
        const { word, displayWord, chooseLetter } = this.state;
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
        this.setState({
            disabledKey: true,
        })
    }

    render() {
        const {
            displayWord, chooseLetter, reset, disabledKey, wrongLetter, win, lose,
        } = this.state;
        return(
            <div>
                <Hangman
                    wrongLetter={wrongLetter}
                />
                <DisplayWord word={displayWord} />
                {
                    win && (
                        <div>You Win</div>
                    )
                }
                {
                    lose && (
                        <div>You Lose</div>
                    )
                }
                <Keyboard
                    letters={chooseLetter}
                    click={(val) => this.clickButton(val)}
                    disabledKey={disabledKey}
                />
                <Timer
                    reset={reset}
                    wrongLetter={wrongLetter}
                    handle={(val) => this.setState({reset: val})}
                    setError={this.setError.bind(this, '')}
                />
            </div>
        );
    }
}

export default IndexPage;
