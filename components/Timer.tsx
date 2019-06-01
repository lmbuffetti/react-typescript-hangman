import * as React from "react";

interface IProps {
    reset: boolean,
    handle(event: any): void,
    setError(): void,
    wrongLetter: Array<string>,
}

interface IState {
    timer: number,
    intervalTimer: any,
}

class Timer extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            timer: 30,
            intervalTimer: null,
        }
    }

    componentDidMount(): void {
        const self = this;
        let intervalTimer = setInterval(() => {
            const { timer } = this.state;
            const { reset, handle, setError } = this.props;
            let newTimer = reset? 30 : timer - 1;
            if (reset) handle(false);
            if (newTimer === 0) {
                newTimer = 30;
                setError();
            }
            self.setState({
                timer : newTimer,
            });
        }, 1000);
        this.setState({
            intervalTimer,
        })
    }

    render() {
        const { timer, intervalTimer } = this.state;
        const { wrongLetter } = this.props;
        if (wrongLetter.length >= 7) clearInterval(intervalTimer);
        return (
            <div id="timer">{timer}</div>
        )
    }
}

export default Timer;