import React from "react";

export interface KeyboardProps {
    click?: (event: any) => void,
    disabledKey?: boolean,
    keys?: string[];
    letters?: Array<string>,
    wrongLetter?: Array<string>,
}

const Keyboard = (props: KeyboardProps) => {
    const {
        letters = [],
        click = null,
        keys = 'abcdefghijklmnopqrstuvwxyz'.split(''),
        disabledKey = false,
        wrongLetter = [],
    } = props;

    return (
      <div id="wrapKeyboard">
          {
              keys.map((val, i) => (
                <button
                  role={`btn${val}`}
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
