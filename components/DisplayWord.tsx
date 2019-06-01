import * as React from "react";

interface DisplayWordProps {
    word: Array<string>;
}

class DisplayWord extends React.Component<DisplayWordProps> {
    static defaultProps = {
        word: [],
    };

    render() {
        const { word } = this.props;
        return (
            <div id="timer">
                {
                    word.map((item, i) => (
                        <span key={i.toString()}>{item}</span>
                    ))
                }
            </div>
        )
    }
}

export default DisplayWord;
