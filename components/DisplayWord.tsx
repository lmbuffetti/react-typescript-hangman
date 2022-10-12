import * as React from "react";

type IProps = {
    word: Array<string>;
    lose?: boolean,
}

const DisplayWord = (props: IProps) => {
    const {
        word,
        lose = false
    } = props;

    return (
      <div id="displayWord">
          {
              word.map((item, i) => (
                <span role="span" key={i.toString()} className={lose ? 'wrongWord' : ''}>{item}</span>
              ))
          }
      </div>
    )
}

export default DisplayWord;
