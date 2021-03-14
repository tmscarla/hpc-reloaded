import React from 'react';
import logo from './assets/logo.png';
import './App.css';
import JobList from "./components/JobList";
import JobForm from "./components/JobForm";
import {Button, Card, Jumbotron, ListGroupItem, Navbar} from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";


function App () {
    return (
        <div className="App">

            {/* Header */}
            <Jumbotron className="App-header" style={{backgroundColor: "#232F3E"}}>
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        className="d-inline-block App-logo"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
            </Jumbotron>

            {/* Intro */}
            <Jumbotron style={{backgroundColor: "#FBFBFB"}}>
                <h1>Welcome to HPC Reloaded! 🎉</h1>
                <p>
                    Learn how you can submit and execute jobs remotely with no required configurations!<br/>
                    Through a complex system of mirrors and levers, our HPC frontend acts on your behalf in order to guarantee a frustration-free experience.
                </p>
                <p>
                    Although our system eliminates successfully the burden of HPC complexity, it is still in development mode.<br/>
                    We can only guarantee a 80% job submission success rate 🤗
                </p>
                <p>
                    <Button href="#form" style={{backgroundColor: "#E47911", border: "0", fontWeight: "bolder"}}>Get Started</Button>
                </p>
            </Jumbotron>

            {/* Jobs */}
            <Card style={{ width: '50%', border: "white", marginLeft: "25%", padding: 20}}>
                {/* Jobs Header */}
                <ListGroupItem style={{border: "white", padding: 0, paddingBottom: 20}}>
                    <ListGroup horizontal>
                        <ListGroup.Item style={{width: 200, backgroundColor: "#FBFBFB", fontWeight: "bold"}}>ID</ListGroup.Item>
                        <ListGroup.Item className="flex-fill" style={{backgroundColor: "#FBFBFB", fontWeight: "bold"}}>NAME</ListGroup.Item>
                        <ListGroup.Item style={{width: 200, backgroundColor: "#FBFBFB", fontWeight: "bold"}}>STATE</ListGroup.Item>
                    </ListGroup>
                </ListGroupItem>
                {/* Jobs List */}
                <JobList/>
                <JobForm/>
            </Card>

            {/* Footer */}
            <Jumbotron style={{backgroundColor: "#FBFBFB"}}>
                <h3>Credits</h3>
                <p>
                    <a href="https://github.com/mgiacomo">@mgiacomo</a> | <a href="https://github.com/tmscarla">@tmscarla</a>
                </p>
            </Jumbotron>

        </div>
    );
}

export default App;
