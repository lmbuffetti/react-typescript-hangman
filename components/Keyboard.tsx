import * as React from "react";

export interface KeyboardProps {
    keys: Array<string>,
    letters: Array<string>,
    click(event: any): void,
    disabledKey: boolean,
}

class Keyboard extends React.Component<KeyboardProps> {
    static defaultProps = {
        keys: 'abcdefghijklmnopqrstuvwxyz'.split(''),
        letters: [],
        click: null,
        disabledKey: false,
    };

    render() {
        const { keys, click, letters, disabledKey } = this.props;
        return (
            <div id="wrapKeyboard">
                {
                    keys.map((val, i) => (
                        <button
                            type="button"
                            key={i.toString()}
                            onClick={() => click(val)}
                            disabled={letters.indexOf(val) !== -1 || disabledKey}
                            className="keyBoard"
                        >
                            {val}
                        </button>
                    ))
                }
            </div>
        )
    }
}

export default Keyboard;