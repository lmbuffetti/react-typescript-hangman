import React, { useEffect, useState } from "react";

interface IProps {
    reset: boolean,
    handle(event: any): void,
    setError(val: string): void,
    wrongLetter: Array<string>,
}

const Timer = (props: IProps) =>{
    const {
        reset = false,
        handle = null,
        setError = null,
        wrongLetter = [],
    } = props;

    const [timer, setTimer] = useState(30);
    const [intervalTimer, setInterval] = useState(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            let intervalTimer: any = window.setInterval(() => {
                let newTimer: number = timer;
                if (reset) handle(false);
                if (newTimer === 0 || reset) {
                    setTimer(30);
                    setError('');
                } else {
                    setTimer((prev) => prev - 1);
                }
            }, 1000);
            setInterval(intervalTimer);
        }
    }, []);

    if (wrongLetter.length >= 7) clearInterval(intervalTimer);
    const perc = (100 * timer) / 30;

    return (
      <div id="timer" style={{width: `${perc}%`}} />
    )

}

export default Timer;
