import * as React from "react";

interface IProps {
    wrongLetter: Array<string>,
}

class Hangman extends React.Component<IProps> {
    render() {
        const { wrongLetter } = this.props;
        const numError = wrongLetter.length;
        let door1X = 200 - numError;
        let door1Y = 250 + (5 * numError);
        let door2X = 200 + numError;
        let door2Y = 250 + (5 * numError);
        if (numError === 7) {
            door1X = 150;
            door1Y = 300;
            door2X = 250;
            door2Y = 300;
        }
        return (
            <svg height="300" width="300">
                <g id="body" style={{transform: numError >= 7 ? "translate(0px,90px)" : "translate(0px,0px)"}}>
                    <g id="head">
                        <circle cx="200" cy="80" r="20" stroke="black" strokeWidth="4" fill="white"/>
                        {
                            numError >= 7 ? (
                                <g id="xEyes">
                                    <line x1="190" y1="78" x2="196" y2="84"/>
                                    <line x1="204" y1="78" x2="210" y2="84"/>
                                    <line x1="190" y1="84" x2="196" y2="78"/>
                                    <line x1="204" y1="84" x2="210" y2="78"/>
                                </g>
                            ) : (
                                <g id="rEyes">
                                    <circle cx="193" cy="80" r="4"/>
                                    <circle cx="207" cy="80" r="4"/>
                                </g>
                            )
                        }
                    </g>

                    <line x1="200" y1="100" x2="200" y2="150"/>
                    <line id="armL" x1="200" y1="120" x2="170" y2="140"/>
                    <line id="armR" x1="200" y1="120" x2="230" y2="140"/>
                    <line id="legL" x1="200" y1="150" x2="180" y2="190"/>
                    <line id="legR" x1="200" y1="150" x2="220" y2="190"/>
                </g>
                <line x1="10" y1="250" x2="150" y2="250"/>
                <line id="door1" x1="150" y1="250" x2={door1X} y2={door1Y}/>
                <line id="door2" x1={door2X} y1={door2Y} x2="250" y2="250"/>
                <line x1="250" y1="250" x2="290" y2="250"/>
                <line x1="100" y1="250" x2="100" y2="20"/>
                <line x1="100" y1="20" x2="200" y2="20"/>
                <line id="rope" x1="200" y1="20" x2="200" y2={numError >= 7 ? "150" : "60"} />
            </svg>
        )
    }
}

export default Hangman;