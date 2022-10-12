import React, { useState, useEffect } from "react";

interface IProps {
    wrongLetter?: Array<string>,
}

const Hangman = (props: IProps) => {
    const [door1X, setDoor1x] = useState(200);
    const [door2X, setDoor2X] = useState(200);
    const [doorY, setDoorY] = useState(250);

    const {
        wrongLetter = [],
    } = props;

    useEffect(() => {
        const numError = wrongLetter.length;
        let door1XGame: number;
        let doorYGame: number;
        let door2XGame: number;
        if (numError >= 7) {
            door1XGame = 150;
            doorYGame = 300;
            door2XGame = 250;
        } else {
            door1XGame = 200 - numError;
            doorYGame = 250 + (5 * numError);
            door2XGame = 200 + numError;
        }
        setDoor1x(door1XGame);
        setDoor2X(door2XGame);
        setDoorY(doorYGame);
    }, [wrongLetter])

    const numError = wrongLetter.length;

    return (
      <svg height="300" width="300">
          <g id="body" style={{transform: numError >= 7 ? "translate(0px,90px)" : "translate(0px,60px)"}}>
            {
              numError >= 1 && (
                <g data-testid="head" id="head">
                  <circle cx="200" cy="80" r="20" stroke="black" strokeWidth="4" fill="white" id="circleHead"/>
                  {
                    numError >= 7 ? (
                      <g data-testid="xEyes" id="xEyes">
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
              )
            }
            {
              numError >= 2 && (
                <line data-testid="neck" id="neck" x1="200" y1="100" x2="200" y2="150"/>
              )
            }
            {
              numError >= 3 && (
                <line data-testid="armL" id="armL" x1="200" y1="120" x2="170" y2="140"/>
              )
            }
            {
              numError >= 4 && (
                <line data-testid="armR" id="armR" x1="200" y1="120" x2="230" y2="140"/>
              )
            }
            {
              numError >= 5 && (
                <line data-testid="legL" id="legL" x1="200" y1="150" x2="180" y2="190"/>
              )
            }
            {
              numError >= 6 && (
                <line data-testid="legR" id="legR" x1="200" y1="150" x2="220" y2="190"/>
              )
            }
          </g>
          <line x1="10" y1="250" x2="150" y2="250"/>
          <line id="door1" x1="150" y1="250" x2={door1X} y2={doorY}/>
          <line id="door2" x1={door2X} y1={doorY} x2="250" y2="250"/>
          <line x1="250" y1="250" x2="290" y2="250"/>
          <line x1="100" y1="250" x2="100" y2="20"/>
          <line x1="100" y1="20" x2="200" y2="20"/>
          <line id="rope" x1="200" y1="20" x2="200" y2={numError >= 7 ? "150" : "120"} />
      </svg>
    )
}

export default Hangman;
