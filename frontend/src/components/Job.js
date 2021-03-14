import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import 'bootstrap/dist/css/bootstrap.min.css';


function Job(props) {
    let stateMap = {"Done": "success", "Running": "primary", "Pending": "warning", "Terminated": "danger"}

    const onDeleteJobHandler = () => {
        const requestOptions = {
            method: 'DELETE'
        };

        fetch('http://localhost:7000/jobs/'+props.id, requestOptions).then(data => {
            console.log("Done");
        });

    }

    return(
        <ListGroup horizontal>
            <ListGroup.Item style={{width: 200, backgroundColor: "#FBFBFB"}}>{props.id}</ListGroup.Item>
            <ListGroup.Item className="flex-fill">{props.name}</ListGroup.Item>
            <ListGroup.Item style={{width: 200}} variant={stateMap[props.state]}>{props.state} <button type="button" className="close" onClick={onDeleteJobHandler}>&times;</button></ListGroup.Item>
        </ListGroup>
    );
}

export default Job;