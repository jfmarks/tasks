import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [name, setName] = useState<string>("Your Name");
    const [editMode, setMode] = useState<boolean>(false);
    const [isStudent, setStatus] = useState<boolean>(true);

    function updateMode(event: React.ChangeEvent<HTMLInputElement>) {
        setMode(event.target.checked);
    }
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        if (editMode) {
            setStatus(event.target.checked);
        }
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        if (editMode) {
            setName(event.target.value);
        }
    }
    function edits(): JSX.Element {
        return (
            <Form.Group controlId="giveAttempts">
                <Form.Control
                    type="string"
                    value={name}
                    placeholder="Enter the request number"
                    onChange={updateName}
                    disabled={!editMode}
                />
                <Form.Check
                    type="checkbox"
                    id="is-student-check"
                    label="Student?"
                    checked={isStudent}
                    onChange={updateStudent}
                    disabled={!editMode}
                />
            </Form.Group>
        );
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <Container>
                <Row>
                    <Col>{editMode ? edits() : "Not Edit Mode"}</Col>
                    <Col>
                        <Form.Check
                            type="switch"
                            id="is-Edit-Mode"
                            label="Edit Mode?"
                            checked={editMode}
                            onChange={updateMode}
                        />
                        <span hidden={editMode}>
                            {name +
                                (isStudent
                                    ? " is a student"
                                    : " is not a student")}
                        </span>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
