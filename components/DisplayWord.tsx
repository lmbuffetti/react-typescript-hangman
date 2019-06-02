import * as React from "react";

type IProps = {
    word: Array<string>;
}

const DisplayWord: React.FunctionComponent<IProps> = ({ word }) => (
    <div id="timer">
        {
            word.map((item, i) => (
                <span key={i.toString()}>{item}</span>
            ))
        }
    </div>
)

export default DisplayWord;
