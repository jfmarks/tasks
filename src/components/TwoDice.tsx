import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [curNumL, setNumL] = useState<number>(0);
    const [curNumR, setNumR] = useState<number>(1);
    function rollL() {
        setNumL(d6);
    }
    function rollR() {
        setNumR(d6);
    }
    function winOrLose() {
        if (curNumL === 1 && curNumR === 1) {
            return "Lose.";
        } else if (curNumL === curNumR) {
            return "Win. ";
        } else {
            return "------";
        }
    }
    return (
        <div>
            <span data-testid="left-die">{curNumL}</span>
            <Button onClick={rollL}>Roll Left</Button>
            <span>{winOrLose()}</span>
            <Button onClick={rollR}>Roll Right</Button>
            <span data-testid="right-die">{curNumR}</span>
        </div>
    );
}
