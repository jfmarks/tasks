import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [choice, setChoice] = useState<string>(options[0]);
    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setChoice(event.target.value);
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Container>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Select an answer</Form.Label>
                            <Form.Select value={choice} onChange={updateChoice}>
                                {options.map((option: string) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col>
                        <span>{expectedAnswer === choice ? "✔️" : "❌"}</span>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
