import React from "react";

export interface KeyboardProps {
    click(event: any): void,
    disabledKey?: boolean,
    letters: Array<string>,
    wrongLetter: Array<string>,
}

const Keyboard = (props: KeyboardProps) => {
    const keys = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const {
        letters = [],
        click = null,
        disabledKey = false,
        wrongLetter = [],
    } = props;
    console.log(wrongLetter);
    return (
      <div id="wrapKeyboard">
          {
              keys.map((val, i) => (
                <button
                  type="button"
                  key={i.toString()}
                  onClick={() => click(val)}
                  disabled={letters.indexOf(val) !== -1 || disabledKey}
                  className={`keyBoard ${wrongLetter.indexOf(val) !== -1 ? 'wrong' : 'correct'}`}
                >
                    {val}
                </button>
              ))
          }
      </div>
    )
}

export default Keyboard;
