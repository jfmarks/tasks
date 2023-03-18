import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const colorList: string[] = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "magenta",
        "white",
        "black"
    ];

    const [color, setColor] = useState<string>("red");

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            {colorList.map((curColor: string) => (
                <Form.Check
                    key={curColor}
                    type="radio"
                    name="color"
                    onChange={updateColor}
                    id="ColorOption"
                    label={curColor}
                    value={curColor}
                    checked={color === curColor}
                    inline
                    style={{ backgroundColor: curColor }}
                />
            ))}
            <div>
                You have chosen:
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: color }}
                >
                    {color}
                </span>
            </div>
        </div>
    );
}
