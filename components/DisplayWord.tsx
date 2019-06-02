import * as React from "react";

type IProps = {
    word: Array<string>;
    lose: boolean,
}

const DisplayWord: React.FunctionComponent<IProps> = ({ word, lose = false }) => (
    <div id="displayWord">
        {
            word.map((item, i) => (
                <span key={i.toString()} className={lose ? 'wrongWord' : ''}>{item}</span>
            ))
        }
    </div>
)

export default DisplayWord;
