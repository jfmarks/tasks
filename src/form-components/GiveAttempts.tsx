import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptNum, setAttemptNum] = useState<number>(3);
    const [numRequest, setNumRequest] = useState<string>("");
    function updateNumRequest(event: React.ChangeEvent<HTMLInputElement>) {
        setNumRequest(event.target.value);
    }
    function updateAttempts() {
        if (numRequest !== "") {
            setAttemptNum(attemptNum + parseInt(numRequest));
        }
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <Container>
                <Row>
                    <Col>
                        <Form.Group controlId="giveAttempts">
                            <Form.Control
                                type="number"
                                value={numRequest}
                                placeholder="Enter the request number"
                                onChange={updateNumRequest}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Button
                            onClick={() => setAttemptNum(attemptNum - 1)}
                            disabled={attemptNum === 0}
                        >
                            use
                        </Button>
                        <span> Attempts left: {attemptNum} </span>
                        <Button
                            onClick={updateAttempts}
                            disabled={numRequest === ""}
                        >
                            gain
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
