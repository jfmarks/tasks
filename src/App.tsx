import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./App.css";
import cat from "./assets/cat.png";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

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
                            good pokemon
                        </h1>
                        <img
                            src={cat}
                            alt="Nice opinion. One small issue. I am inside your home"
                        />
                    </Col>
                </Row>
            </Container>

            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
    );
}

export default App;
