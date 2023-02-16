import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./App.css";
import cat from "./assets/cat.png";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <Container>
                <Row>
                    <Col>
                        <div className="RedRec"></div>
                        <ol>
                            <li>Trapinch</li>
                            <li>Flygon</li>
                            <li>Vibrava</li>
                            <li>Regirock</li>
                        </ol>

                        <Button
                            onClick={() => console.log("Hello World!")}
                            className="AppAlt"
                        >
                            Log Hello World
                        </Button>
                    </Col>
                    <Col>
                        <div className="RedRec"></div>
                        <h1
                            className="AppAlt"
                            style={{ backgroundColor: "rgb(100,100,100)" }}
                        >
                            My name is Jacob Marks. Hello World. Flygon is a
                            good Flygon is a good pokemon
                        </h1>
                        <img
                            src={cat}
                            alt="Nice opinion. One small issue. I am inside your home"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
