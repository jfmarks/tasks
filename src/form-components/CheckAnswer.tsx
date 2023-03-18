import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [input, setInput] = useState<string>("");
    function updateInput(event: React.ChangeEvent<HTMLInputElement>) {
        setInput(event.target.value);
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formAnswer">
                <Form.Label>Answer</Form.Label>
                <Form.Control
                    value={input}
                    placeholder="Enter Answer"
                    onChange={updateInput}
                />
            </Form.Group>
            <span>{input === expectedAnswer ? "✔️" : "❌"}</span>
        </div>
    );
}
